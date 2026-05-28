'use client';

import React, { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import PageHeader from '@/components/ui/PageHeader';
import DataTable, { Column } from '@/components/ui/DataTable';
import Badge from '@/components/ui/Badge';
import EmptyState from '@/components/ui/EmptyState';
import { MOCK_CONTACTS } from '@/lib/constants';
import { Contact } from '@/types';
import { Search, UserCheck, Plus, Sparkles, Filter } from 'lucide-react';

export default function ContactsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  // Filtering mock contacts based on search query
  const filteredContacts = MOCK_CONTACTS.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.jobTitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .slice(0, 2)
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  const columns: Column<Contact>[] = [
    {
      header: 'Name',
      accessorKey: 'name',
      render: (row) => (
        <div className="flex items-center gap-3">
          <div className="w-8.5 h-8.5 rounded-full bg-slate-100 border border-[#E2E8F0] flex items-center justify-center font-bold text-slate-700 text-xs shadow-sm">
            {getInitials(row.name)}
          </div>
          <span className="font-bold text-[#0F172A]">{row.name}</span>
        </div>
      ),
    },
    {
      header: 'Email Address',
      accessorKey: 'email',
      className: 'text-[#64748B] font-semibold',
    },
    {
      header: 'Company Name',
      accessorKey: 'company',
      className: 'font-bold text-[#0F172A]',
    },
    {
      header: 'Job Title',
      accessorKey: 'jobTitle',
      className: 'text-[#64748B] font-semibold',
    },
    {
      header: 'Enrichment Source',
      accessorKey: 'source',
      render: (row) => {
        const isAI = row.source.includes('AI');
        return (
          <Badge variant={isAI ? 'success' : 'neutral'}>
            <span className="flex items-center gap-1 font-bold text-[10px]">
              {isAI && <Sparkles className="w-3 h-3 text-emerald-600 fill-emerald-100" />}
              {row.source}
            </span>
          </Badge>
        );
      },
    },
    {
      header: 'Created Date',
      accessorKey: 'createdDate',
      className: 'text-[#94A3B8] text-xs font-semibold',
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <PageHeader
          title="Contacts Graph"
          description="View automatically harvested contact profiles and system information extracted from customer communications."
          actions={
            <button
              onClick={() => alert('Manually adding contacts is coming in Module 3!')}
              className="px-4 py-2 text-sm font-semibold text-white bg-[#2563EB] hover:bg-blue-700 active:bg-blue-800 rounded-lg shadow-sm flex items-center gap-2 transition-all cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Add Contact</span>
            </button>
          }
        />

        {/* Filter and Search controls */}
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-between bg-white p-4 rounded-xl border border-[#E2E8F0] shadow-sm mb-6">
          <div className="relative w-full sm:max-w-xs group">
            <Search className="w-4 h-4 text-[#94A3B8] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search contacts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 text-xs rounded-lg border border-[#E2E8F0] bg-white outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 transition-all text-[#0F172A]"
            />
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto self-stretch sm:self-auto justify-end">
            <button className="px-3 py-1.5 border border-[#E2E8F0] hover:bg-slate-50 text-xs font-bold text-[#64748B] hover:text-[#0F172A] rounded-lg flex items-center gap-1.5 transition-colors">
              <Filter className="w-3.5 h-3.5 text-[#94A3B8]" />
              <span>Filter</span>
            </button>
            <span className="text-xs text-[#94A3B8] font-bold">
              Showing {filteredContacts.length} of {MOCK_CONTACTS.length} contacts
            </span>
          </div>
        </div>

        {/* Table representation */}
        <DataTable
          columns={columns}
          data={filteredContacts}
          emptyState={
            <EmptyState
              title="No contacts found"
              description={`We couldn't find any contacts matching "${searchQuery}". Try editing your query.`}
              icon={UserCheck}
            />
          }
        />
      </div>
    </DashboardLayout>
  );
}
