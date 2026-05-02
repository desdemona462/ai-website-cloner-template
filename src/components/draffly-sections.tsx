"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRightIcon, CheckIcon, LogoIcon, MenuIcon, PlayIcon, StarIcon } from "@/components/icons";
import type { PlanTier, UseCase } from "@/types/draffly";

const productPillars = ["AI Chat", "Agent Pipeline", "Library", "Calendar", "Analytics", "Competitors", "Billing", "Settings"];

const planTiers: PlanTier[] = [
  {
    name: "Free",
    tag: "No card required",
    description: "Explore the product with core generation limits.",
    monthlyPrice: 0,
    yearlyPrice: 0,
    quota: "1 workspace - 1 social account - 3 AI content runs / month",
    features: ["Approvals: in-app, email, Telegram", "Library and calendar basics", "OpenRouter API key configuration"],
    unavailable: ["Image generation", "Analytics dashboard", "Competitor analytics"],
  },
  {
    name: "Basic",
    tag: "$119.99 yearly",
    description: "Solo creators getting consistent content out every month.",
    monthlyPrice: 11.99,
    yearlyPrice: 119.99,
    quota: "1 workspace - 1 social account - 12 AI content runs / month",
    features: ["Approvals: in-app, email, Telegram", "Content library and history", "Scheduled calendar tracking"],
    unavailable: ["Image generation", "Analytics dashboard", "Competitor analytics"],
  },
  {
    name: "Plus",
    tag: "Most popular",
    description: "Growing brands that need analytics and more connected accounts.",
    monthlyPrice: 29.99,
    yearlyPrice: 299.99,
    quota: "3 workspaces - 5 social accounts - 20 AI content runs / month",
    popular: true,
    features: ["12 AI image generations / month", "Approvals + Slack and Discord", "Analytics dashboard", "Competitor analytics"],
  },
  {
    name: "Pro",
    tag: "$999.99 yearly",
    description: "Teams and power users who need the highest limits and every channel.",
    monthlyPrice: 99.99,
    yearlyPrice: 999.99,
    quota: "10 workspaces - 15 social accounts - 28 AI content runs / month",
    features: ["30 AI image generations / month", "Approvals + Slack and Discord", "Analytics dashboard", "Competitor analytics"],
  },
];

const useCases: UseCase[] = [
  {
    name: "Solo creators",
    role: "Draft faster, publish consistently",
    quote: "Use Friendly, Witty, Authoritative, Inspirational, or custom tones with formats like storytelling, how-to guides, listicles, and case studies.",
  },
  {
    name: "Marketing operators",
    role: "Coordinate content pipelines",
    quote: "Run repeatable workflows that save research, strategy, draft content, visual briefs, approval status, publish metadata, and library history.",
  },
  {
    name: "Growth teams",
    role: "Connect content to outcomes",
    quote: "Monitor impressions, clicks, engagement, shares, platform mix, competitor profiles, referrals, invoices, and subscription usage.",
  },
];

const navItems = [
  { label: "Features", href: "#features" },
  { label: "Plans", href: "#plans" },
  { label: "Library", href: "/library" },
  { label: "Calendar", href: "/content-calendar" },
  { label: "Billing", href: "/billing" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-xl transition-[background-color] duration-150 ease-in-out">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative flex h-[72px] items-center justify-between py-4">
          <Link href="/" aria-label="Draffly home" className="flex items-center gap-2 text-xl font-bold text-slate-800">
            <LogoIcon className="h-10 w-10" />
            <span>Draffly</span>
          </Link>
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a key={item.label} className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-800" href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
          <div className="hidden items-center gap-3 md:flex">
            <a className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-800" href="/settings">
              Settings
            </a>
            <a className="rounded-xl bg-gradient-to-r from-slate-800 to-slate-700 px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:brightness-110" href="/ai-agent">
              Run Agent
            </a>
          </div>
          <button aria-label="Toggle menu" type="button" onClick={() => setOpen((value) => !value)} className="rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-800 md:hidden">
            <MenuIcon className="h-5 w-5" />
          </button>
        </div>
        {open ? (
          <div className="grid gap-3 border-t border-slate-200 py-4 md:hidden">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm font-medium text-slate-700">
                {item.label}
              </a>
            ))}
            <a href="/settings" className="text-sm font-medium text-slate-700">
              Settings
            </a>
            <a href="/ai-agent" className="rounded-xl bg-gradient-to-r from-slate-800 to-slate-700 px-4 py-3 text-center text-sm font-semibold text-white">
              Run Agent
            </a>
          </div>
        ) : null}
      </div>
    </nav>
  );
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 pb-[120px] pt-[72px]">
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[80%] w-[140%] -translate-x-1/2 bg-[radial-gradient(40%_35%_at_25%_30%,rgba(10,102,194,.2),transparent_60%),radial-gradient(35%_30%_at_75%_20%,rgba(59,91,219,.16),transparent_60%),radial-gradient(50%_40%_at_50%_70%,rgba(167,139,250,.1),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,.05)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(circle_at_center,black,transparent_75%)]" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto mb-[60px] max-w-[1040px] text-center">
          <div className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-semibold text-[#0A66C2] shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            AI content operations with real plan limits and publishing controls
          </div>
          <h1 className="font-[family-name:var(--font-poppins)] text-5xl font-bold leading-[.95] tracking-[-0.04em] text-slate-900 sm:text-6xl lg:text-[80px]">
            Draft, plan, and publish
            <span className="block bg-[linear-gradient(110deg,#0A66C2_0%,#3B5BDB_45%,#1e293b_100%)] bg-clip-text text-transparent">with autonomous AI.</span>
          </h1>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
            Draffly helps authenticated users chat with an AI assistant, configure tone and format preferences, run an autonomous content pipeline, save outputs to a searchable library, schedule posts, track billing usage, and publish through connected social accounts.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="/ai-agent" className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-800 to-slate-700 px-7 py-4 text-base font-semibold text-white shadow-xl transition hover:brightness-110">
              Run the AI Agent
            </a>
            <Link href="/" className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-7 py-4 text-base font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:shadow-md">
              <PlayIcon className="h-4 w-4" /> Open AI Chat
            </Link>
          </div>
          <div className="mt-7 flex items-center justify-center gap-4">
            <div className="flex text-amber-400">{Array.from({ length: 5 }).map((_, index) => <StarIcon key={index} className="h-5 w-5" />)}</div>
            <div className="text-left text-sm leading-tight"><strong className="block text-slate-900">Free, Basic, Plus, Pro</strong><span className="text-slate-500">Usage, billing, and feature gates built into the product</span></div>
          </div>
        </div>
        <DashboardMockup />
      </div>
    </section>
  );
}

function DashboardMockup() {
  const stages = [
    ["Research", "Complete", "w-full"],
    ["Strategy", "Complete", "w-full"],
    ["Content", "Running", "w-[68%]"],
    ["Visual", "Queued", "w-[24%]"],
    ["Approval", "Waiting", "w-[12%]"],
  ];

  return (
    <div className="relative mx-auto max-w-[960px]">
      <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_40px_80px_-20px_rgba(15,23,42,.22)]">
        <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-5 py-3 text-xs font-medium text-slate-500">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-amber-400" />
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
          <span className="ml-3 rounded-full bg-white px-3 py-1 shadow-sm">draffly.app / ai-agent</span>
        </div>
        <div className="grid lg:grid-cols-[220px_1fr]">
          <aside className="hidden border-r border-slate-100 bg-slate-950 p-5 text-white lg:block">
            <div className="mb-8 flex items-center gap-2 font-bold"><LogoIcon className="h-7 w-7" />Draffly</div>
            {["Chat", "AI Agent", "Library", "Calendar", "Analytics", "Billing", "Settings"].map((item, index) => (
              <div key={item} className={`mb-2 rounded-xl px-3 py-2 text-sm ${index === 1 ? "bg-white/12 text-white" : "text-slate-400"}`}>{item}</div>
            ))}
          </aside>
          <div className="p-5 sm:p-7">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <div><h3 className="font-[family-name:var(--font-poppins)] text-2xl font-bold text-slate-900">Run AI Agent</h3><p className="text-sm text-slate-500">Topic: 5 tips for remote work - output streaming</p></div>
              <span className="rounded-xl bg-[#0A66C2] px-4 py-2 text-sm font-semibold text-white">Respond</span>
            </div>
            <div className="mb-5 grid gap-3 sm:grid-cols-3">
              {[["STEPS", "7", "Research to library"], ["ACCOUNTS", "5", "Plus plan social limit"], ["USAGE", "20", "AI runs / month on Plus"]].map(([label, value, helper]) => (
                <div key={label} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"><p className="text-[11px] font-bold tracking-wide text-slate-400">{label}</p><div className="mt-2"><strong className="text-2xl text-slate-900">{value}</strong><p className="mt-1 text-xs font-semibold text-slate-500">{helper}</p></div></div>
              ))}
            </div>
            <div className="grid gap-5 lg:grid-cols-[1fr_280px]">
              <div className="space-y-3">
                {stages.map(([title, status, widthClass]) => (
                  <div key={title} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                    <div className="flex items-center justify-between"><p className="font-semibold text-slate-900">{title}</p><span className="rounded-full bg-emerald-100 px-2 py-1 text-[10px] font-bold text-emerald-700">{status}</span></div>
                    <div className="mt-3 h-2 rounded-full bg-white"><div className={`h-2 rounded-full bg-gradient-to-r from-[#0A66C2] to-[#3B5BDB] ${widthClass}`} /></div>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-[#0A66C2] to-[#3B5BDB] p-5 text-white shadow-xl"><p className="text-sm text-blue-100">Selected setup</p><p className="mt-3 text-3xl font-bold">Friendly - Storytelling</p><p className="mt-4 text-sm leading-6 text-blue-50">Posting to a connected LinkedIn, Twitter/X, or Facebook account after approval.</p></div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xl"><p className="text-xs font-bold text-[#0A66C2]">BYOK CHAT</p><p className="mt-3 text-sm text-slate-700">OpenRouter keys, base URL, and default model are configured from Settings.</p></div>
        <div className="rounded-2xl border border-blue-100 bg-white p-4 shadow-xl"><p className="text-xs font-bold text-[#0A66C2]">CONTENT OPS</p><p className="mt-3 text-sm text-slate-700">Search, filter, star, copy, delete, and inspect agent history in the library.</p></div>
        <div className="rounded-2xl border border-emerald-100 bg-white p-4 shadow-xl"><p className="text-xs font-bold text-emerald-600">APPROVALS</p><p className="mt-3 text-sm text-slate-700">Use in-app, email, Telegram, and on higher plans Slack or Discord approval paths.</p></div>
      </div>
    </div>
  );
}

export function TrustedBySection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col items-center justify-center gap-8 lg:flex-row">
          <p className="text-center text-[11px] font-bold tracking-[.22em] text-slate-400">BUILT AROUND THE DRAFFLY WORKSPACE</p>
          <div className="grid w-full grid-cols-2 items-center gap-3 sm:grid-cols-4 lg:flex lg:w-auto lg:gap-3">
            {productPillars.map((pillar) => <span key={pillar} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-center text-xs font-bold text-slate-600">{pillar}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}

export function HowItWorksSection() {
  const steps = [
    ["01", "CONFIGURE", "Set the workspace defaults.", "Add an OpenRouter API key, choose a base URL and default model, set workspace language and platform defaults, and connect publishing accounts."],
    ["02", "ORCHESTRATE", "Run the autonomous pipeline.", "Pick publishing, tone, format, and competitors, then run the agent through research, strategy, content, visual, approval, publish, and library history."],
    ["03", "OPERATE", "Review the system of record.", "Use billing usage, invoices, analytics, library search, calendar statuses, competitor profiles, and affiliate wallet views to manage the content operation."],
  ];

  return (
    <section id="how-it-works" className="bg-gradient-to-b from-[#F3F6F8] to-white px-6 pb-20 pt-24">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-16 text-center"><p className="mb-3 text-[11px] font-bold tracking-[.22em] text-[#3B5BDB]">HOW IT WORKS</p><h2 className="font-[family-name:var(--font-poppins)] text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">The frontend mirrors the product system.</h2><p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">Draffly is not only a landing page; it is a workspace with concrete settings, limits, approvals, library records, analytics, and billing state.</p></div>
        <div className="relative grid gap-6 lg:grid-cols-3">
          <p className="absolute -top-11 left-3 hidden rotate-[-7deg] font-[family-name:var(--font-caveat)] text-2xl font-semibold text-[#0A66C2] lg:block">Start in settings</p>
          {steps.map(([number, label, title, body]) => (
            <div key={number} className="rounded-[22px] border border-slate-200 bg-white p-7 shadow-[0_16px_40px_-28px_rgba(15,23,42,.35)]">
              <span className="text-5xl font-black text-slate-100">{number}</span><p className="mt-2 text-xs font-bold tracking-[.18em] text-[#0A66C2]">{label}</p><h3 className="mt-3 font-[family-name:var(--font-poppins)] text-2xl font-bold text-slate-900">{title}</h3><p className="mt-4 text-[15px] leading-7 text-slate-600">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-slate-900 px-6 py-16 text-white">
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(10,102,194,.18),transparent_40%),radial-gradient(circle_at_80%_50%,rgba(59,91,219,.15),transparent_40%)]" />
      <div className="relative mx-auto grid max-w-[1100px] gap-6 text-center sm:grid-cols-2 lg:grid-cols-4">
        {[["4 plans", "Free, Basic, Plus, Pro"], ["7 agents", "Research through library save"], ["8 settings", "Profile, keys, security, integrations"], ["BYOK", "Content and image caps waived with API keys"]].map(([value, label]) => <div key={label}><p className="font-[family-name:var(--font-poppins)] text-4xl font-bold text-white">{value}</p><p className="mt-2 text-sm text-slate-400">{label}</p></div>)}
      </div>
    </section>
  );
}

export function FeaturesSection() {
  return (
    <section id="features" className="mx-auto max-w-7xl overflow-hidden px-8 py-[120px]">
      <div className="mb-16 text-center"><span className="inline-block rounded-full bg-blue-100 px-[14px] py-1.5 text-[11px] font-semibold uppercase leading-[16.5px] text-[#3B5BDB]">Product pillars</span><h2 className="mx-auto mt-[18px] max-w-5xl font-[family-name:var(--font-poppins)] text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-[63px] lg:leading-[64px]">A workspace with the real Draffly surfaces.</h2><p className="mx-auto mt-[14px] max-w-[700px] text-[19px] leading-[28.5px] text-slate-600">The frontend should talk about chat sessions, agent configuration, saved runs, calendar state, billing limits, settings, competitors, and affiliates.</p></div>
      <div className="grid gap-5 lg:grid-cols-3">
        <FeatureChat />
        <FeatureAgent />
        <FeatureCalendar />
      </div>
      <div className="mt-5 grid gap-5 lg:grid-cols-3">
        <FeatureCard title="Library and history" eyebrow="CONTENT OPS" body="Store title, platform, content, tags, starred state, word count, approval status, thread ID, and every agent step behind the saved item." />
        <FeatureCard title="Analytics and competitors" eyebrow="INSIGHTS" body="Show impressions, clicks, engagement, shares, platform mix, active days, competitor websites, social profiles, detail views, and comparisons." />
        <FeatureCard title="Billing and usage" eyebrow="MONETIZATION" body="Expose plan, amount, renewal state, invoices, Dodo refresh, content runs, workspaces, social accounts, and image generation allowance." />
      </div>
      <div className="mt-5 grid gap-5 lg:grid-cols-3">
        <SmallFeature title="Social OAuth integrations" body="Connect multiple LinkedIn, Twitter/X, and Facebook accounts; Instagram is listed as a future integration." />
        <SmallFeature title="Approval-first automation" body="Support in-app, email, Telegram, Slack, Discord, WhatsApp, and Telegram bot configuration paths in the product story." />
        <SmallFeature title="Affiliate-ready workflows" body="Include invite-only affiliate access with referral links, balances, active referrals, conversions, commissions, and future withdrawals." />
      </div>
    </section>
  );
}

function FeatureChat() {
  return <div className="min-h-[470px] overflow-hidden rounded-[22px] bg-[linear-gradient(160deg,#0f172a_0%,#1e293b_60%,#0A66C2_180%)] p-7 text-white shadow-[0_30px_60px_-20px_rgba(15,23,42,.35)]"><p className="text-xs font-bold text-blue-200">AI CHAT</p><h3 className="mt-3 font-[family-name:var(--font-poppins)] text-2xl font-bold">Streaming assistant</h3><p className="mt-3 text-sm leading-6 text-slate-300">Chat starts on / and continues through /chat/:sessionId, backed by your configured OpenRouter-compatible provider.</p><div className="mt-7 rounded-2xl bg-white/10 p-4"><p className="text-xs font-bold text-blue-200">DEFAULT MODEL</p><p className="mt-2 text-sm">google/gemini-2.5-flash</p></div><div className="mt-4 rounded-2xl bg-white p-4 text-slate-900"><p className="text-xs text-slate-500">API settings</p><p className="mt-3 text-sm leading-6">OpenRouter API key, base URL, and provider configuration are managed from Settings - API Keys.</p><p className="mt-3 text-sm font-semibold text-[#0A66C2]">BYOK can waive content and image caps</p></div></div>;
}

function FeatureAgent() {
  return <div className="min-h-[470px] overflow-hidden rounded-[22px] border border-slate-200 bg-white p-7 shadow-[0_30px_60px_-20px_rgba(15,23,42,.1)]"><p className="text-xs font-bold text-[#3B5BDB]">AI AGENT</p><h3 className="mt-3 font-[family-name:var(--font-poppins)] text-2xl font-bold text-slate-900">Configurable content run</h3><p className="mt-3 text-sm leading-6 text-slate-600">Users choose publish account, auto-publish, approval channel, tones, formats, and optional competitors before running the agent.</p><div className="mt-7 space-y-3">{["Publish account", "Tone", "Format", "Competitor style", "Approval channel"].map((item, index) => <div key={item} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-4"><p className="font-semibold text-slate-900">{item}</p><span className={`rounded-full px-3 py-1 text-xs font-bold ${index < 3 ? "bg-emerald-100 text-emerald-700" : "bg-blue-100 text-[#0A66C2]"}`}>{index < 3 ? "SET" : "OPTIONAL"}</span></div>)}</div></div>;
}

function FeatureCalendar() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return <div className="min-h-[470px] overflow-hidden rounded-[22px] border border-slate-200 bg-[linear-gradient(160deg,#F3F6F8_0%,#fff_60%)] p-7 shadow-[0_30px_60px_-20px_rgba(15,23,42,.1)]"><p className="text-xs font-bold text-[#3B5BDB]">CONTENT CALENDAR</p><h3 className="mt-3 font-[family-name:var(--font-poppins)] text-2xl font-bold text-slate-900">Calendar and timeline views.</h3><p className="mt-3 text-sm leading-6 text-slate-600">Track published, scheduled, and draft content across LinkedIn posts, Twitter threads, and blog articles.</p><div className="mt-7 grid grid-cols-7 gap-2 rounded-2xl bg-slate-50 p-3 text-center text-xs"><>{days.map((day) => <div key={day} className="font-bold text-slate-400">{day}</div>)}</>{[10, 11, 12, 13, 14, 15, 16].map((day) => <div key={day} className={`rounded-xl p-3 font-semibold ${day === 13 ? "bg-[#0A66C2] text-white" : "bg-white text-slate-600"}`}>{day}</div>)}</div><div className="mt-4 space-y-2"><div className="rounded-xl bg-blue-50 p-3 text-sm font-semibold text-[#0A66C2]">LinkedIn Post - Scheduled</div><div className="rounded-xl bg-slate-50 p-3 text-sm text-slate-600">Twitter Thread - Draft</div></div></div>;
}

function FeatureCard({ title, body, eyebrow }: { title: string; body: string; eyebrow: string }) {
  return <div className="min-h-[353px] rounded-[20px] border border-slate-200 bg-white p-7 shadow-[0_4px_12px_-6px_rgba(15,23,42,.08)]"><p className="text-xs font-bold text-[#3B5BDB]">{eyebrow}</p><h3 className="mt-3 font-[family-name:var(--font-poppins)] text-2xl font-bold text-slate-900">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{body}</p><div className="mt-7 rounded-2xl bg-slate-50 p-4"><div className="mb-3 flex justify-between text-sm"><span>WORKSPACE</span><strong className="text-emerald-600">Synced</strong></div><div className="mb-3 flex justify-between text-sm"><span>PLAN</span><strong className="text-emerald-600">Active</strong></div><div className="flex justify-between text-sm"><span>STATUS</span><strong className="text-[#0A66C2]">Live</strong></div></div></div>;
}

function SmallFeature({ title, body }: { title: string; body: string }) {
  return <div className="min-h-[179px] rounded-[20px] border border-slate-200 bg-white p-6 shadow-[0_1px_3px_rgba(15,23,42,.06)]"><h3 className="font-[family-name:var(--font-poppins)] text-xl font-bold text-slate-900">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{body}</p></div>;
}

export function SecuritySection() {
  return <section className="mx-auto max-w-7xl px-6 py-24"><div className="grid items-center gap-12 rounded-[24px] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 lg:grid-cols-2 lg:p-12"><div><p className="text-xs font-bold tracking-[.2em] text-[#3B5BDB]">SETTINGS & GOVERNANCE</p><h2 className="mt-4 font-[family-name:var(--font-poppins)] text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Settings are a major frontend surface.</h2><p className="mt-5 text-lg leading-8 text-slate-600">The dashboard reference has dedicated tabs for profile, integrations, API keys, notifications, appearance, workspace defaults, and security. The marketing frontend now reflects those real controls instead of generic copy.</p><div className="mt-8 space-y-4">{["API keys: OpenRouter key, base URL, and default model", "Workspace: name, default platform, content language, auto-save", "Notifications: workflow complete, agent errors, weekly digest, new features", "Security: 2FA, session timeout, active sessions, export/reset/delete flows"].map((item) => <p key={item} className="flex gap-3 text-slate-700"><CheckIcon className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />{item}</p>)}</div></div><div className="rounded-[22px] border border-slate-200 bg-white p-6 shadow-xl"><p className="text-xs font-bold tracking-[.16em] text-slate-400">WORKSPACE READINESS</p>{[["OpenRouter key", "Configured", "100%"], ["Social accounts", "5 / 5 on Plus", "100%"], ["Content runs", "12 / 20 this month", "60%"]].map(([label, value, width]) => <div key={label} className="mt-5"><div className="mb-2 flex justify-between text-sm"><span className="text-slate-600">{label}</span><strong className="text-slate-900">{value}</strong></div><div className="h-2 rounded-full bg-slate-100"><div className={`h-2 rounded-full bg-gradient-to-r from-[#0A66C2] to-emerald-500 ${width === "100%" ? "w-full" : "w-[60%]"}`} /></div></div>)}<p className="mt-6 rounded-2xl bg-emerald-50 p-4 text-sm font-semibold text-emerald-700">Ready for chat, configured agent runs, approval routing, and social publishing.</p></div></div></section>;
}

export function PlansSection() {
  return <section id="plans" className="bg-white"><div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8"><div className="text-center"><h2 className="font-[family-name:var(--font-poppins)] text-4xl font-bold text-slate-900 sm:text-5xl">Actual Draffly plans and limits.</h2><p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">Plans match the dashboard catalog and server enforcement: content runs reset monthly, workspaces and social accounts are capped, and BYOK can lift content and image generation caps.</p></div><div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">{planTiers.map((plan) => <PlanCard key={plan.name} plan={plan} />)}</div><p className="mt-12 text-center text-sm text-slate-500">Billing supports checkout, plan changes, downgrade confirmation, cancellation, Dodo sync, invoice search, and renewal status.</p></div></section>;
}

function PlanCard({ plan }: { plan: PlanTier }) {
  const price = plan.monthlyPrice === 0 ? "$0" : `$${plan.monthlyPrice.toFixed(2)}`;
  return <div className={`relative rounded-[24px] border p-6 shadow-sm ${plan.popular ? "border-slate-800 shadow-xl" : "border-slate-200"}`}>{plan.popular ? <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-slate-900 px-4 py-1 text-xs font-bold text-white">Most popular</div> : null}<h3 className="font-[family-name:var(--font-poppins)] text-2xl font-bold text-slate-900">{plan.name}</h3><p className="mt-2 text-sm font-semibold text-[#0A66C2]">{plan.tag}</p><p className="mt-3 min-h-12 text-sm leading-6 text-slate-600">{plan.description}</p><div className="mt-5"><span className="font-[family-name:var(--font-poppins)] text-4xl font-bold text-slate-900">{price}</span><span className="text-sm text-slate-500"> / month</span></div>{plan.yearlyPrice > 0 ? <p className="mt-1 text-xs text-slate-500">${plan.yearlyPrice.toFixed(2)} / year billed annually</p> : <p className="mt-1 text-xs text-slate-500">Free forever tier</p>}<p className="mt-5 rounded-2xl bg-slate-50 p-4 text-sm font-semibold text-slate-900">{plan.quota}</p><a href="/plans" className={`mt-6 block w-full rounded-xl py-3 text-center text-sm font-semibold transition ${plan.popular ? "bg-gradient-to-r from-slate-800 to-slate-700 text-white shadow-lg hover:brightness-110" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`}>View plans</a><div className="mt-5 space-y-3">{plan.features.map((feature) => <p key={feature} className="flex gap-3 text-sm text-slate-600"><CheckIcon className="h-5 w-5 shrink-0 text-emerald-600" />{feature}</p>)}{plan.unavailable?.map((feature) => <p key={feature} className="flex gap-3 text-sm text-slate-400"><span className="h-5 w-5 shrink-0 text-center text-sm leading-5">x</span>{feature}</p>)}</div></div>;
}

export function FaqSection() {
  const questions = [
    ["What plans exist?", "Free, Basic, Plus, and Pro. Prices are $0, $11.99, $29.99, and $99.99 per month, with yearly prices of $0, $119.99, $299.99, and $999.99."],
    ["What can users configure?", "Settings include profile, social integrations, API keys, notifications, appearance, workspace defaults, security, export/reset/delete account controls, and API provider settings."],
    ["What does the agent pipeline ask for?", "Users configure publishing, auto-publish, approval channel, tone, content format, optional competitor style, and then submit a topic or prompt."],
    ["What does billing track?", "Billing tracks subscription status, renewal or cancellation date, content runs, workspaces, connected social accounts, image allowance, invoices, and Dodo sync state."],
  ];
  return <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8"><div className="mb-16 text-center"><h2 className="font-[family-name:var(--font-poppins)] text-3xl font-bold text-slate-800 sm:text-4xl lg:text-5xl">Frequently Asked Questions</h2><p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">Concrete frontend facts pulled from the dashboard reference.</p></div><div className="mx-auto max-w-3xl"><div className="space-y-4">{questions.map(([question, answer]) => <div key={question} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><h3 className="font-[family-name:var(--font-poppins)] text-xl font-bold text-slate-900">{question}</h3><p className="mt-4 text-[15px] leading-7 text-slate-600">{answer}</p></div>)}</div><div className="mt-12 text-center"><p className="mb-3 text-slate-600">Ready to build the next content run?</p><a href="/ai-agent" className="inline-flex items-center gap-2 font-semibold text-slate-800 transition-colors hover:text-[#0A66C2]">Open the AI agent<ArrowRightIcon className="h-4 w-4" /></a></div></div></section>;
}

export function UseCasesSection() {
  return <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8"><div className="mb-16 text-center"><h2 className="font-[family-name:var(--font-poppins)] text-3xl font-bold text-slate-800 sm:text-4xl lg:text-5xl">Built for creator operations.</h2><p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">Draffly supports the people who need consistent social output without manual coordination overhead.</p></div><div className="grid gap-6 md:grid-cols-3">{useCases.map((item) => <div key={item.name} className="block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-[#0A66C2]/30 hover:shadow-lg"><div className="mb-5 flex items-center gap-4"><div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#0A66C2] to-[#3B5BDB] text-lg font-bold text-white">{item.name.charAt(0)}</div><div><h3 className="font-bold text-slate-900">{item.name}</h3><p className="text-sm text-slate-500">{item.role}</p></div></div><p className="leading-7 text-slate-600">{item.quote}</p></div>)}</div></section>;
}

export function CtaSection() {
  return <section className="px-6 py-24"><div className="relative mx-auto max-w-[1100px] overflow-hidden rounded-[28px] bg-[#0a0f1c] px-8 py-20 text-center shadow-[0_30px_60px_-20px_rgba(15,23,42,.45)] lg:px-12"><div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(10,102,194,.35),transparent_28%),radial-gradient(circle_at_82%_22%,rgba(59,91,219,.25),transparent_25%),radial-gradient(circle_at_50%_80%,rgba(255,255,255,.08),transparent_35%)]" /><svg aria-hidden="true" viewBox="0 0 1100 500" className="absolute inset-0 h-full w-full opacity-35"><path d="M80 400 C240 160 420 470 610 210 S880 130 1040 330" fill="none" stroke="#38bdf8" strokeWidth="2" strokeDasharray="8 14" /><path d="M130 120 C360 260 650 50 980 160" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="5 18" /></svg><div className="relative"><p className="text-xs font-bold tracking-[.25em] text-blue-200">READY WHEN YOUR WORKSPACE IS</p><h2 className="mx-auto mt-5 max-w-3xl font-[family-name:var(--font-poppins)] text-4xl font-bold tracking-tight text-white sm:text-6xl">Turn one topic into a tracked content operation.</h2><p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-300">Configure OpenRouter, connect social accounts, choose tone and format, run the agent, approve the draft, save history, publish, and monitor usage.</p><div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"><a href="/ai-agent" className="rounded-2xl bg-white px-7 py-4 font-semibold text-slate-900 shadow-xl transition hover:bg-blue-50">Run AI Agent</a><a href="/plans" className="rounded-2xl border border-white/20 px-7 py-4 font-semibold text-white transition hover:bg-white/10">View Plans</a></div><p className="mt-7 text-sm text-slate-400">Chat - Agent config - Library - Calendar - Billing - Competitors - Affiliates</p></div></div></section>;
}

export function FooterSection() {
  const nav = ["AI Agent", "Library", "Calendar", "Analytics", "Competitors", "Billing", "Plans", "Settings"];
  return <footer className="mt-20 border-t border-slate-200 bg-white"><div className="mx-auto max-w-7xl px-6 py-16 pb-8 lg:px-8"><div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-16"><div><div className="mb-5 flex items-center gap-2 font-[family-name:var(--font-poppins)] text-xl font-bold text-slate-900"><LogoIcon className="h-9 w-9" />Draffly</div><p className="max-w-xs text-sm leading-6 text-slate-500">Agentic AI-assisted social content operations for creators and marketing teams.</p><p className="mt-6 text-sm text-slate-500">(c) 2026 Draffly.<br />All rights reserved.</p></div><FooterColumn title="PRODUCT" items={nav} /><FooterColumn title="WORKFLOWS" items={["AI Chat", "Agent Pipeline", "Content Ops", "Social Publishing"]} /><FooterColumn title="LEGAL" items={["Terms", "Privacy"]} /></div></div><div className="-mt-4 h-[45px] overflow-hidden sm:h-[88px] lg:h-[140px]"><h2 className="select-none bg-gradient-to-b from-slate-200 to-white bg-clip-text text-center font-[family-name:var(--font-poppins)] text-[56px] font-semibold leading-none tracking-wide text-transparent sm:text-[110px] lg:text-[176px]">Draffly</h2></div></footer>;
}

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return <div><h3 className="mb-5 text-xs font-bold tracking-[.18em] text-slate-400">{title}</h3><div className="grid gap-3">{items.map((item) => <a key={item} href="#" className="text-sm text-slate-500 transition-colors hover:text-slate-800">{item}</a>)}</div></div>;
}
