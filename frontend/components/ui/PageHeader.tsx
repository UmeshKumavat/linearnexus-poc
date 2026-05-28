import React from 'react';

interface PageHeaderProps {
  title: string;
  description?: string;
  actions?: React.ReactNode;
}

export default function PageHeader({ title, description, actions }: PageHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
      <div className="flex-1 min-w-0">
        <h1 className="text-2xl font-bold tracking-tight text-[#0F172A] mb-1 sm:text-3xl">
          {title}
        </h1>
        {description && (
          <p className="text-sm font-medium text-slate-500 max-w-2xl leading-normal">
            {description}
          </p>
        )}
      </div>
      {actions && (
        <div className="flex items-center gap-3 self-start md:self-center shrink-0">
          {actions}
        </div>
      )}
    </div>
  );
}
