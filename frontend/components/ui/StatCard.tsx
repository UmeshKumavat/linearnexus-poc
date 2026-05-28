import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: string | number;
  change: string;
  isPositive: boolean;
  timeframe?: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export default function StatCard({
  title,
  value,
  change,
  isPositive,
  timeframe = 'vs last period',
  icon: Icon,
}: StatCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl border border-[#E2E8F0] shadow-sm hover:shadow-md transition-all duration-200 group">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
          {title}
        </span>
        {Icon && (
          <div className="p-2 rounded-lg bg-slate-50 text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
            <Icon className="w-4 h-4" />
          </div>
        )}
      </div>
      <div className="flex items-baseline gap-2.5">
        <span className="text-3xl font-bold tracking-tight text-[#0F172A]">
          {value}
        </span>
        <span
          className={cn(
            'inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full text-xs font-semibold',
            isPositive
              ? 'bg-emerald-50 text-emerald-700'
              : 'bg-rose-50 text-rose-700'
          )}
        >
          {isPositive ? (
            <ArrowUpRight className="w-3.5 h-3.5" />
          ) : (
            <ArrowDownRight className="w-3.5 h-3.5" />
          )}
          {change}
        </span>
      </div>
      <p className="text-xs text-slate-400 mt-2 font-medium">
        {timeframe}
      </p>
    </div>
  );
}
