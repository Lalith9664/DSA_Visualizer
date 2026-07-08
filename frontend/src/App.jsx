import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { VisualizerProvider } from './context/VisualizerContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import MainLayout from './layouts/MainLayout';

const LandingPage = lazy(() => import('./pages/LandingPage'));
const CategoryPage = lazy(() => import('./pages/CategoryPage'));
const VisualizerPage = lazy(() => import('./pages/VisualizerPage'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));

// Layout wrapper for pages requiring Navbar, Sidebar and BottomNav
const AppLayout = () => (
  <MainLayout>
    <Outlet />
  </MainLayout>
);

// ProtectedRoute: Only allowed if logged in
const ProtectedRoute = () => {
  const { currentUser, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] text-slate-400">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-500"></div>
      </div>
    );
  }

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

// PublicRoute: Only allowed if logged out
const PublicRoute = () => {
  const { currentUser, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] text-slate-400">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-500"></div>
      </div>
    );
  }

  if (currentUser) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
};

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
    <AuthProvider>
      <VisualizerProvider>
        <Router>
          <Suspense fallback={<LoadingScreen />}>
            <Routes>
              {/* Standalone Login/Auth Screen (Public Only) */}
              <Route element={<PublicRoute />}>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Route>

              {/* Core Application Pages wrapped in Layout (Protected Only) */}
              <Route element={<ProtectedRoute />}>
                <Route element={<AppLayout />}>
                  <Route path="/dashboard" element={<LandingPage />} />
                  <Route path="/category/:categoryId" element={<CategoryPage />} />
                  <Route path="/visualizer/:algoId" element={<VisualizerPage />} />
                </Route>
              </Route>

              {/* Fallback route */}
              <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
          </Suspense>
        </Router>
      </VisualizerProvider>
    </AuthProvider>
  );
}

export default App;
