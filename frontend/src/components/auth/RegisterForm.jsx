import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, Loader2 } from 'lucide-react';
import InputField from './InputField';
import { useAuth } from '../../context/AuthContext';

const RegisterForm = () => {
  const navigate = useNavigate();
  const { registerWithEmail } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Must be at least 6 characters';
    }
    if (!confirmPassword) {
      newErrors.confirmPassword = 'Confirm your password';
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    try {
      await registerWithEmail(email, password);
      setIsLoading(false);
      navigate('/dashboard');
    } catch (err) {
      setIsLoading(false);
      let message = err.message || 'Failed to create an account. Please try again.';
      if (err.code === 'auth/email-already-in-use') {
        message = 'An account with this email already exists';
      } else if (err.code === 'auth/weak-password') {
        message = 'Password must be at least 6 characters long';
      } else if (err.code === 'auth/invalid-email') {
        message = 'Invalid email format';
      } else if (err.code === 'auth/operation-not-allowed') {
        message = 'Email/Password sign-in is disabled in your Firebase console. Go to Authentication > Sign-in method to enable it.';
      }
      setErrors({ form: message });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
      {errors.form && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-3 text-[12px] font-bold text-rose-500 bg-rose-500/10 border border-rose-500/20 rounded-xl text-center"
        >
          {errors.form}
        </motion.div>
      )}

      {/* Email Input */}
      <InputField
        id="email"
        label="Email Address"
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          if (errors.email) setErrors({ ...errors, email: '' });
        }}
        placeholder="Enter your email"
        icon={Mail}
        error={errors.email}
      />

      {/* Password Input */}
      <InputField
        id="password"
        label="Password"
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          if (errors.password) setErrors({ ...errors, password: '' });
        }}
        placeholder="Create a password"
        icon={Lock}
        error={errors.password}
      />

      {/* Confirm Password Input */}
      <InputField
        id="confirmPassword"
        label="Confirm Password"
        type="password"
        value={confirmPassword}
        onChange={(e) => {
          setConfirmPassword(e.target.value);
          if (errors.confirmPassword) setErrors({ ...errors, confirmPassword: '' });
        }}
        placeholder="Confirm your password"
        icon={Lock}
        error={errors.confirmPassword}
      />

      {/* Register Button with Loader */}
      <motion.button
        type="submit"
        disabled={isLoading}
        whileHover={{ y: -3, scale: 1.01 }}
        whileTap={{ y: 1, scale: 0.99 }}
        className="
          relative w-full py-4 mt-4 font-sans font-bold text-white text-sm tracking-wide rounded-[20px]
          bg-emerald-500
          border-t border-emerald-400/30 shadow-[0_8px_24px_-4px_rgba(16,185,129,0.4),inset_2px_3px_4px_rgba(255,255,255,0.3),inset_-2px_-3px_5px_rgba(0,0,0,0.15)]
          hover:shadow-[0_12px_28px_-3px_rgba(16,185,129,0.5),inset_2px_3px_4px_rgba(255,255,255,0.45)]
          disabled:opacity-75 disabled:cursor-not-allowed
          flex items-center justify-center gap-2
          transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-500/25
        "
      >
        {isLoading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Creating Account...</span>
          </>
        ) : (
          <span>Create Account</span>
        )}
      </motion.button>
    </form>
  );
};

export default RegisterForm;
