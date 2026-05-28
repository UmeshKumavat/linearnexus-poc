'use client';

import React from 'react';
import { Search, Bell, Mail, ChevronDown } from 'lucide-react';

export default function TopNavbar() {
  return (
    <header className="h-16 border-b border-[#E2E8F0] bg-white px-6 flex items-center justify-between sticky top-0 z-20">
      {/* Search Bar */}
      <div className="flex-1 max-w-sm">
        <div className="relative">
          <Search className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search Anything..."
            className="w-full pl-10 pr-4 py-1.5 text-sm rounded-lg border border-[#E2E8F0] bg-white outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 transition-all placeholder:text-[#94A3B8] text-[#0F172A]"
          />
        </div>
      </div>

      {/* Utilities */}
      <div className="flex items-center gap-4.5">
        {/* Email Icon */}
        <button className="relative text-[#94A3B8] hover:text-[#64748B] transition-colors p-1.5 rounded-lg hover:bg-slate-50">
          <Mail className="w-5 h-5" />
        </button>

        {/* Notifications */}
        <button className="relative text-[#94A3B8] hover:text-[#64748B] transition-colors p-1.5 rounded-lg hover:bg-slate-50">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white"></span>
        </button>

        <div className="h-6 w-px bg-[#E2E8F0]"></div>

        {/* User Profile */}
        <div className="flex items-center gap-3 select-none cursor-pointer group">
          <span className="text-sm font-semibold text-[#0F172A]">
            Hi, <span className="font-bold">Alex Mercer</span>
          </span>
          <div className="w-9 h-9 rounded-full bg-[#E2E8F0] flex items-center justify-center font-bold text-slate-700 text-xs shadow-sm overflow-hidden border border-slate-200">
            AM
          </div>
          <ChevronDown className="w-4 h-4 text-[#94A3B8] group-hover:text-[#64748B] transition-colors" />
        </div>
      </div>
    </header>
  );
}
