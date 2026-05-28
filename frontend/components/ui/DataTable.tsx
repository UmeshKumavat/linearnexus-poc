import React from 'react';
import { cn } from '@/lib/utils';

export interface Column<T> {
  header: string;
  accessorKey: keyof T | string;
  render?: (row: T) => React.ReactNode;
  className?: string;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  onRowClick?: (row: T) => void;
  emptyState?: React.ReactNode;
}

export default function DataTable<T extends { id: string | number }>({
  columns,
  data,
  onRowClick,
  emptyState,
}: DataTableProps<T>) {
  if (data.length === 0 && emptyState) {
    return <>{emptyState}</>;
  }

  return (
    <div className="w-full overflow-hidden bg-white rounded-xl border border-[#E2E8F0] shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/70 border-b border-[#E2E8F0]">
              {columns.map((column, index) => (
                <th
                  key={index}
                  className={cn(
                    'px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500',
                    column.className
                  )}
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {data.map((row) => (
              <tr
                key={row.id}
                onClick={() => onRowClick && onRowClick(row)}
                className={cn(
                  'transition-colors duration-150',
                  onRowClick ? 'cursor-pointer hover:bg-slate-50/50' : 'hover:bg-slate-50/20'
                )}
              >
                {columns.map((column, colIndex) => {
                  const val =
                    column.accessorKey in row
                      ? (row[column.accessorKey as keyof T] as React.ReactNode)
                      : null;

                  return (
                    <td
                      key={colIndex}
                      className={cn(
                        'px-6 py-4 text-sm text-[#0F172A] font-medium whitespace-nowrap',
                        column.className
                      )}
                    >
                      {column.render ? column.render(row) : val}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
