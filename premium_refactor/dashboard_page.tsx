'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import DashboardLayout from '@/components/layout/DashboardLayout';
import PageHeader from '@/components/ui/PageHeader';
import StatCard from '@/components/ui/StatCard';
import DataTable, { Column } from '@/components/ui/DataTable';
import Badge from '@/components/ui/Badge';
import EmptyState from '@/components/ui/EmptyState';
import { DASHBOARD_STATS, RECENT_ACTIVITIES, PIPELINE_SUMMARIES } from '@/lib/constants';
import { Activity } from '@/types';
import {
  TrendingUp,
  Mail,
  Users,
  Timer,
  Sparkles,
  BarChart3,
  Bot,
  BrainCircuit,
  ArrowRight,
  Flame,
  MoreVertical,
} from 'lucide-react';

function DashboardContent() {
  const searchParams = useSearchParams();
  const currentTab = searchParams.get('tab');

  // Icons mapping for stats
  const statIcons = [TrendingUp, Mail, Users, Timer];

  // Activities Table columns
  const activityColumns: Column<Activity>[] = [
    {
      header: 'SenderName',
      accessorKey: 'senderName',
      render: (row) => (
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-slate-100 border border-[#E2E8F0] flex items-center justify-center font-bold text-slate-700 text-xs shadow-sm">
            {row.senderName.split(' ').map((n) => n[0]).join('')}
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-[#0F172A]">{row.senderName}</span>
            <span className="text-[11px] text-[#94A3B8] font-bold">{row.senderEmail}</span>
          </div>
        </div>
      ),
    },
    {
      header: 'Email Subject',
      accessorKey: 'subject',
      render: (row) => (
        <span className="text-slate-600 truncate max-w-xs block font-semibold text-xs">
          {row.subject}
        </span>
      ),
    },
    {
      header: 'AI Intent',
      accessorKey: 'intent',
      render: (row) => {
        const variants = {
          high: 'success' as const,
          medium: 'warning' as const,
          low: 'neutral' as const,
        };
        return (
          <Badge variant={variants[row.intent]}>
            <span className="font-bold text-[10px]">
              {row.intent === 'high' ? 'High Intent 🔥' : row.intent === 'medium' ? 'Medium' : 'Low'}
            </span>
          </Badge>
        );
      },
    },
    {
      header: 'Status',
      accessorKey: 'status',
      render: (row) => {
        const variants = {
          replied: 'info' as const,
          pending: 'warning' as const,
          ignored: 'neutral' as const,
        };
        return (
          <Badge variant={variants[row.status]}>
            <span className="font-bold text-[10px]">{row.status.toUpperCase()}</span>
          </Badge>
        );
      },
    },
    {
      header: 'Time Received',
      accessorKey: 'time',
      className: 'text-[#94A3B8] font-bold text-xs',
    },
  ];

  const renderContent = () => {
    if (currentTab === 'ai') {
      return (
        <div className="space-y-6">
          <PageHeader
            title="AI Assistant Sandbox"
            description="Preview and configure autonomous email parsing models, intent matching, and automated email drafting (Module 3 & 5 preview)."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              {/* Chat Simulation */}
              <div className="bg-white rounded-xl border border-[#E2E8F0] shadow-sm flex flex-col h-[400px] overflow-hidden">
                <div className="px-6 py-4 border-b border-[#E2E8F0] flex items-center justify-between bg-slate-50/30">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#0F172A]">LinearNexus AI Copilot</h3>
                      <p className="text-[10px] text-emerald-600 font-bold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Gemini 2.5 Flash active
                      </p>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 text-[10px] bg-slate-100 text-slate-500 rounded font-bold uppercase tracking-wider">Sandbox Mode</span>
                </div>

                <div className="flex-1 p-6 space-y-4 overflow-y-auto bg-slate-50/50">
                  <div className="flex gap-3 max-w-[80%]">
                    <div className="w-7 h-7 rounded-full bg-slate-200 flex items-center justify-center text-xs font-semibold text-slate-600 shrink-0">AI</div>
                    <div className="bg-white p-3.5 rounded-xl border border-[#E2E8F0] shadow-sm text-xs font-medium text-slate-600 leading-relaxed">
                      Hello! I have scanned your linked Gmail mailbox. I found <strong>Sarah Jenkins</strong> (VP of Sales Ops, NexusTech) asking for pricing details. Her email shows <strong>High Intent</strong> (score: 94). I have automatically:
                      <ul className="list-disc pl-4 mt-2 space-y-1 text-[11px]">
                        <li>Created contact: <strong>Sarah Jenkins</strong></li>
                        <li>Opened lead: <strong>NexusTech Enterprise Expansion</strong></li>
                        <li>Generated custom reply draft (waiting for your approval in Inbox)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-3 max-w-[80%] ml-auto justify-end">
                    <div className="bg-[#2563EB] text-white p-3.5 rounded-xl shadow-sm text-xs font-semibold leading-normal">
                      Awesome. Can you show me the email reply draft you generated?
                    </div>
                    <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center text-xs font-semibold text-[#2563EB] shrink-0 border border-blue-200">Me</div>
                  </div>

                  <div className="flex gap-3 max-w-[80%]">
                    <div className="w-7 h-7 rounded-full bg-slate-200 flex items-center justify-center text-xs font-semibold text-slate-600 shrink-0">AI</div>
                    <div className="bg-white p-3.5 rounded-xl border border-[#E2E8F0] shadow-sm text-xs font-medium text-slate-600 leading-relaxed w-full space-y-2">
                      <p>Here is the draft I wrote for Sarah:</p>
                      <div className="p-3 bg-slate-50 border border-[#E2E8F0] rounded-lg font-mono text-[11px] text-slate-500 whitespace-pre-line leading-normal">
                        {`Subject: Re: Enterprise pricing request for LinearNexus integrations

Hi Sarah,

Thanks for reaching out! I'm glad you're interested in connecting LinearNexus. 

I'd be happy to discuss our enterprise pricing plans (which include SSO support, dedicated onboarding, and priority support) for your 150-member team. 

Do you have 15 minutes to connect tomorrow at 2 PM EST? 

Best regards,
Alex Mercer`}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 border-t border-[#E2E8F0] bg-white">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      disabled
                      placeholder="Interactive AI agent chat sandbox (Available in next modules)..."
                      className="flex-1 px-4 py-2 border border-[#E2E8F0] rounded-lg text-xs bg-slate-50/50 outline-none text-[#94A3B8] font-semibold"
                    />
                    <button disabled className="px-4 py-2 text-xs bg-slate-100 text-[#94A3B8] rounded-lg font-bold">Send</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl border border-[#E2E8F0] shadow-sm">
                <h3 className="text-sm font-bold text-[#0F172A] mb-4 flex items-center gap-2">
                  <BrainCircuit className="w-4 h-4 text-teal-600" />
                  AI Models Status
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3.5 bg-slate-50/50 border border-[#E2E8F0] rounded-lg">
                    <div>
                      <h4 className="text-xs font-bold text-slate-700">Email Extraction Engine</h4>
                      <p className="text-[10px] text-[#94A3B8] font-bold mt-0.5">Extracts contacts and job titles</p>
                    </div>
                    <Badge variant="success"><span className="text-[9px] font-bold">Active</span></Badge>
                  </div>

                  <div className="flex items-center justify-between p-3.5 bg-slate-50/50 border border-[#E2E8F0] rounded-lg">
                    <div>
                      <h4 className="text-xs font-bold text-slate-700">Intent Scoring Classifier</h4>
                      <p className="text-[10px] text-[#94A3B8] font-bold mt-0.5">Classifies email intent scores</p>
                    </div>
                    <Badge variant="success"><span className="text-[9px] font-bold">Active</span></Badge>
                  </div>

                  <div className="flex items-center justify-between p-3.5 bg-slate-50/50 border border-[#E2E8F0] rounded-lg">
                    <div>
                      <h4 className="text-xs font-bold text-slate-700">Draft Composer Model</h4>
                      <p className="text-[10px] text-[#94A3B8] font-bold mt-0.5">Generates reply templates</p>
                    </div>
                    <Badge variant="info"><span className="text-[9px] font-bold">Standby</span></Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (currentTab === 'reports') {
      return (
        <div className="space-y-6">
          <PageHeader
            title="CRM Analytics Reports"
            description="Track customer interaction rates, pipeline status volumes, and AI enrichment accuracy ratings (Module 6 preview)."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-[#E2E8F0] shadow-sm">
              <h3 className="text-sm font-bold text-[#0F172A] mb-6 flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-[#2563EB]" />
                Response Rate Timings (Mockup)
              </h3>
              {/* Graphical representation grid mockup */}
              <div className="h-64 flex items-end justify-between gap-3 pt-4">
                {[45, 60, 30, 80, 55, 90, 75, 40, 85, 95, 65, 70].map((val, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                    <div
                      className="w-full bg-gradient-to-t from-[#2563EB] to-blue-400 rounded-t-sm group relative cursor-pointer"
                      style={{ height: `${val}%` }}
                    >
                      <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                        {val}m
                      </span>
                    </div>
                    <span className="text-[9px] text-[#94A3B8] font-bold uppercase">{['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'][idx]}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#E2E8F0] shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-bold text-[#0F172A] mb-4">Pipeline Funnel Summary</h3>
                <div className="space-y-4">
                  {PIPELINE_SUMMARIES.map((item) => (
                    <div key={item.stage} className="space-y-1.5">
                      <div className="flex justify-between text-xs font-bold text-slate-600">
                        <span>{item.stage}</span>
                        <span>{item.count} ({item.value})</span>
                      </div>
                      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#2563EB] rounded-full"
                          style={{ width: `${(item.count / 15) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between text-xs font-bold text-[#64748B]">
                <span>Enrichment Precision Score</span>
                <span className="text-emerald-600 font-extrabold">98.4% Accuracy</span>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Default: Main Dashboard View
    return (
      <div className="space-y-8">
        {/* Page Header */}
        <PageHeader
          title="CRM Operations Dashboard"
          description="Real-time insights on autonomous incoming email conversions and sales pipeline dynamics."
        />

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DASHBOARD_STATS.map((stat, index) => {
            const Icon = statIcons[index];
            return (
              <StatCard
                key={stat.title}
                title={stat.title}
                value={stat.value}
                change={stat.change}
                isPositive={stat.isPositive}
                timeframe={stat.timeframe}
                icon={Icon}
              />
            );
          })}
        </div>

        {/* Dynamic Panels layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent email activities */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-bold text-[#0F172A]">Recent Email Conversions</h2>
              <span className="text-xs font-bold text-[#2563EB] hover:text-blue-500 hover:underline cursor-pointer flex items-center gap-1 transition-all">
                View full inbox <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
            <DataTable
              columns={activityColumns}
              data={RECENT_ACTIVITIES}
              emptyState={
                <EmptyState
                  title="No activities logged"
                  description="We couldn't find any recent email sync entries. Check back later."
                  icon={Mail}
                />
              }
            />
          </div>

          {/* Pipeline Summary Cards */}
          <div className="space-y-4">
            <h2 className="text-base font-bold text-[#0F172A]">Lead Pipeline Summary</h2>
            <div className="space-y-4">
              {PIPELINE_SUMMARIES.map((item) => (
                <div
                  key={item.stage}
                  className="bg-white p-5 rounded-xl border border-[#E2E8F0] shadow-sm hover:shadow-md transition-all flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full shrink-0 ${item.color}`} />
                    <div>
                      <h4 className="text-sm font-bold text-[#0F172A]">{item.stage}</h4>
                      <p className="text-xs text-[#94A3B8] font-bold mt-0.5">{item.count} Opportunities</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-extrabold text-[#0F172A]">{item.value}</span>
                    <p className="text-[10px] text-[#94A3B8] font-bold mt-0.5">Value</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return <DashboardLayout>{renderContent()}</DashboardLayout>;
}

export default function DashboardPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC]">
        <div className="w-8 h-8 rounded-full border-2 border-[#2563EB] border-t-transparent animate-spin"></div>
      </div>
    }>
      <DashboardContent />
    </Suspense>
  );
}
