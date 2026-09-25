import React from "react";
import Navbar from "../components/common/Navbar";
import Sidebar from "../components/common/Sidebar";
import BottomNav from "../components/common/BottomNav";
import DesktopModeNotification from "../components/common/DesktopModeNotification";
import { useVisualizer } from "../context/VisualizerContext";

const MainLayout = ({ children }) => {
  const { sidebarOpen, isFullscreen } = useVisualizer();

  if (isFullscreen) {
    return (
      <div className="w-screen h-screen bg-bg text-text-primary flex flex-col font-sans overflow-hidden select-none">
        <main className="w-full h-full p-0 m-0 overflow-hidden flex-1">
          {children}
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg text-text-primary flex flex-col font-sans transition-all duration-300">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Container */}
      <div className="flex flex-1 pt-16 relative">
        {/* Sidebar */}
        <Sidebar />

        {/* Content Box */}
        <main
          className={`
            flex-1 p-4 sm:p-6 md:p-8 pb-24 lg:pb-8 flex flex-col gap-6 overflow-x-clip min-h-[calc(100vh-4rem)] transition-all duration-300
            ${sidebarOpen ? "lg:pl-80" : "pl-4 sm:pl-6 md:pl-8"}
          `}
        >
          {/* Mobile Desktop Mode Notification & Guide */}
          <DesktopModeNotification />

          {children}
        </main>
      </div>
      {/* Bottom Mobile Navigation Dock */}
      <BottomNav />
    </div>
  );
};

export default MainLayout;
