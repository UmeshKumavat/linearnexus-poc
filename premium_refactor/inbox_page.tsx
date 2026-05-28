'use client';

import React, { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import PageHeader from '@/components/ui/PageHeader';
import Badge from '@/components/ui/Badge';
import EmptyState from '@/components/ui/EmptyState';
import { INBOX_THREADS } from '@/lib/constants';
import { InboxMessage } from '@/types';
import {
  Mail,
  Sparkles,
  Inbox,
  Send,
  MessageSquareReply,
  UserPlus,
  TrendingUp,
  MoreVertical,
  Search,
  Filter,
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function InboxPage() {
  const [selectedMessage, setSelectedMessage] = useState<InboxMessage>(INBOX_THREADS[0]);
  const [replyText, setReplyText] = useState('');

  const handleReplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Replying functionality is coming in Module 5!');
    setReplyText('');
  };

  const getAIIntentLabel = (intent: string) => {
    switch (intent) {
      case 'high':
        return <Badge variant="success">High Intent 🔥</Badge>;
      case 'medium':
        return <Badge variant="warning">Medium</Badge>;
      case 'low':
        return <Badge variant="neutral">Low Intent</Badge>;
      default:
        return null;
    }
  };

  const getAccountBadge = (account: string) => {
    switch (account) {
      case 'Gmail':
        return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-50 text-rose-600 border border-rose-100">Gmail</span>;
      case 'Outlook':
        return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-blue-600 border border-blue-100">Outlook</span>;
      default:
        return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-600 border border-slate-200">IMAP</span>;
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6 flex flex-col h-full">
        {/* Header Section */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight text-[#0F172A]">Unified Inbox</h1>
          <div className="flex items-center gap-3">
            <button className="px-3 py-1.5 border border-[#E2E8F0] hover:bg-slate-50 text-xs font-semibold text-[#64748B] hover:text-[#0F172A] rounded-lg flex items-center gap-1.5 transition-colors">
              <Filter className="w-3.5 h-3.5 text-[#94A3B8]" />
              <span>Filter</span>
            </button>
          </div>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left panel: Inbox list (5 cols) */}
          <div className="lg:col-span-5 bg-white border border-[#E2E8F0] rounded-xl shadow-sm overflow-hidden flex flex-col h-[580px]">
            {/* Header Title */}
            <div className="px-5 py-4 bg-slate-50/50 border-b border-[#E2E8F0] flex items-center justify-between">
              <span className="text-xs font-bold text-[#64748B] uppercase tracking-wider">All Threads</span>
              <span className="px-2 py-0.5 text-[10px] font-bold bg-blue-50 text-[#2563EB] border border-blue-100 rounded-full">
                {INBOX_THREADS.filter((m) => m.status === 'unread').length} Unread
              </span>
            </div>

            {/* Email Threads */}
            <div className="flex-1 overflow-y-auto divide-y divide-slate-100">
              {INBOX_THREADS.map((message) => {
                const isSelected = selectedMessage?.id === message.id;
                const isUnread = message.status === 'unread';

                return (
                  <div
                    key={message.id}
                    onClick={() => {
                      setSelectedMessage(message);
                      setReplyText('');
                    }}
                    className={cn(
                      'p-5 cursor-pointer transition-all duration-150 relative border-l-3',
                      isSelected
                        ? 'bg-blue-50/30 border-[#2563EB]'
                        : isUnread
                        ? 'border-teal-500 hover:bg-slate-50/40'
                        : 'border-transparent hover:bg-slate-50/20'
                    )}
                  >
                    <div className="flex justify-between items-start gap-2 mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className={cn('text-sm text-[#0F172A]', isUnread ? 'font-bold' : 'font-medium')}>
                          {message.sender}
                        </span>
                        {getAccountBadge(message.account)}
                      </div>
                      <span className="text-[10px] text-[#94A3B8] font-bold">{message.time}</span>
                    </div>

                    <h4 className={cn('text-xs truncate text-slate-700 mb-1', isUnread ? 'font-semibold' : 'font-normal')}>
                      {message.subject}
                    </h4>
                    <p className="text-[11px] text-[#64748B] truncate max-w-sm mb-2">{message.body}</p>

                    <div className="flex items-center justify-between pt-1">
                      {getAIIntentLabel(message.intent)}
                      <div className="flex items-center gap-1.5">
                        <span className={cn('w-2 h-2 rounded-full', isUnread ? 'bg-[#2563EB]' : 'bg-slate-300')}></span>
                        <span className="text-[9px] uppercase tracking-wider text-[#94A3B8] font-bold">{message.status}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right panel: Reader (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-[#E2E8F0] rounded-xl shadow-sm overflow-hidden flex flex-col h-[580px]">
            {selectedMessage ? (
              <div className="flex-1 flex flex-col h-full overflow-hidden">
                {/* Action Bar */}
                <div className="p-4 bg-slate-50/50 border-b border-[#E2E8F0] flex items-center justify-between shrink-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-[#64748B]">Mailbox Source:</span>
                    {getAccountBadge(selectedMessage.account)}
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="text-[#94A3B8] hover:text-[#64748B] p-1.5 hover:bg-slate-100 rounded-lg transition-colors">
                      <MoreVertical className="w-4.5 h-4.5" />
                    </button>
                  </div>
                </div>

                {/* Email Content Area */}
                <div className="flex-1 p-6 overflow-y-auto space-y-6">
                  {/* Sender Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                    <div>
                      <h3 className="text-base font-bold text-[#0F172A]">{selectedMessage.sender}</h3>
                      <p className="text-xs text-[#64748B] font-semibold mt-0.5">{selectedMessage.email}</p>
                    </div>
                    <span className="text-xs text-[#94A3B8] font-bold">{selectedMessage.time}</span>
                  </div>

                  {/* Body Content */}
                  <div className="space-y-3">
                    <h2 className="text-sm font-bold text-[#0F172A]">{selectedMessage.subject}</h2>
                    <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-wrap">
                      {selectedMessage.body}
                    </p>
                  </div>

                  {/* CRM Log Log Summary */}
                  <div className="p-4 bg-teal-50/40 border border-teal-100 rounded-xl space-y-3">
                    <div className="flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-teal-600" />
                      <h4 className="text-xs font-bold text-teal-800">LinearNexus AI Operations Summary</h4>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-teal-900 font-semibold">
                      <div className="flex items-center gap-2">
                        <UserPlus className="w-4 h-4 text-teal-600" />
                        <span>Created Contact: {selectedMessage.sender}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-teal-600" />
                        <span>Opened Opportunity (Score {selectedMessage.intent === 'high' ? '90+' : '75+'})</span>
                      </div>
                    </div>
                  </div>

                  {/* AI Suggested Response */}
                  <div className="border border-blue-100 bg-blue-50/20 rounded-xl p-4.5 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-[#2563EB]" />
                        <h4 className="text-xs font-bold text-[#2563EB]">Suggested Response Draft</h4>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-blue-100 text-blue-700 uppercase tracking-wider border border-blue-200">
                        AI Draft Compose
                      </span>
                    </div>

                    <div className="p-3 bg-white border border-blue-100/50 rounded-lg font-mono text-xs text-slate-600 whitespace-pre-line leading-relaxed shadow-sm">
                      {`Subject: Re: ${selectedMessage.subject}

Hi ${selectedMessage.sender.split(' ')[0]},

Thank you for reaching out regarding "${selectedMessage.subject}". We have verified your request and would love to follow up.

Do you have time for a brief 10-minute sync this week?

Best regards,
Alex Mercer
CRM Operations`}
                    </div>

                    <div className="flex justify-end">
                      <button
                        onClick={() => alert('Sending reply is coming in Module 5!')}
                        className="px-3.5 py-1.5 text-xs font-bold text-white bg-[#2563EB] hover:bg-blue-700 rounded-lg shadow-sm flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <Send className="w-3 h-3" />
                        <span>Send Response Draft</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Reply Form Footer */}
                <div className="p-4 bg-slate-50 border-t border-[#E2E8F0] shrink-0">
                  <form onSubmit={handleReplySubmit} className="flex gap-2">
                    <input
                      type="text"
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                      placeholder={`Reply to ${selectedMessage.sender}...`}
                      className="flex-1 px-4 py-2 text-sm rounded-lg border border-[#E2E8F0] bg-white outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-blue-100 transition-all text-slate-800"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-semibold text-sm transition-colors flex items-center gap-1.5 cursor-pointer shrink-0"
                    >
                      <MessageSquareReply className="w-4 h-4" />
                      <span>Reply</span>
                    </button>
                  </form>
                </div>
              </div>
            ) : (
              <div className="flex-1 flex items-center justify-center p-12 bg-slate-50/20">
                <EmptyState
                  title="No conversation selected"
                  description="Select a conversation thread from the left menu to view content details."
                  icon={Inbox}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
