"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRightIcon, CheckIcon, LogoIcon, MenuIcon, PlayIcon, StarIcon } from "@/components/icons";
import type { PlanTier, UseCase } from "@/types/draffly";

const proofPills = [
  "7-step agent pipeline, fully automated",
  "4 approval channels including Slack and Discord",
  "LinkedIn, Twitter/X, and Facebook publishing",
  "BYOK unlocks unlimited content runs",
];

const planTiers: PlanTier[] = [
  {
    name: "Free",
    tag: "Explore the platform. No Credit Card needed.",
    monthlyPrice: 0,
    yearlyPrice: 0,
    quota: "1 workspace - 1 social account - 3 AI content runs / month",
    features: ["Approvals: in-app, email, Telegram", "Library and calendar basics", "OpenRouter API key configuration"],
    unavailable: ["Image generation", "Analytics dashboard", "Competitor analytics"],
  },
  {
    name: "Basic",
    tag: "For solo creators",
    monthlyPrice: 11.99,
    yearlyPrice: 119.99,
    quota: "1 workspace - 1 social account - 12 AI content runs / month",
    features: ["Approvals: in-app, email, Telegram", "Content library and history", "Scheduled calendar tracking"],
    unavailable: ["Image generation", "Analytics dashboard", "Competitor analytics"],
  },
  {
    name: "Plus",
    tag: "For those who need more accounts and real analytics.",
    monthlyPrice: 29.99,
    yearlyPrice: 299.99,
    quota: "3 workspaces - 5 social accounts - 20 AI content runs / month",
    popular: true,
    features: ["12 AI image generations / month", "Approvals + Slack and Discord", "Analytics dashboard", "Competitor analytics"],
  },
  {
    name: "Pro",
    tag: "For those serious about growth and analytics with advance features.",
    monthlyPrice: 99.99,
    yearlyPrice: 999.99,
    quota: "10 workspaces - 15 social accounts - 28 AI content runs / month",
    features: ["30 AI image generations / month", "Approvals + Slack and Discord", "Analytics dashboard", "Competitor analytics"],
  },
];

const useCases: UseCase[] = [
  {
    name: "Solo creators",
    role: "You don't need a team. You need a system.",
    quote: "Pick your tone, format, and posting account. Run the agent. Review the draft, approve it, and let Draffly post it. Spend less time writing and more time on the work that actually moves your numbers.",
  },
  {
    name: "Marketing operators",
    role: "Repeatable pipelines without the overhead.",
    quote: "Set up workspaces for each client or brand. Configure their tone, accounts, and approval routing separately. Every run saves a full audit trail: research, strategy, content, approval status, and publish metadata.",
  },
  {
    name: "Growth teams",
    role: "Content that connects to outcomes.",
    quote: "Track impressions, engagement, and shares across platforms. Add competitor profiles and see how your content compares. Use the calendar to spot gaps before they happen.",
  },
];

const navItems = [
  { label: "Features", href: "#features" },
  { label: "Plans", href: "#plans" },
  { label: "How much you will save", href: "#saving" },
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
            <a className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-800" href="/plans">
              Login
            </a>
            <a className="rounded-xl bg-gradient-to-r from-slate-800 to-slate-700 px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:brightness-110" href="/plans">
              Start for Free
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
            <a href="/plans" className="text-sm font-medium text-slate-700">
              Login
            </a>
            <a href="/plans" className="rounded-xl bg-gradient-to-r from-slate-800 to-slate-700 px-4 py-3 text-center text-sm font-semibold text-white">
              Start for Free
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
            You give it a topic. It handles the rest.
          </div>
          <h1 className="font-[family-name:var(--font-poppins)] text-5xl font-bold leading-[.95] tracking-[-0.04em] text-slate-900 sm:text-6xl lg:text-[80px]">
            AI Agent that researches,
            <span className="block bg-[linear-gradient(110deg,#0A66C2_0%,#3B5BDB_45%,#1e293b_100%)] bg-clip-text text-transparent">writes, generate images, and posts for you.</span>
          </h1>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
            Draffly is an Agentic AI platform for your social media content creation. You only review, approve, and move on. Everything gets saved to your library and published to your social media.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="/plans" className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-800 to-slate-700 px-7 py-4 text-base font-semibold text-white shadow-xl transition hover:brightness-110">
              Start for Free
            </a>
            <a href="#how-it-works" className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-7 py-4 text-base font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:shadow-md">
              <PlayIcon className="h-4 w-4" /> See how it works
            </a>
          </div>
          <div className="mt-7 flex items-center justify-center gap-4">
            <div className="flex text-amber-400">{Array.from({ length: 5 }).map((_, index) => <StarIcon key={index} className="h-5 w-5" />)}</div>
            <div className="text-left text-sm leading-tight"><strong className="block text-slate-900">Free forever plan available</strong><span className="text-slate-500">No card required to start</span></div>
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
    ["Write Content", "Running", "w-[68%]"],
    ["Generate Image", "Queued", "w-[24%]"],
    ["Approval", "Waiting", "w-[12%]"],
    ["Publish", "Next", "w-[8%]"],
  ];

  return (
    <div className="relative mx-auto max-w-[960px]">
      <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_40px_80px_-20px_rgba(15,23,42,.22)]">
        <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-5 py-3 text-xs font-medium text-slate-500">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-amber-400" />
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
          <span className="ml-3 rounded-full bg-white px-3 py-1 shadow-sm">draffly.com / ai-agent</span>
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
              <div><h3 className="font-[family-name:var(--font-poppins)] text-2xl font-bold text-slate-900">Just give a topic. Let AI Agent cook</h3></div>
              <span className="rounded-xl bg-[#0A66C2] px-4 py-2 text-sm font-semibold text-white">Approve</span>
            </div>
            <div className="mb-5 grid gap-3 sm:grid-cols-3">
              {[["PIPELINE", "5 steps", "Fully automated"], ["PUBLISHING", "3+ channels", "LinkedIn, X, Facebook, Instagram"], ["BYOK", "No caps", "Use your AI API key"]].map(([label, value, helper]) => (
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
              <div className="rounded-2xl bg-gradient-to-br from-[#0A66C2] to-[#3B5BDB] p-5 text-white shadow-xl"><p className="text-sm text-blue-100">Review queue</p><p className="mt-3 text-3xl font-bold">Approve or request edits</p><p className="mt-4 text-sm leading-6 text-blue-50">The post publishes when you say go, then saves the conetent to your library.</p></div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xl"><p className="text-xs font-bold text-[#0A66C2]">BYOK (Bring Your Own Key)</p><p className="mt-3 text-sm text-slate-700">Connect your API keys (OpenAI, Anthropic, etc) to unlock unlimited generation.</p></div>
        <div className="rounded-2xl border border-blue-100 bg-white p-4 shadow-xl"><p className="text-xs font-bold text-[#0A66C2]">LIBRARY</p><p className="mt-3 text-sm text-slate-700">Every content generated is saved to your library with pipeline history.</p></div>
        <div className="rounded-2xl border border-emerald-100 bg-white p-4 shadow-xl"><p className="text-xs font-bold text-emerald-600">APPROVALS</p><p className="mt-3 text-sm text-slate-700">Approve/Reject generated content via email, Telegram, Slack, or Discord.</p></div>
      </div>
    </div>
  );
}

export function TrustedBySection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col items-center justify-center gap-8 lg:flex-row">
          <p className="text-center text-[11px] font-bold tracking-[.22em] text-slate-400">BUILT FOR PEOPLE WHO PUBLISH CONSISTENTLY, NOT OCCASIONALLY</p>
          <div className="grid w-full grid-cols-1 items-center gap-3 sm:grid-cols-2 lg:flex lg:w-auto lg:gap-3">
            {proofPills.map((pillar) => <span key={pillar} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-center text-xs font-bold text-slate-600">{pillar}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}

export function HowItWorksSection() {
  const steps = [
    ["01", "CONFIGURE", "Tell Draffly how you work.", "Link your LinkedIn or Twitter account, and set your tone and format preferences. Do it once. Every run after uses these settings automatically."],
    ["02", "RUN THE AGENT", "Pick a topic and let the agent cook.", "Give it a topic or let the Agent find a trending topic. The Agent researches, drafts, generates images, asks your approval or request changes. Once you approve, it publishes."],
    ["03", "OPERATE", "Everything tracked. Nothing lost.", "Every content is automatically saved to your library. You can check the analytics of published content in your dashboard."],
  ];

  return (
    <section id="how-it-works" className="bg-gradient-to-b from-[#F3F6F8] to-white px-6 pb-20 pt-24">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-16 text-center"><p className="mb-3 text-[11px] font-bold tracking-[.22em] text-[#3B5BDB]">HOW IT WORKS</p><h2 className="font-[family-name:var(--font-poppins)] text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Set it up once. Run it on repeat.</h2><p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">No juggling tools. No copy-pasting between apps.</p></div>
        <div className="relative grid gap-6 lg:grid-cols-3">
          <p className="absolute -top-11 left-3 hidden rotate-[-7deg] font-[family-name:var(--font-caveat)] text-2xl font-semibold text-[#0A66C2] lg:block">Set it once</p>
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
        {[["+500", "Content generated"], ["+5M", "Impressions on the published content"], ["+100", "People trust us"], ["BYOK", "Bring your API key for unlimited usage"]].map(([value, label]) => <div key={label}><p className="font-[family-name:var(--font-poppins)] text-4xl font-bold text-white">{value}</p><p className="mt-2 text-sm text-slate-400">{label}</p></div>)}
      </div>
    </section>
  );
}

export function FeaturesSection() {
  return (
    <section id="features" className="mx-auto max-w-7xl overflow-hidden px-6 py-20 lg:py-24">
      <div className="mb-10 text-center"><span className="inline-block rounded-full bg-blue-100 px-3.5 py-1.5 text-[11px] font-semibold uppercase leading-[16.5px] text-[#3B5BDB]">FEATURES</span><h2 className="mx-auto mt-4 max-w-4xl font-[family-name:var(--font-poppins)] text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-[56px] lg:leading-[58px]">Not a draft generator. A full content pipeline.</h2><p className="mx-auto mt-3 max-w-[660px] text-lg leading-7 text-slate-600">Research, strategy, Write, visuals, approvals, publishing, analytics in one workflow.</p></div>
      <div className="grid gap-4 lg:grid-cols-3">
        <FeatureChat />
        <FeatureAgent />
        <FeatureCalendar />
      </div>
      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <FeatureCard title="Every post you've ever generated, searchable." eyebrow="CONTENT LIBRARY" body="Agent saves the content with all agent steps. Search, filter, star, copy, or delete anytime." />
        <FeatureCard title="Track what's actually working." eyebrow="ANALYTICS & COMPETITORS" body="Impressions, clicks, engagement, shares for every post, broken down by platform. No aggregated averages hiding the bad ones." />
        <FeatureCard title="Spy on your competitors" eyebrow="COMPETITOR ANALYTICS" body="Add any profile and track their posting frequency, top content, and engagement numbers. Compare it directly against your own to spot the gaps." />
      </div>
      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <SmallFeature title="Approve from any platform" body="Approve via in-app, email, Telegram, Slack, Discord or WhatsApp." />
        <SmallFeature title="Use your own API key" body="Connect your API  and the content/image generation limits tied to your plan are lifted." />
        <SmallFeature title="Content Calendar" body="Monthly and timeline views for LinkedIn posts, Twitter threads, and blog articles. See what's going out and when, without opening a spreadsheet." />
      </div>
    </section>
  );
}

function FeatureChat() {
  return (
    <div className="min-h-[410px] overflow-hidden rounded-[22px] bg-[linear-gradient(160deg,#0f172a_0%,#1e293b_60%,#0A66C2_180%)] p-6 text-white shadow-[0_30px_60px_-20px_rgba(15,23,42,.35)]">
      <p className="text-xs font-bold text-blue-200">AI CHAT</p>
      <h3 className="mt-3 font-[family-name:var(--font-poppins)] text-2xl font-bold">A writing assistant that knows your workspace.</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">Ask for a post, angle, rewrite, or campaign idea. Draffly turns the conversation into publish-ready content.</p>
      <div className="mt-5 space-y-3">
        <div className="ml-auto max-w-[88%] rounded-2xl rounded-tr-md bg-white/12 p-3.5 ring-1 ring-white/10">
          <p className="text-xs font-bold uppercase tracking-[.16em] text-blue-200">Prompt</p>
          <p className="mt-2 text-sm leading-6 text-white">Write a post about Inbound calling Agent in Alex Hormozi style.</p>
        </div>
        <div className="rounded-2xl rounded-tl-md bg-white p-4 text-slate-900 shadow-xl">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.16em] text-slate-400">You</p>
              <p className="mt-1 font-[family-name:var(--font-poppins)] text-xl font-bold text-slate-900">Your post</p>
              <p className="mt-1 text-xs text-slate-500">LinkedIn - Just now</p>
            </div>
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-[10px] font-bold text-emerald-700">READY TO PUBLISH</span>
          </div>
          <p className="mt-4 text-sm leading-6 text-slate-700">Your sales team misses calls.<br/>Not sometimes. Every weekend. Every time they&#39;re on another call.<br/>That&#39;s a system problem.<br/>But an inbound calling agent picks up in under 2 seconds. Qualifies the lead...</p>
          <div className="mt-4 flex gap-4 text-sm font-normal text-slate-500">
            <span>👍 1.2k</span>
            <span>💬 284</span>
            <span>🔁 47</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureAgent() {
  return <div className="min-h-[410px] overflow-hidden rounded-[22px] border border-slate-200 bg-white p-6 shadow-[0_30px_60px_-20px_rgba(15,23,42,.1)]"><p className="text-xs font-bold text-[#3B5BDB]">AI AGENT PIPELINE</p><h3 className="mt-3 font-[family-name:var(--font-poppins)] text-2xl font-bold text-slate-900">5 agents. 1 run. Full post.</h3><p className="mt-3 text-sm leading-6 text-slate-600">Configure your publish account, tone, format, approval channel, and optional competitor style. Hit run. The agent handles research through publishing.</p><div className="mt-5 space-y-2">{["Research", "Strategy", "Write Content", "Generate Image", "Approval", "Publish", "Saved to Library"].map((item, index) => <div key={item} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3"><p className="font-semibold text-slate-900">{item}</p><span className={`rounded-full px-3 py-1 text-xs font-bold ${index < 4 ? "bg-emerald-100 text-emerald-700" : "bg-blue-100 text-[#0A66C2]"}`}>{index < 4 ? "AGENT" : "FLOW"}</span></div>)}</div></div>;
}

function FeatureCalendar() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return <div className="min-h-[410px] overflow-hidden rounded-[22px] border border-slate-200 bg-[linear-gradient(160deg,#F3F6F8_0%,#fff_60%)] p-6 shadow-[0_30px_60px_-20px_rgba(15,23,42,.1)]"><p className="text-xs font-bold text-[#3B5BDB]">CONTENT CALENDAR</p><h3 className="mt-3 font-[family-name:var(--font-poppins)] text-2xl font-bold text-slate-900">Calendar and timeline views.</h3><p className="mt-3 text-sm leading-6 text-slate-600">Track published, scheduled, and draft content across LinkedIn posts, Twitter threads, and blog articles.</p><div className="mt-5 grid grid-cols-7 gap-2 rounded-2xl bg-slate-50 p-3 text-center text-xs"><>{days.map((day) => <div key={day} className="font-bold text-slate-400">{day}</div>)}</>{[10, 11, 12, 13, 14, 15, 16].map((day) => <div key={day} className={`rounded-xl px-2 py-3 font-semibold ${day === 13 ? "bg-[#0A66C2] text-white" : "bg-white text-slate-600"}`}>{day}</div>)}</div><div className="mt-3 space-y-2"><div className="rounded-xl bg-blue-50 p-3 text-sm font-semibold text-[#0A66C2]">LinkedIn Post - Scheduled</div><div className="rounded-xl bg-slate-50 p-3 text-sm text-slate-600">Twitter Thread - Draft</div></div></div>;
}

function FeatureCard({ title, body, eyebrow }: { title: string; body: string; eyebrow: string }) {
  return <div className="min-h-[300px] rounded-[20px] border border-slate-200 bg-white p-6 shadow-[0_4px_12px_-6px_rgba(15,23,42,.08)]"><p className="text-xs font-bold text-[#3B5BDB]">{eyebrow}</p><h3 className="mt-3 font-[family-name:var(--font-poppins)] text-xl font-bold text-slate-900">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{body}</p><div className="mt-5 rounded-2xl bg-slate-50 p-4"><div className="mb-2 flex justify-between text-sm"><span>WORKSPACE</span><strong className="text-emerald-600">Synced</strong></div><div className="mb-2 flex justify-between text-sm"><span>PLAN</span><strong className="text-emerald-600">Active</strong></div><div className="flex justify-between text-sm"><span>STATUS</span><strong className="text-[#0A66C2]">Live</strong></div></div></div>;
}

function SmallFeature({ title, body }: { title: string; body: string }) {
  return <div className="min-h-[150px] rounded-[20px] border border-slate-200 bg-white p-5 shadow-[0_1px_3px_rgba(15,23,42,.06)]"><h3 className="font-[family-name:var(--font-poppins)] text-lg font-bold text-slate-900">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{body}</p></div>;
}

export function SecuritySection() {
  const freelancerCosts = [
    ["Research and strategy", "$400", "Audience research, angles, positioning"],
    ["Content writing", "$600", "Four polished social posts"],
    ["Visual direction", "$250", "Creative brief or image generation"],
    ["Publishing ops", "$200", "Scheduling, approvals, revisions"],
  ];

  return <section id='saving' className="mx-auto max-w-7xl px-6 py-24"><div className="grid items-center gap-12 rounded-[24px] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 lg:grid-cols-2 lg:p-12"><div><p className="text-xs font-bold tracking-[.2em] text-[#3B5BDB]">COST COMPARISON</p><h2 className="mt-4 font-[family-name:var(--font-poppins)] text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">How much will you save?</h2><p className="mt-5 text-lg leading-8 text-slate-600">A freelancer can help with writing, research, creative direction, and scheduling, but every step adds cost, coordination, and turnaround time. Draffly gives you the same end-to-end workflow on demand.</p><div className="mt-8 space-y-4">{["No separate researcher, strategist, writer, designer, or publishing tool", "No back-and-forth just to revise one post", "No lost drafts across docs, spreadsheets, and chat threads", "Every run saves the full pipeline history automatically", "Analyze platform wise content performance"].map((item) => <p key={item} className="flex gap-3 text-slate-700"><CheckIcon className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />{item}</p>)}</div></div><div className="rounded-[22px] border border-slate-200 bg-white p-6 shadow-xl"><p className="text-xs font-bold tracking-[.16em] text-slate-400">TYPICAL MONTHLY OUTSOURCING COST</p><div className="mt-5 space-y-3">{freelancerCosts.map(([label, cost, detail]) => <div key={label} className="flex items-center justify-between gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4"><div><p className="font-semibold text-slate-900">{label}</p><p className="mt-1 text-xs text-slate-500">{detail}</p></div><strong className="text-lg text-slate-900">{cost}</strong></div>)}</div><div className="mt-5 rounded-2xl bg-slate-950 p-5 text-white"><div className="flex items-end justify-between gap-4"><div><p className="text-sm text-slate-300">Freelancer total</p><p className="mt-1 font-[family-name:var(--font-poppins)] text-4xl font-bold">$1,450/mo</p></div><div className="text-right"><p className="text-sm text-slate-300">Draffly Plus</p><p className="mt-1 font-[family-name:var(--font-poppins)] text-3xl font-bold text-emerald-300">$29.99/mo</p></div></div><p className="mt-4 rounded-xl bg-emerald-400/10 p-3 text-sm font-semibold text-emerald-200">Save about $1,420/month before you even count management time.</p></div></div></div></section>;
}

export function PlansSection() {
  return <section id="plans" className="bg-white"><div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8"><div className="text-center"><h2 className="font-[family-name:var(--font-poppins)] text-4xl font-bold text-slate-900 sm:text-5xl">Start free. Scale when you need to.</h2><p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">No hidden fees. Cancel anytime.</p></div><div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">{planTiers.map((plan) => <PlanCard key={plan.name} plan={plan} />)}</div><div className="mx-auto mt-12 max-w-3xl space-y-3 text-center text-sm text-slate-500"><p className="font-semibold text-[#0A66C2]">Have your own API Key? Connect your key and content/image caps are lifted on any paid plan.</p></div></div></section>;
}

function PlanCard({ plan }: { plan: PlanTier }) {
  const price = plan.monthlyPrice === 0 ? "$0" : `$${plan.monthlyPrice.toFixed(2)}`;
  return <div className={`relative rounded-[24px] border p-6 shadow-sm ${plan.popular ? "border-slate-800 shadow-xl" : "border-slate-200"}`}>{plan.popular ? <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-slate-900 px-4 py-1 text-xs font-bold text-white">Most popular</div> : null}<h3 className="font-[family-name:var(--font-poppins)] text-2xl font-bold text-slate-900">{plan.name}</h3><p className="mt-2 text-sm font-semibold text-[#0A66C2]">{plan.tag}</p><div className="mt-5"><span className="font-[family-name:var(--font-poppins)] text-4xl font-bold text-slate-900">{price}</span><span className="text-sm text-slate-500"> / month</span></div>{plan.yearlyPrice > 0 ? <p className="mt-1 text-xs text-slate-500">${plan.yearlyPrice.toFixed(2)} / year billed annually</p> : <p className="mt-1 text-xs text-slate-500">Free forever tier</p>}<p className="mt-5 rounded-2xl bg-slate-50 p-4 text-sm font-semibold text-slate-900">{plan.quota}</p><a href="/plans" className={`mt-6 block w-full rounded-xl py-3 text-center text-sm font-semibold transition ${plan.popular ? "bg-gradient-to-r from-slate-800 to-slate-700 text-white shadow-lg hover:brightness-110" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`}>Start 7-day Free trial</a><div className="mt-5 space-y-3">{plan.features.map((feature) => <p key={feature} className="flex gap-3 text-sm text-slate-600"><CheckIcon className="h-5 w-5 shrink-0 text-emerald-600" />{feature}</p>)}{plan.unavailable?.map((feature) => <p key={feature} className="flex gap-3 text-sm text-slate-400"><span className="h-5 w-5 shrink-0 text-center text-sm leading-5">x</span>{feature}</p>)}</div></div>;
}

export function FaqSection() {
  const questions = [
    ["Do I need to bring my own AI API key?", "No. You can start without one. If you have an API key, you can connect it to use your preferred model and remove content and image caps."],
    ["Which social platforms can I publish to?", "LinkedIn (personal + pages), Twitter/X, and Facebook right now. Instagram is coming. You can connect multiple accounts."],
    ["How does the approval workflow work?", "After the agent finishes your draft, it routes to whatever approval channel you've configured (email, Slack, etc.) You review, approve or request edits, and the Agent publishes the post when you say go."],
    ["What happens to my content runs after I use them?", "Runs reset monthly. Every completed run is saved to your library with the full pipeline history, so nothing gets lost."],
    ["Can I change plans or cancel?", "Yes. Everything is self-serve from your billing dashboard. Upgrade, downgrade, or cancel without contacting support."],
  ];
  return <section id="faq" className="mx-auto max-w-7xl px-6 py-20 lg:px-8"><div className="mb-16 text-center"><h2 className="font-[family-name:var(--font-poppins)] text-3xl font-bold text-slate-800 sm:text-4xl lg:text-5xl">Frequently Asked Questions
</h2></div><div className="mx-auto max-w-3xl"><div className="space-y-4">{questions.map(([question, answer]) => <div key={question} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><h3 className="font-[family-name:var(--font-poppins)] text-xl font-bold text-slate-900">{question}</h3><p className="mt-4 text-[15px] leading-7 text-slate-600">{answer}</p></div>)}</div><div className="mt-12 text-center"><p className="mb-3 text-slate-600">Still have questions?</p><a href="/plans" className="inline-flex items-center gap-2 font-semibold text-slate-800 transition-colors hover:text-[#0A66C2]">Our Support team is here to help<ArrowRightIcon className="h-4 w-4" /></a></div></div></section>;
}

export function UseCasesSection() {
  return <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8"><div className="mb-16 text-center"><p className="mb-3 text-[11px] font-bold tracking-[.22em] text-[#3B5BDB]">WHO IT&apos;S BUILT FOR</p><h2 className="font-[family-name:var(--font-poppins)] text-3xl font-bold text-slate-800 sm:text-4xl lg:text-5xl">Different people. Same problem.</h2></div><div className="grid gap-6 md:grid-cols-3">{useCases.map((item) => <div key={item.name} className="block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-[#0A66C2]/30 hover:shadow-lg"><div className="mb-5 flex items-center gap-4"><div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#0A66C2] to-[#3B5BDB] text-lg font-bold text-white">{item.name.charAt(0)}</div><div><h3 className="font-bold text-slate-900">{item.name}</h3><p className="text-sm text-slate-500">{item.role}</p></div></div><p className="leading-7 text-slate-600">{item.quote}</p></div>)}</div></section>;
}

export function CtaSection() {
  return <section className="px-6 py-24"><div className="relative mx-auto max-w-[1100px] overflow-hidden rounded-[28px] bg-[#0a0f1c] px-8 py-20 text-center shadow-[0_30px_60px_-20px_rgba(15,23,42,.45)] lg:px-12"><div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(10,102,194,.35),transparent_28%),radial-gradient(circle_at_82%_22%,rgba(59,91,219,.25),transparent_25%),radial-gradient(circle_at_50%_80%,rgba(255,255,255,.08),transparent_35%)]" /><svg aria-hidden="true" viewBox="0 0 1100 500" className="absolute inset-0 h-full w-full opacity-35"><path d="M80 400 C240 160 420 470 610 210 S880 130 1040 330" fill="none" stroke="#38bdf8" strokeWidth="2" strokeDasharray="8 14" /><path d="M130 120 C360 260 650 50 980 160" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="5 18" /></svg><div className="relative"><p className="text-xs font-bold tracking-[.25em] text-blue-200">YOUR FIRST RUN IS FREE</p><h2 className="mx-auto mt-5 max-w-3xl font-[family-name:var(--font-poppins)] text-4xl font-bold tracking-tight text-white sm:text-6xl">Ready to stop doing this manually?</h2><p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-300">Connect your account, pick one topic, and let the Agent cook for you.</p><div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"><a href="/plans" className="rounded-2xl bg-white px-7 py-4 font-semibold text-slate-900 shadow-xl transition hover:bg-blue-50">Start for Free</a><a href="https://calendly.com/souvikp/draffly-demo" className="rounded-2xl border border-white/20 px-7 py-4 font-semibold text-white transition hover:bg-white/10">Book a demo with Founder</a></div><p className="mt-7 text-sm text-slate-400">No card required. Cancel anytime on paid plans. Trusted by 100+ creators</p></div></div></section>;
}

export function FooterSection() {
  const nav = ["AI Agent", "Library", "Calendar", "Analytics", "Competitors", "Billing", "Plans", "Settings"];
  return <footer className="mt-20 border-t border-slate-200 bg-white"><div className="mx-auto max-w-7xl px-6 py-16 pb-8 lg:px-8"><div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-16"><div><div className="mb-5 flex items-center gap-2 font-[family-name:var(--font-poppins)] text-xl font-bold text-slate-900"><LogoIcon className="h-9 w-9" />Draffly</div><p className="max-w-xs text-sm leading-6 text-slate-500">Agentic AI for Social Media Content Creation</p><p className="mt-6 text-sm text-slate-500">(c) 2026 Draffly.<br />All rights reserved.</p></div><FooterColumn title="PRODUCT" items={nav} /><FooterColumn title="WORKFLOWS" items={["AI Chat", "Agent Pipeline", "Content Ops", "Social Publishing"]} /><FooterColumn title="LEGAL" items={["Terms", "Privacy"]} /></div></div><div className="-mt-4 h-[45px] overflow-hidden sm:h-[88px] lg:h-[140px]"><h2 className="select-none bg-gradient-to-b from-slate-200 to-white bg-clip-text text-center font-[family-name:var(--font-poppins)] text-[56px] font-semibold leading-none tracking-wide text-transparent sm:text-[110px] lg:text-[176px]">Draffly</h2></div></footer>;
}

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return <div><h3 className="mb-5 text-xs font-bold tracking-[.18em] text-slate-400">{title}</h3><div className="grid gap-3">{items.map((item) => <a key={item} href="#" className="text-sm text-slate-500 transition-colors hover:text-slate-800">{item}</a>)}</div></div>;
}
