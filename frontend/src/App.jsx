import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { VisualizerProvider } from './context/VisualizerContext';
import MainLayout from './layouts/MainLayout';

const LandingPage = lazy(() => import('./pages/LandingPage'));
const CategoryPage = lazy(() => import('./pages/CategoryPage'));
const VisualizerPage = lazy(() => import('./pages/VisualizerPage'));

function App() {
  return (
    <VisualizerProvider>
      <Router>
        <MainLayout>
          <Suspense fallback={
            <div className="flex items-center justify-center min-h-[60vh] text-slate-400">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-500"></div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/category/:categoryId" element={<CategoryPage />} />
              <Route path="/visualizer/:algoId" element={<VisualizerPage />} />
              {/* Fallback route back to landing */}
              <Route path="*" element={<LandingPage />} />
            </Routes>
          </Suspense>
        </MainLayout>
      </Router>
    </VisualizerProvider>
  );
}

export default App;
