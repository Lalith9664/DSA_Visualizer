import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Terminal } from 'lucide-react';
import RegisterForm from './RegisterForm';

const RegisterCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, cubicBezier: [0.16, 1, 0.3, 1] }}
      className="
        w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[440px] p-6 sm:p-8 lg:p-10 rounded-[28px] bg-white dark:bg-[#161B26]
        border border-white/60 dark:border-white/5
        shadow-[12px_12px_32px_rgba(31,38,135,0.05),-8px_-8px_20px_rgba(255,255,255,0.95)]
        dark:shadow-[12px_12px_32px_rgba(0,0,0,0.35),-4px_-4px_12px_rgba(255,255,255,0.02)]
        relative overflow-hidden flex flex-col items-center gap-5
      "
    >

      {/* App Logo Indicator - Clay style */}
      <motion.div
        whileHover={{ rotate: 5, scale: 1.05 }}
        className="
          w-16 h-16 rounded-[22px] bg-emerald-50 dark:bg-slate-900/60
          border border-white dark:border-slate-800
          shadow-[4px_6px_12px_rgba(99,102,241,0.1),inset_2px_2px_4px_rgba(255,255,255,0.9),inset_-3px_-3px_5px_rgba(99,102,241,0.05)]
          dark:shadow-[4px_6px_12px_rgba(0,0,0,0.2),inset_1px_1px_2px_rgba(255,255,255,0.1),inset_-3px_-3px_5px_rgba(0,0,0,0.3)]
          flex items-center justify-center text-emerald-500 dark:text-emerald-400
          transition-transform duration-300
        "
      >
        <Terminal className="w-8 h-8 text-emerald-500 dark:text-emerald-400 animate-pulse" />
      </motion.div>

      {/* Header Info */}
      <div className="text-center flex flex-col gap-1.5 w-full">
        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 dark:text-slate-100 font-sans tracking-tight">
          DSA <span className="text-emerald-500">Visualizer</span>
        </h2>
        <p className="text-[13px] text-slate-500 dark:text-slate-400 font-medium">
          Create an account to start your learning journey.
        </p>
      </div>

      {/* Register Form component */}
      <RegisterForm />

      {/* Footer link - sign in */}
      <div className="flex items-center justify-center gap-1.5 text-[13px] text-slate-500 dark:text-slate-400 font-semibold font-sans mt-2">
        <span>Already have an account?</span>
        <Link
          to="/login"
          className="
            px-3 py-1.5 rounded-xl text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-500/5 hover:bg-emerald-500/10
            border border-emerald-500/10 hover:border-emerald-500/20 transition-all duration-300
          "
        >
          Sign In
        </Link>
      </div>
    </motion.div>
  );
};

export default RegisterCard;
