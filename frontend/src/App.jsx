import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate, useLocation } from 'react-router-dom';
import { VisualizerProvider } from './context/VisualizerContext';
import MainLayout from './layouts/MainLayout';

const LandingPage = lazy(() => import('./pages/LandingPage'));
const CategoryPage = lazy(() => import('./pages/CategoryPage'));
const VisualizerPage = lazy(() => import('./pages/VisualizerPage'));

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Layout wrapper for pages requiring Navbar, Sidebar and BottomNav
const AppLayout = () => (
  <MainLayout>
    <Outlet />
  </MainLayout>
);

const LoadingScreen = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] text-slate-400 py-12">
    <div className="relative w-16 h-16">
      {/* Pulsing outer glow */}
      <div className="absolute inset-0 rounded-full bg-purple-500/20 animate-ping" />
      {/* Spinning gradient ring */}
      <div className="absolute inset-0 rounded-full border-4 border-slate-800" />
      <div className="absolute inset-0 rounded-full border-4 border-t-purple-500 border-r-emerald-500 border-b-transparent border-l-transparent animate-spin" style={{ animationDuration: '0.8s' }} />
    </div>
    <div className="flex flex-col items-center gap-1.5 mt-4">
      <span className="text-xs font-semibold tracking-widest text-slate-300 font-mono animate-pulse uppercase">
        Loading Component
      </span>
      <span className="text-[9px] font-bold text-slate-500 font-mono tracking-widest uppercase">
        DSA Visualizer
      </span>
    </div>
  </div>
);

function App() {
  return (
    <VisualizerProvider>
      <Router>
        <ScrollToTop />
        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            {/* Core Application Pages wrapped in Layout */}
            <Route element={<AppLayout />}>
              <Route path="/" element={<LandingPage />} />
              <Route path="/dashboard" element={<LandingPage />} />
              <Route path="/category/:categoryId" element={<CategoryPage />} />
              <Route path="/visualizer/:algoId" element={<VisualizerPage />} />
            </Route>

            {/* Fallback route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </Router>
    </VisualizerProvider>
  );
}

export default App;
