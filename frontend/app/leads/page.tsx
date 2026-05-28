'use client';

import React, { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import Badge from '@/components/ui/Badge';
import EmptyState from '@/components/ui/EmptyState';
import { MOCK_LEADS } from '@/lib/constants';
import { Lead } from '@/types';
import {
  Search,
  Plus,
  Filter,
  Target,
  MoreVertical,
  Phone,
  Mail,
  Download,
  Flame,
  ChevronDown,
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function LeadsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  // Status mapping for Kanban columns
  const columns: { id: Lead['status']; label: string; color: string }[] = [
    { id: 'New', label: 'New', color: 'bg-orange-500' },
    { id: 'Contacted', label: 'Open', color: 'bg-blue-500' },
    { id: 'Qualified', label: 'In Progress', color: 'bg-yellow-500' },
    { id: 'Proposal', label: 'Open deal', color: 'bg-[#2563EB]' },
  ];

  // Filter leads based on query
  const filteredLeads = MOCK_LEADS.filter(
    (lead) =>
      lead.leadName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.owner.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Generate a consistent mock phone number based on lead ID
  const getMockPhone = (id: string) => {
    const numbers: Record<string, string> = {
      'lead-1': '603 555-0123',
      'lead-2': '239 555-0108',
      'lead-3': '808 555-0111',
      'lead-4': '684 555-0102',
      'lead-5': '217 555-0113',
    };
    return numbers[id] || '308 555-0121';
  };

  // Get initials for profile representation
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .slice(0, 2)
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Title & Export Action Section */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight text-[#0F172A]">Leads</h1>
          <button
            onClick={() => alert('Exporting data is coming in Module 6!')}
            className="px-4 py-2 text-sm font-semibold text-white bg-[#2563EB] hover:bg-blue-700 active:bg-blue-800 rounded-lg shadow-sm flex items-center gap-2 transition-all cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Export</span>
          </button>
        </div>

        {/* Filters and Search row matching screenshot */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            {/* Status Dropdown Filter */}
            <div className="relative">
              <button className="px-4 py-2 border border-[#E2E8F0] bg-white text-xs font-semibold text-[#64748B] hover:text-[#0F172A] rounded-lg flex items-center gap-2 transition-colors">
                <span>All Status</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#94A3B8]" />
              </button>
            </div>
            {/* Source Dropdown Filter */}
            <div className="relative">
              <button className="px-4 py-2 border border-[#E2E8F0] bg-white text-xs font-semibold text-[#64748B] hover:text-[#0F172A] rounded-lg flex items-center gap-2 transition-colors">
                <span>All Sources</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#94A3B8]" />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4.5">
            {/* Search Input */}
            <div className="relative w-full md:w-60 group">
              <Search className="w-4 h-4 text-[#94A3B8] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search leads..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-1.5 text-xs rounded-lg border border-[#E2E8F0] bg-white outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 transition-all text-[#0F172A]"
              />
            </div>

            {/* Filter Toggle */}
            <button className="px-3 py-1.5 border border-transparent hover:bg-slate-50 text-xs font-bold text-[#64748B] hover:text-[#0F172A] rounded-lg flex items-center gap-1.5 transition-colors">
              <Filter className="w-3.5 h-3.5 text-[#94A3B8]" />
              <span>Filter</span>
            </button>
          </div>
        </div>

        {/* 4-Column Board Layout */}
        {filteredLeads.length === 0 ? (
          <EmptyState
            title="No leads matching your search"
            description="Adjust your search criteria to locate lead opportunities."
            icon={Target}
          />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
            {columns.map((column) => {
              const columnLeads = filteredLeads.filter((lead) => lead.status === column.id);

              return (
                <div key={column.id} className="space-y-4">
                  {/* Column Header */}
                  <div className="flex items-center justify-between px-1">
                    <div className="flex items-center gap-2">
                      <span className={cn('w-2.5 h-2.5 rounded-full shrink-0', column.color)}></span>
                      <span className="text-sm font-bold text-[#0F172A]">{column.label}</span>
                    </div>
                    <span className="px-2 py-0.5 text-[10px] font-bold text-[#64748B] bg-[#F1F5F9] rounded-md">
                      {columnLeads.length} {columnLeads.length === 1 ? 'Lead' : 'Leads'}
                    </span>
                  </div>

                  {/* Column Body - Cards Stack */}
                  <div className="space-y-4 min-h-[300px] rounded-xl bg-slate-50/20 p-1">
                    {columnLeads.map((lead) => (
                      <div
                        key={lead.id}
                        className="bg-white p-4.5 rounded-xl border border-[#E2E8F0] shadow-sm hover:shadow-md transition-shadow relative space-y-4"
                      >
                        {/* Top Row: Initials, Name, Company, Action menu */}
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full bg-slate-100 border border-[#E2E8F0] flex items-center justify-center font-bold text-slate-700 text-xs shadow-sm shrink-0">
                              {getInitials(lead.company)}
                            </div>
                            <div className="min-w-0">
                              <h3 className="text-sm font-bold text-[#0F172A] truncate leading-tight group hover:text-blue-600 cursor-pointer">
                                {lead.leadName}
                              </h3>
                              <p className="text-[11px] text-[#94A3B8] font-bold mt-1">
                                {lead.createdDate} 10:30 PM
                              </p>
                            </div>
                          </div>
                          <button className="text-[#94A3B8] hover:text-[#64748B] p-1.5 hover:bg-slate-50 rounded-lg shrink-0 transition-colors">
                            <MoreVertical className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Divider Line */}
                        <div className="border-t border-slate-100"></div>

                        {/* Middle Row: Contact Info (Phone & Email) */}
                        <div className="space-y-2 text-xs font-semibold text-[#64748B]">
                          <div className="flex items-center gap-2">
                            <Phone className="w-3.5 h-3.5 text-[#94A3B8]" />
                            <span>{getMockPhone(lead.id)}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Mail className="w-3.5 h-3.5 text-[#94A3B8] truncate" />
                            <span className="truncate">{lead.sourceEmail}</span>
                          </div>
                        </div>

                        {/* Bottom Row: Score badge and Action Indicator */}
                        <div className="flex items-center justify-between pt-1">
                          <div className="flex items-center gap-1.5">
                            <span className="text-[10px] font-bold text-[#94A3B8] uppercase">Owner:</span>
                            <span className="text-[10px] font-bold text-slate-700">{lead.owner.split(' ')[0]}</span>
                          </div>
                          
                          {/* Visual Stage Indicator matching Dead/In Process style */}
                          {lead.score >= 85 ? (
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-orange-50 text-orange-600 border border-orange-100 flex items-center gap-1">
                              <Flame className="w-3 h-3 text-orange-500 fill-orange-500" />
                              Hot Lead
                            </span>
                          ) : (
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-blue-600 border border-blue-100">
                              Active
                            </span>
                          )}
                        </div>
                      </div>
                    ))}

                    {columnLeads.length === 0 && (
                      <div className="h-28 border border-dashed border-[#E2E8F0] rounded-xl flex items-center justify-center text-xs font-semibold text-[#94A3B8]">
                        Drag leads here
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
