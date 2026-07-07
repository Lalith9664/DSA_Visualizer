import React, { createContext, useContext, useState, useEffect, useRef } from 'react';

const VisualizerContext = createContext(null);

export const useVisualizer = () => {
  const context = useContext(VisualizerContext);
  if (!context) {
    throw new Error('useVisualizer must be used within a VisualizerProvider');
  }
  return context;
};

export const VisualizerProvider = ({ children }) => {
  // Theme state
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  // Playback control state
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1); // 0.25, 0.5, 1, 2, 5
  const [currentStep, setCurrentStep] = useState(0);
  const [steps, setSteps] = useState([]); // Array of snapshots representing algorithm states
  const [currentAlgoId, setCurrentAlgoId] = useState(null);
  
  // Custom Input State
  const [customInput, setCustomInput] = useState('');
  
  // Sidebar state
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Favorites & Recents in LocalStorage
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [recentlyViewed, setRecentlyViewed] = useState(() => {
    const saved = localStorage.getItem('recentlyViewed');
    return saved ? JSON.parse(saved) : [];
  });

  // Apply theme class to document element
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Sync favorites to localStorage
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Sync recently viewed to localStorage
  useEffect(() => {
    localStorage.setItem('recentlyViewed', JSON.stringify(recentlyViewed));
  }, [recentlyViewed]);

  // Auto-playing timer logic
  const timerRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      const delay = Math.max(100, 1000 / speed); // compute delay based on speed factor
      timerRef.current = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev >= steps.length - 1) {
            setIsPlaying(false);
            clearInterval(timerRef.current);
            return prev;
          }
          return prev + 1;
        });
      }, delay);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPlaying, speed, steps.length]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const toggleFavorite = (algoId) => {
    setFavorites((prev) => {
      if (prev.includes(algoId)) {
        return prev.filter((id) => id !== algoId);
      } else {
        return [...prev, algoId];
      }
    });
  };

  const addToRecent = (algoId) => {
    setRecentlyViewed((prev) => {
      const filtered = prev.filter((id) => id !== algoId);
      return [algoId, ...filtered].slice(0, 5); // Store top 5 recents
    });
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const resetVisualizer = () => {
    setIsPlaying(false);
    setCurrentStep(0);
  };

  return (
    <VisualizerContext.Provider
      value={{
        theme,
        toggleTheme,
        isPlaying,
        setIsPlaying,
        speed,
        setSpeed,
        currentStep,
        setCurrentStep,
        steps,
        setSteps,
        currentAlgoId,
        setCurrentAlgoId,
        customInput,
        setCustomInput,
        sidebarOpen,
        setSidebarOpen,
        favorites,
        toggleFavorite,
        recentlyViewed,
        addToRecent,
        nextStep,
        prevStep,
        resetVisualizer,
      }}
    >
      {children}
    </VisualizerContext.Provider>
  );
};
