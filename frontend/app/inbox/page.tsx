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
        return <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-rose-50 text-rose-600 border border-rose-100">Gmail</span>;
      case 'Outlook':
        return <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-blue-50 text-blue-600 border border-blue-100">Outlook</span>;
      default:
        return <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-slate-50 text-slate-600 border border-slate-100">IMAP</span>;
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6 h-full flex flex-col">
        <PageHeader
          title="Unified Inbox"
          description="Manage synced business emails, inspect intent scoring, and review autonomous AI contact enrichment logs."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start flex-1">
          <div className="lg:col-span-5 bg-white border border-[#E2E8F0] rounded-xl shadow-sm overflow-hidden flex flex-col h-[600px]">
            <div className="px-4 py-3 bg-slate-50/50 border-b border-[#E2E8F0] flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">All Messages</span>
              <span className="px-2 py-0.5 text-[10px] font-bold bg-blue-100 text-blue-700 rounded-full">
                {INBOX_THREADS.filter((m) => m.status === 'unread').length} Unread
              </span>
            </div>

            <div className="flex-1 overflow-y-auto divide-y divide-slate-100">
              {INBOX_THREADS.map((message) => {
                const isSelected = selectedMessage.id === message.id;
                const isUnread = message.status === 'unread';

                return (
                  <div
                    key={message.id}
                    onClick={() => {
                      setSelectedMessage(message);
                      setReplyText('');
                    }}
                    className={cn(
                      'p-4 cursor-pointer transition-all duration-150 relative border-l-2',
                      isSelected
                        ? 'bg-blue-50/40 border-blue-600'
                        : isUnread
                        ? 'bg-slate-50/20 border-teal-600 hover:bg-slate-50/50'
                        : 'border-transparent hover:bg-slate-50/30'
                    )}
                  >
                    <div className="flex justify-between items-start gap-2 mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className={cn('text-sm text-[#0F172A]', isUnread ? 'font-bold' : 'font-medium')}>
                          {message.sender}
                        </span>
                        {getAccountBadge(message.account)}
                      </div>
                      <span className="text-[10px] text-slate-400 font-semibold">{message.time}</span>
                    </div>

                    <h4 className={cn('text-xs truncate text-slate-700 mb-1', isUnread ? 'font-semibold' : 'font-normal')}>
                      {message.subject}
                    </h4>
                    <p className="text-[11px] text-slate-400 truncate max-w-sm mb-2">{message.body}</p>

                    <div className="flex items-center justify-between">
                      {getAIIntentLabel(message.intent)}
                      <div className="flex items-center gap-1">
                        <span className={cn('w-1.5 h-1.5 rounded-full', isUnread ? 'bg-blue-500' : 'bg-slate-300')}></span>
                        <span className="text-[9px] uppercase tracking-wider text-slate-400 font-semibold">{message.status}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-7 bg-white border border-[#E2E8F0] rounded-xl shadow-sm overflow-hidden flex flex-col h-[600px]">
            {selectedMessage ? (
              <div className="flex-1 flex flex-col h-full overflow-hidden">
                <div className="p-4 bg-slate-50/50 border-b border-[#E2E8F0] flex items-center justify-between shrink-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-slate-400">Account Source:</span>
                    {getAccountBadge(selectedMessage.account)}
                  </div>
                  <div className="flex items-center gap-2">
                    {getAIIntentLabel(selectedMessage.intent)}
                  </div>
                </div>

                <div className="flex-1 p-6 overflow-y-auto space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                    <div>
                      <h3 className="text-base font-bold text-slate-800">{selectedMessage.sender}</h3>
                      <p className="text-xs text-slate-400 font-medium">{selectedMessage.email}</p>
                    </div>
                    <span className="text-xs text-slate-400 font-semibold">{selectedMessage.time}</span>
                  </div>

                  <div>
                    <h2 className="text-sm font-bold text-slate-800 mb-3">{selectedMessage.subject}</h2>
                    <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-wrap">
                      {selectedMessage.body}
                    </p>
                  </div>

                  <div className="p-4 bg-teal-50/60 border border-teal-100 rounded-lg space-y-2.5">
                    <div className="flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-teal-600" />
                      <h4 className="text-xs font-bold text-teal-800">Autonomous CRM Log Summary</h4>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-teal-900 font-medium">
                      <div className="flex items-center gap-1.5">
                        <UserPlus className="w-3.5 h-3.5 text-teal-600" />
                        <span>Created Contact: {selectedMessage.sender}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <TrendingUp className="w-3.5 h-3.5 text-teal-600" />
                        <span>Created Lead Target: Opportunity Scored 85+</span>
                      </div>
                    </div>
                  </div>

                  <div className="border border-blue-100 bg-blue-50/20 rounded-lg p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-blue-600" />
                        <h4 className="text-xs font-bold text-blue-800">Suggested reply draft (Module 5 Engine)</h4>
                      </div>
                      <span className="text-[10px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded font-bold uppercase">AI Draft Ready</span>
                    </div>

                    <div className="p-3 bg-white border border-blue-100/50 rounded-lg font-mono text-xs text-slate-600 whitespace-pre-line">
                      {`Subject: Re: ${selectedMessage.subject}

Hi ${selectedMessage.sender.split(' ')[0]},

Thank you for your message regarding "${selectedMessage.subject}". We have verified your request and would love to follow up.

Do you have time for a brief 10-minute sync this week?

Best regards,
Alex Mercer
CRM Agent`}
                    </div>

                    <div className="flex justify-end">
                      <button
                        onClick={() => alert('Sending AI Response draft is coming in Module 5!')}
                        className="px-3.5 py-1.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-sm flex items-center gap-1.5 transition-colors"
                      >
                        <Send className="w-3 h-3" />
                        <span>Approve & Send Draft</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 border-t border-[#E2E8F0] shrink-0">
                  <form onSubmit={handleReplySubmit} className="flex gap-2">
                    <input
                      type="text"
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                      placeholder={`Reply to ${selectedMessage.sender}...`}
                      className="flex-1 px-4 py-2 text-sm rounded-lg border border-slate-200 bg-white outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all text-slate-800"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-slate-800 text-white rounded-lg font-semibold text-sm hover:bg-slate-700 active:bg-slate-900 transition-colors flex items-center gap-1.5"
                    >
                      <MessageSquareReply className="w-4 h-4" />
                      <span>Reply</span>
                    </button>
                  </form>
                </div>
              </div>
            ) : (
              <div className="flex-1 flex items-center justify-center p-12">
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
