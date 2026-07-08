import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, Loader2 } from 'lucide-react';
import InputField from './InputField';
import SocialButtons from './SocialButtons';
import { useAuth } from '../../context/AuthContext';

const LoginForm = () => {
  const navigate = useNavigate();
  const { loginWithEmail } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
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
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    try {
      await loginWithEmail(email, password);
      setIsLoading(false);
      navigate('/dashboard');
    } catch (err) {
      setIsLoading(false);
      let message = err.message || 'Failed to sign in. Please check your credentials.';
      if (
        err.code === 'auth/user-not-found' ||
        err.code === 'auth/wrong-password' ||
        err.code === 'auth/invalid-credential'
      ) {
        message = 'Invalid email or password';
      } else if (err.code === 'auth/too-many-requests') {
        message = 'Account temporarily locked due to many failed attempts';
      } else if (err.code === 'auth/invalid-email') {
        message = 'Invalid email format';
      } else if (err.code === 'auth/operation-not-allowed') {
        message = 'Email/Password sign-in is disabled in your Firebase console. Go to Authentication > Sign-in method to enable it.';
      }
      setErrors({ form: message });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
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
        placeholder="Enter your password"
        icon={Lock}
        error={errors.password}
      />

      {/* Remember Me and Forgot Password */}
      <div className="flex justify-between items-center px-1 text-[13px] font-sans font-semibold">
        {/* Clay Checkbox */}
        <label className="flex items-center gap-2.5 cursor-pointer select-none text-slate-600 dark:text-slate-300">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
            className="sr-only"
          />
          <div
            className={`
              w-5 h-5 rounded-lg flex items-center justify-center transition-all duration-300 border
              ${
                rememberMe
                  ? 'bg-emerald-500 border-emerald-400 text-white shadow-[0_3px_8px_rgba(16,185,129,0.3)]'
                  : 'bg-slate-50 dark:bg-slate-900 border-slate-200/60 dark:border-slate-800 shadow-[inset_1px_1px_3px_rgba(0,0,0,0.03),inset_-2px_-2px_4px_rgba(255,255,255,0.7)] dark:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.25)]'
              }
            `}
          >
            {rememberMe && (
              <svg
                className="w-3.5 h-3.5 stroke-current"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="4"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            )}
          </div>
          <span>Remember Me</span>
        </label>

        {/* Forgot Password Link */}
        <a
          href="#forgot-password"
          onClick={(e) => {
            e.preventDefault();
            alert('Mock Password Reset link sent (visual preview).');
          }}
          className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 dark:hover:text-emerald-300 hover:underline transition-colors"
        >
          Forgot Password?
        </a>
      </div>

      {/* Login Button with Premium Animations & Loading states */}
      <motion.button
        type="submit"
        disabled={isLoading}
        whileHover={{ y: -3, scale: 1.01 }}
        whileTap={{ y: 1, scale: 0.99 }}
        className="
          relative w-full py-4 mt-2 font-sans font-bold text-white text-sm tracking-wide rounded-[20px]
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
            <span>Signing In...</span>
          </>
        ) : (
          <span>Sign In</span>
        )}
      </motion.button>

      {/* Divider */}
      <div className="flex items-center gap-3 my-2 text-slate-400/80 dark:text-slate-600/85">
        <div className="flex-1 h-[1px] bg-slate-200/70 dark:bg-slate-800/80" />
        <span className="text-[10px] font-bold tracking-widest text-slate-400 dark:text-slate-500">OR</span>
        <div className="flex-1 h-[1px] bg-slate-200/70 dark:bg-slate-800/80" />
      </div>

      {/* Social login deck */}
      <SocialButtons />
    </form>
  );
};

export default LoginForm;
