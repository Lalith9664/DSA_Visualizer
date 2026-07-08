import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';

// Google Icon SVG
const GoogleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      fill="#EA4335"
    />
  </svg>
);

const SocialButtons = () => {
  const navigate = useNavigate();
  const { loginWithGoogle } = useAuth();

  const handleGoogleClick = async () => {
    try {
      await loginWithGoogle();
      navigate('/dashboard');
    } catch (err) {
      console.error('Google Auth Error:', err);
      alert('Failed to sign in with Google: ' + err.message);
    }
  };

  return (
    <div className="flex justify-center w-full">
      <motion.button
        type="button"
        whileHover={{ y: -3, scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className="
          w-full py-3.5 px-4 rounded-[20px] bg-white dark:bg-slate-800/80
          border border-slate-200/50 dark:border-slate-700/50
          text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white
          shadow-[6px_8px_16px_rgba(0,0,0,0.03),inset_2px_2px_4px_rgba(255,255,255,0.7),inset_-3px_-3px_6px_rgba(0,0,0,0.02)]
          dark:shadow-[6px_8px_16px_rgba(0,0,0,0.15),inset_1px_1px_2px_rgba(255,255,255,0.05),inset_-3px_-3px_6px_rgba(0,0,0,0.3)]
          hover:shadow-[10px_14px_24px_rgba(0,0,0,0.05),inset_2px_2px_4px_rgba(255,255,255,0.85),inset_-4px_-4px_8px_rgba(0,0,0,0.03)]
          dark:hover:shadow-[10px_14px_24px_rgba(0,0,0,0.2),inset_1px_1px_2px_rgba(255,255,255,0.08),inset_-4px_-4px_8px_rgba(0,0,0,0.35)]
          flex items-center justify-center gap-2.5 font-sans font-bold text-[13px]
          transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-500/10
        "
        title="Sign in with Google"
        onClick={handleGoogleClick}
      >
        <GoogleIcon />
        <span>Continue with Google</span>
      </motion.button>
    </div>
  );
};

export default SocialButtons;
