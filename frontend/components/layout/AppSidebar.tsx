'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Mail,
  Users,
  TrendingUp,
  Sparkles,
  BarChart3,
  Settings,
  LogOut,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const sidebarItems = [
  { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  { name: 'Unified Inbox', path: '/inbox', icon: Mail },
  { name: 'Contacts', path: '/contacts', icon: Users },
  { name: 'Leads', path: '/leads', icon: TrendingUp },
  { name: 'AI Assistant', path: '/dashboard?tab=ai', icon: Sparkles, badge: 'Beta' },
  { name: 'Reports', path: '/dashboard?tab=reports', icon: BarChart3 },
  { name: 'Settings', path: '/settings', icon: Settings },
];

export default function AppSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white text-slate-600 flex flex-col h-screen fixed left-0 top-0 z-30 border-r border-[#E2E8F0]">
      {/* Brand Header */}
      <div className="h-16 flex items-center px-6 border-b border-[#E2E8F0]">
        <Link href="/dashboard" className="flex items-center gap-3 group">
          <div className="w-8.5 h-8.5 rounded-lg bg-gradient-to-tr from-[#2563EB] to-blue-500 flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-200">
            <Sparkles className="w-4.5 h-4.5 text-white" />
          </div>
          <span className="font-bold text-lg tracking-tight text-[#0F172A] group-hover:text-blue-600 transition-colors">
            Linear<span className="text-[#2563EB]">Nexus</span>
          </span>
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
        {sidebarItems.map((item) => {
          const isActive = pathname === item.path;
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.path}
              className={cn(
                'flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold transition-all duration-150 group',
                isActive
                  ? 'bg-[#2563EB] text-white shadow-sm'
                  : 'text-[#64748B] hover:text-[#0F172A] hover:bg-slate-50'
              )}
            >
              <div className="flex items-center gap-3">
                <Icon
                  className={cn(
                    'w-5 h-5 transition-colors',
                    isActive ? 'text-white' : 'text-[#94A3B8] group-hover:text-[#64748B]'
                  )}
                />
                <span>{item.name}</span>
              </div>
              {item.badge && (
                <span
                  className={cn(
                    'px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase rounded-full',
                    isActive
                      ? 'bg-blue-700 text-blue-100'
                      : 'bg-blue-50 text-blue-600 border border-blue-100'
                  )}
                >
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Workspace Footer */}
      <div className="p-4 border-t border-[#E2E8F0] bg-white">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-9 h-9 rounded-full bg-slate-100 border border-[#E2E8F0] flex items-center justify-center text-sm font-bold text-slate-700 shadow-sm shrink-0">
            AM
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-[#0F172A] truncate">Alex Mercer</p>
            <p className="text-xs text-[#64748B] font-semibold truncate">alex@linearnexus.ai</p>
          </div>
        </div>
        <Link
          href="/login"
          className="flex items-center gap-2 px-3 py-2 text-xs font-bold text-[#64748B] hover:text-[#0F172A] hover:bg-slate-50 rounded-md transition-colors"
        >
          <LogOut className="w-4 h-4 text-[#94A3B8]" />
          <span>Sign Out</span>
        </Link>
      </div>
    </aside>
  );
}
