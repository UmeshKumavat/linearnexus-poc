'use client';

import React from 'react';
import AppSidebar from './AppSidebar';
import TopNavbar from './TopNavbar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans antialiased">
      {/* Sidebar Navigation */}
      <AppSidebar />

      {/* Main App Container */}
      <div className="pl-64 flex flex-col min-h-screen">
        {/* Top Header Navbar */}
        <TopNavbar />

        {/* Dynamic Route Content */}
        <main className="flex-1 p-6 md:p-8 max-w-7xl w-full mx-auto animate-fade-in">
          {children}
        </main>
      </div>
    </div>
  );
}
