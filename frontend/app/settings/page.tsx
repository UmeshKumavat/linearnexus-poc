'use client';

import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import PageHeader from '@/components/ui/PageHeader';
import Badge from '@/components/ui/Badge';
import { Mail, Settings, RefreshCw, AlertCircle, ShieldAlert } from 'lucide-react';

export default function SettingsPage() {
  const connectionCards = [
    {
      id: 'gmail',
      name: 'Gmail Workspace Sync',
      description: 'Connect your corporate GSuite workspace to pull threads, catalog contacts, and sync drafts.',
      iconColor: 'bg-rose-50 border-rose-100 text-rose-500',
      badge: 'Highly Recommended',
      badgeVariant: 'success' as const,
    },
    {
      id: 'outlook',
      name: 'Microsoft Outlook 365',
      description: 'Secure OAuth sync for Azure/Microsoft 365 corporate mailboxes and user directories.',
      iconColor: 'bg-blue-50 border-blue-100 text-blue-500',
      badge: 'Enterprise Standard',
      badgeVariant: 'info' as const,
    },
    {
      id: 'imap',
      name: 'SMTP / IMAP Gateway',
      description: 'Configure raw email gateway credentials for custom domain hosting and standalone servers.',
      iconColor: 'bg-slate-50 border-slate-100 text-slate-500',
      badge: 'Legacy Support',
      badgeVariant: 'neutral' as const,
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <PageHeader
          title="Integrations & Settings"
          description="Manage external communication conduits, sync parameters, and review system configuration details."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Email accounts panel */}
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-bold text-slate-800 mb-1">Email Account Connections</h2>
              <p className="text-xs text-slate-400 font-semibold">Integrate active mailboxes to begin autonomous CRM syncing.</p>
            </div>

            <div className="space-y-4">
              {connectionCards.map((card) => (
                <div
                  key={card.id}
                  className="bg-white p-6 rounded-xl border border-[#E2E8F0] shadow-sm hover:shadow transition-all space-y-4"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex gap-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 border ${card.iconColor}`}>
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#0F172A]">{card.name}</h4>
                        <p className="text-xs text-slate-500 leading-relaxed mt-1">{card.description}</p>
                      </div>
                    </div>
                    <Badge variant={card.badgeVariant}>{card.badge}</Badge>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                    <span className="text-[10px] text-slate-400 font-bold uppercase flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> Not Connected
                    </span>
                    <button
                      onClick={() => alert('Mailbox connection features will be delivered in Module 2!')}
                      className="px-3.5 py-1.5 text-xs font-bold rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 active:bg-slate-100 transition-colors cursor-pointer"
                    >
                      Connect in Next Module
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CRM system settings panel */}
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-bold text-slate-800 mb-1">CRM Core Preferences</h2>
              <p className="text-xs text-slate-400 font-semibold">Fine-tune system preferences, automated scoring, and AI enrichments.</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E2E8F0] shadow-sm space-y-6">
              <div className="space-y-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Default Lead Owner
                </label>
                <select disabled className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-slate-50/50 text-slate-400 text-sm outline-none">
                  <option>Alex Mercer (alex@linearnexus.ai)</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
                  AI Intent Filter Threshold
                </label>
                <div className="flex items-center gap-3">
                  <input type="range" disabled min="0" max="100" defaultValue="70" className="flex-1 accent-blue-600 cursor-not-allowed" />
                  <span className="text-xs font-bold text-slate-400">70+ Score</span>
                </div>
                <p className="text-[10px] text-slate-400 leading-normal">
                  Emails matching intent scores lower than this threshold will bypass auto-lead pipelines.
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 space-y-4">
                <h4 className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4 text-amber-500" />
                  Pilot System Information
                </h4>
                <div className="text-xs text-slate-500 space-y-1.5 leading-normal">
                  <div className="flex justify-between">
                    <span>Database Status:</span>
                    <span className="font-semibold text-slate-600">Pending Setup (Supabase)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>AI Model Backend:</span>
                    <span className="font-semibold text-slate-600">Gemini/Groq Configured</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Active Version:</span>
                    <span className="font-semibold text-slate-600">v0.1.0-alpha (Module 1)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
