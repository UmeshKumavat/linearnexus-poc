'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Sparkles, Mail, Lock, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('demo@linearnexus.ai');
  const [password, setPassword] = useState('password123');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate auth token saving
    setTimeout(() => {
      setIsLoading(false);
      router.push('/dashboard');
    }, 800);
  };

  return (
    <div className="min-h-screen flex bg-white font-sans">
      {/* Left panel - Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 sm:px-12 lg:px-20 py-12">
        <div className="mx-auto w-full max-w-md">
          {/* Logo Branding */}
          <div className="flex items-center gap-2.5 mb-8">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Sparkles className="w-4.5 h-4.5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-wide text-[#0F172A]">
              Linear<span className="text-blue-600">Nexus</span>
            </span>
          </div>

          {/* Heading */}
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0F172A]">
              Welcome back
            </h2>
            <p className="text-sm font-medium text-slate-500 mt-2">
              Access the LinearNexus pilot workspace and dashboard.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50/50 text-[#0F172A] font-medium outline-none focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all placeholder:text-slate-400"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="password" className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Password
                </label>
                <a href="#" className="text-xs font-semibold text-blue-600 hover:text-blue-500 transition-colors">
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50/50 text-[#0F172A] font-medium outline-none focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all placeholder:text-slate-400"
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                defaultChecked
                className="w-4.5 h-4.5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="remember" className="ml-2 text-xs font-semibold text-slate-500">
                Keep me signed in for 30 days
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-2.5 px-4 rounded-lg bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-sm shadow-sm hover:shadow flex items-center justify-center gap-2 group transition-all"
            >
              {isLoading ? (
                <span className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin"></span>
              ) : (
                <>
                  <span>Sign In to CRM</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </>
              )}
            </button>
          </form>

          {/* Pilot Banner */}
          <div className="mt-8 p-4 rounded-lg bg-slate-50 border border-slate-100 text-xs text-slate-500 leading-normal flex items-start gap-2.5">
            <span className="w-2 h-2 rounded-full bg-blue-600 mt-1 shrink-0"></span>
            <span>
              <strong>Note:</strong> We have pre-filled the credentials with placeholder sandbox details for testing convenience. Feel free to click "Sign In".
            </span>
          </div>
        </div>
      </div>

      {/* Right panel - Marketing copy */}
      <div className="hidden lg:flex w-1/2 bg-[#0F172A] relative overflow-hidden items-center justify-center p-16">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-950 via-slate-900 to-[#0F766E]/20"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-teal-600/10 blur-3xl"></div>

        {/* Marketing Card */}
        <div className="relative max-w-md text-white z-10 space-y-8">
          <div className="space-y-4">
            <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-semibold tracking-wide uppercase">
              Next-Gen Autonomous CRM
            </span>
            <h1 className="text-3xl font-extrabold tracking-tight leading-tight">
              AI-powered CRM that converts emails into contacts and leads automatically.
            </h1>
            <p className="text-slate-400 text-sm leading-relaxed">
              No manual data entry. Connect your mailbox and let LinearNexus create a self-enriching contacts graph and dynamic lead pipeline within minutes.
            </p>
          </div>

          <div className="space-y-4 pt-4 border-t border-slate-800">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold">Zero-touch Contact Enrichment</h4>
                <p className="text-xs text-slate-400 mt-1">Incoming emails are parsed using Gemini LLM to map names, company roles, and social handles.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold">Smart Intent & Lead Scoring</h4>
                <p className="text-xs text-slate-400 mt-1">Emails are scored automatically to build high-priority pipelines and filter spam.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold">Automated Reply Suggestions</h4>
                <p className="text-xs text-slate-400 mt-1">Contextual response drafts are prepared before you open the inbox notification.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
