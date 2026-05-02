"use client";

/* eslint-disable @next/next/no-img-element, react/no-unescaped-entities */

import { useState } from "react";
import { ArrowRightIcon, CheckIcon, LogoIcon, MenuIcon, PlayIcon, StarIcon } from "@/components/icons";
import type { PricingPlan, Testimonial } from "@/types/leadgravity";

const partners = [
  { src: "/images/leadgravity/partners/babylovegrowth.png", alt: "Baby Love Growth" },
  { src: "/images/leadgravity/partners/chatseo-logo-1.png", alt: "ChatSEO" },
  { src: "/images/leadgravity/partners/gojiberry.svg", alt: "Gojiberry" },
  { src: "/images/leadgravity/partners/logo-benly-black-medium.svg", alt: "Benly" },
  { src: "/images/leadgravity/partners/noota.svg", alt: "Noota" },
  { src: "/images/leadgravity/partners/taapit.png", alt: "Taapit" },
];

const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    monthly: 39,
    yearly: 32,
    monthlyOriginal: 39,
    quota: "10 automations",
    features: ["Auto-DM & Comment Replies", "Auto-Accept Connection Requests", "AI Post Generator (10 posts/mo)", "Auto-Publish & Schedule", "Simple Analytics", "Prioritize Reposters", "Webhook for Each Comment", "Standard Support"],
  },
  {
    name: "Pro",
    monthly: 59,
    yearly: 49,
    monthlyOriginal: 59,
    popular: true,
    quota: "100 automations",
    features: ["Auto-DM & Comment Replies", "Auto-Accept Connection Requests", "AI Post Generator (30 posts/mo)", "Auto-Publish & Schedule", "Analytics Dashboard", "Prioritize Reposters", "Webhook for Each Comment", "Priority Support"],
  },
  {
    name: "Pro Max",
    monthly: 129,
    yearly: 99,
    monthlyOriginal: 129,
    quota: "Unlimited automations",
    features: ["Everything in Pro", "AI Post Generator (Unlimited)", "Auto-Publish & Schedule", "Advanced Analytics", "Multi-account Soon", "Sales Navigator Integration Soon", "API Access Soon", "Dedicated Support"],
  },
];

const testimonials: Testimonial[] = [
  {
    name: "Lewis R.",
    role: "English Content Creator\n(1.5M followers)",
    image: "/images/leadgravity/user2.png",
    href: "https://www.linkedin.com/in/lewis-rollinson-b13894112/",
    quote: "LeadGravity has completely transformed how I handle LinkedIn engagement. I used to spend hours responding to comments - now it's all automated and I can focus on creating content.",
  },
  {
    name: "Roman S",
    role: "SaaS Founder Gojiberry.ai\n(EUR30k MRR)",
    image: "/images/leadgravity/roman.png",
    href: "https://www.linkedin.com/in/rom%C3%A0n-czerny-11b773199/",
    quote: "The ROI is insane. Within the first month, I generated 150 qualified leads from LinkedIn comments alone. The personalized DMs feel authentic and my conversion rate has doubled.",
  },
  {
    name: "Alexis",
    role: "AI Artist Director",
    image: "/images/leadgravity/user3.png",
    href: "#testimonials",
    quote: "I was skeptical at first, but LeadGravity exceeded my expectations. The smart scheduling makes my outreach feel natural, and my account has stayed completely safe.",
  },
  {
    name: "Maxime L.",
    role: "Agency Owner",
    image: "/images/leadgravity/maxime.png",
    href: "https://www.linkedin.com/in/maximelemorillon/",
    quote: "We use LeadGravity for all our clients' LinkedIn accounts. The lead tracking and automation saves us 20+ hours per week. Essential tool for any growth agency.",
  },
  {
    name: "Alexandra A.",
    role: "Designer & Content Creator",
    image: "/images/leadgravity/alexandra.png",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7414233039255474176/?originTrackingId=JXwaZMU%2FrVoFMwAGQBHRbg%3D%3D",
    quote: "It handled 2000+ comments automatically in a few days! LeadGravity helped me turn every viral post into a lead generation machine. The keyword triggers are genius.",
  },
  {
    name: "Igor L.",
    role: "Tech Entrepreneur",
    image: "/images/leadgravity/igor.jpg",
    href: "https://www.linkedin.com/in/igor-lapaj-28a44695/",
    quote: "Finally a LinkedIn tool that actually works without risking your account. Clean interface, powerful features, and the support team is incredibly responsive.",
  },
];

export function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-xl transition-[background-color] duration-150 ease-in-out">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative flex h-[72px] items-center justify-between py-4">
          <a href="/en" aria-label="Logo" className="flex items-center gap-2 text-xl font-bold text-slate-800">
            <LogoIcon className="h-10 w-10" />
            <span>LeadGravity</span>
          </a>
          <div className="hidden items-center gap-8 md:flex">
            <a className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-800" href="#features">Features</a>
            <a className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-800" href="#pricing">Pricing</a>
          </div>
          <div className="hidden items-center gap-3 md:flex">
            <a className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-800" href="/fr/">FR</a>
            <a className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-800" href="/en/signin">Sign In</a>
            <a className="rounded-xl bg-gradient-to-r from-slate-800 to-slate-700 px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:brightness-110" href="/en/signup">Get Started</a>
          </div>
          <div className="flex items-center gap-2 md:hidden">
            <a className="rounded-lg px-3 py-1.5 text-sm font-medium text-slate-600" href="/fr/">FR</a>
            <button aria-label="Toggle menu" type="button" onClick={() => setOpen((value) => !value)} className="rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-800">
              <MenuIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
        {open ? (
          <div className="grid gap-3 border-t border-slate-200 py-4 md:hidden">
            <a href="#features" className="text-sm font-medium text-slate-700">Features</a>
            <a href="#pricing" className="text-sm font-medium text-slate-700">Pricing</a>
            <a href="/en/signin" className="text-sm font-medium text-slate-700">Sign In</a>
            <a href="/en/signup" className="rounded-xl bg-gradient-to-r from-slate-800 to-slate-700 px-4 py-3 text-center text-sm font-semibold text-white">Get Started</a>
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
            +44,536 leads captured in 2 months
          </div>
          <h1 className="font-[family-name:var(--font-poppins)] text-5xl font-bold leading-[.95] tracking-[-0.04em] text-slate-900 sm:text-6xl lg:text-[80px]">
            Your Lead Magnets
            <span className="block bg-[linear-gradient(110deg,#0A66C2_0%,#3B5BDB_45%,#1e293b_100%)] bg-clip-text text-transparent">On Autopilot.</span>
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">Drop a keyword. Watch every LinkedIn comment turn into a DM, a reply, and a qualified lead while you sleep.</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="/en/signup" className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-800 to-slate-700 px-7 py-4 text-base font-semibold text-white shadow-xl transition hover:brightness-110">Start 7-Day Free Trial</a>
            <button type="button" className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-7 py-4 text-base font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:shadow-md">
              <PlayIcon className="h-4 w-4" /> Watch 90-sec demo
            </button>
          </div>
          <div className="mt-7 flex items-center justify-center gap-4">
            <div className="flex text-amber-400">{Array.from({ length: 5 }).map((_, index) => <StarIcon key={index} className="h-5 w-5" />)}</div>
            <div className="text-left text-sm leading-tight"><strong className="block text-slate-900">4.9/5</strong><span className="text-slate-500">Trusted by 300+ creators</span></div>
          </div>
        </div>
        <DashboardMockup />
      </div>
    </section>
  );
}

function DashboardMockup() {
  return (
    <div className="relative mx-auto max-w-[960px]">
      <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_40px_80px_-20px_rgba(15,23,42,.22)]">
        <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-5 py-3 text-xs font-medium text-slate-500">
          <span className="h-3 w-3 rounded-full bg-red-400" /><span className="h-3 w-3 rounded-full bg-amber-400" /><span className="h-3 w-3 rounded-full bg-emerald-400" />
          <span className="ml-3 rounded-full bg-white px-3 py-1 shadow-sm">leadgravity.ai / automations</span>
        </div>
        <div className="grid lg:grid-cols-[220px_1fr]">
          <aside className="hidden border-r border-slate-100 bg-slate-950 p-5 text-white lg:block">
            <div className="mb-8 flex items-center gap-2 font-bold"><LogoIcon className="h-7 w-7" />LeadGravity</div>
            {['Dashboard', 'Automations', 'Leads', 'Analytics', 'Library'].map((item, index) => (
              <div key={item} className={`mb-2 rounded-xl px-3 py-2 text-sm ${index === 1 ? 'bg-white/12 text-white' : 'text-slate-400'}`}>{item}</div>
            ))}
          </aside>
          <div className="p-5 sm:p-7">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <div><h3 className="font-[family-name:var(--font-poppins)] text-2xl font-bold text-slate-900">Automations</h3><p className="text-sm text-slate-500">3 active · last fire 12s ago</p></div>
              <span className="rounded-xl bg-[#0A66C2] px-4 py-2 text-sm font-semibold text-white">New</span>
            </div>
            <div className="mb-5 grid gap-3 sm:grid-cols-3">
              {[['TRIGGERS FIRED', '1,284', '+127%'], ['DMS DELIVERED', '98.2%', '+4.1%'], ['REPLY RATE', '31%', '+8.2%']].map(([label, value, delta]) => (
                <div key={label} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"><p className="text-[11px] font-bold tracking-wide text-slate-400">{label}</p><div className="mt-2 flex items-end justify-between"><strong className="text-2xl text-slate-900">{value}</strong><span className="text-xs font-semibold text-emerald-600">{delta}</span></div></div>
              ))}
            </div>
            <div className="grid gap-5 lg:grid-cols-[1fr_280px]">
              <div className="space-y-3">
                {[['Lead Magnet: "PLAYBOOK"', '847', '34%'], ['Demo invite: "DEMO"', '289', '28%'], ['Newsletter: "SUBSCRIBE"', '148', '41%']].map(([title, hits, rate]) => (
                  <div key={title} className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 p-4"><div><p className="font-semibold text-slate-900">{title}</p><p className="text-xs text-slate-500">{hits} hits · {rate} reply rate</p></div><span className="rounded-full bg-emerald-100 px-2 py-1 text-[10px] font-bold text-emerald-700">ACTIVE</span></div>
                ))}
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-[#0A66C2] to-[#3B5BDB] p-5 text-white shadow-xl"><p className="text-sm text-blue-100">Leads captured · last 7d</p><p className="mt-3 text-4xl font-bold">+1,284</p><svg viewBox="0 0 300 70" className="mt-6 h-16 w-full"><path d="M0 55 C 55 30, 85 45, 130 25 S 210 14, 300 20" fill="none" stroke="white" strokeWidth="7" strokeLinecap="round" opacity=".9" /></svg></div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xl"><div className="flex items-center gap-3"><img src="/images/leadgravity/eric.jpg" alt="Eric Djavid" className="h-10 w-10 rounded-full object-cover" /><div><p className="font-semibold text-slate-900">Eric Djavid</p><p className="text-xs text-slate-500">Founder · 1d</p></div></div><p className="mt-3 text-sm text-slate-700">Drop "PLAYBOOK" below, I'll DM you our 23-page lead magnet guide.</p><div className="mt-3 rounded-xl bg-slate-100 p-3 text-sm font-semibold text-slate-700">The Playbook · PDF</div><p className="mt-3 text-xs text-slate-500">Like 128 · 47 new comments</p></div>
        <div className="rounded-2xl border border-blue-100 bg-white p-4 shadow-xl"><div className="mb-3 flex items-center justify-between"><span className="text-xs font-bold text-[#0A66C2]">AUTO-DM</span><span className="text-xs text-emerald-600">SENT</span></div><p className="text-xs text-slate-500">to Kajal G. · delivered 2s ago</p><p className="mt-3 text-sm text-slate-700">Hey Kajal, thanks for the comment! Here's the 23-page Lead Magnet Playbook.</p><div className="mt-3 rounded-xl border border-slate-200 p-3 text-sm"><strong>The_Playbook.pdf</strong><br /><span className="text-slate-500">23 pages · 2.1 MB</span></div><div className="mt-3 flex gap-2 font-mono text-xs text-slate-500"><span>{'{{firstName}}'}</span><span>{'{{headline}}'}</span></div></div>
        <div className="rounded-2xl border border-emerald-100 bg-white p-4 shadow-xl"><div className="flex items-center gap-3"><img src="/images/leadgravity/kajal-goel-stripe.jpeg" alt="Kajal G." className="h-10 w-10 rounded-full object-cover" /><div><p className="font-semibold text-slate-900">Lead captured · Kajal G.</p><p className="text-xs text-slate-500">Product Partnerships @ Stripe · Pushed to HubSpot</p></div></div><p className="mt-5 rounded-xl bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-700">TODAY · 214 DMs sent</p></div>
      </div>
    </div>
  );
}

export function TrustedBySection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col items-center justify-center gap-8 lg:flex-row">
          <p className="text-center text-[11px] font-bold tracking-[.22em] text-slate-400">TRUSTED BY AMBITIOUS TEAMS AT</p>
          <div className="grid w-full grid-cols-2 items-center gap-6 opacity-70 sm:grid-cols-3 lg:flex lg:w-auto lg:gap-8">
            {partners.map((partner) => <img key={partner.alt} src={partner.src} alt={partner.alt} className="mx-auto max-h-9 max-w-32 object-contain grayscale" />)}
          </div>
        </div>
      </div>
    </section>
  );
}

export function HowItWorksSection() {
  const steps = [
    ["01", "TRIGGER", "Pick a post. Pick a keyword.", "Choose any LinkedIn post and define the trigger word: \"PLAYBOOK\", \"DEMO\", \"GUIDE\". That's your lead magnet."],
    ["02", "ENGAGE", "Write once. Personalize forever.", "Craft a DM and auto-reply using variables like {{firstName}}, {{headline}}, {{company}}. LeadGravity fills in the rest."],
    ["03", "CAPTURE", "Every lead, fully enriched.", "Commenters land in your dashboard with job title, company, and LinkedIn profile. Export to CSV or push to HubSpot, Pipedrive, Notion."],
  ];

  return (
    <section id="how-it-works" className="bg-gradient-to-b from-[#F3F6F8] to-white px-6 pb-20 pt-24">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-16 text-center"><p className="mb-3 text-[11px] font-bold tracking-[.22em] text-[#3B5BDB]">HOW IT WORKS</p><h2 className="font-[family-name:var(--font-poppins)] text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Three Steps. That's It.</h2><p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">Goes live in under 4 minutes. No LinkedIn API keys, no browser extensions.</p></div>
        <div className="relative grid gap-6 lg:grid-cols-3">
          <p className="absolute -top-11 left-3 hidden rotate-[-7deg] font-[family-name:var(--font-caveat)] text-2xl font-semibold text-[#0A66C2] lg:block">Start here</p>
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
        {[['+0', 'DMs sent safely'], ['+0', 'Leads captured for our users'], ['+0', 'Creators trust us'], ['<4 min', 'To your first captured lead']].map(([value, label]) => <div key={label}><p className="font-[family-name:var(--font-poppins)] text-4xl font-bold text-white">{value}</p><p className="mt-2 text-sm text-slate-400">{label}</p></div>)}
      </div>
    </section>
  );
}

export function FeaturesSection() {
  return (
    <section id="features" className="mx-auto max-w-7xl overflow-hidden px-8 py-[120px]">
      <div className="mb-16 text-center"><span className="inline-block rounded-full bg-blue-100 px-[14px] py-1.5 text-[11px] font-semibold uppercase leading-[16.5px] text-[#3B5BDB]">The Full Stack</span><h2 className="mx-auto mt-[18px] max-w-5xl font-[family-name:var(--font-poppins)] text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-[63px] lg:leading-[64px]">Not Just Automation.<br />The Whole Growth Engine.</h2><p className="mx-auto mt-[14px] max-w-[640px] text-[19px] leading-[28.5px] text-slate-600">Generate magnets. Schedule posts. Capture leads. All from one tab.</p></div>
      <div className="grid gap-5 lg:grid-cols-3">
        <FeaturePostGenerator />
        <FeatureCalendar />
        <FeatureLibrary />
      </div>
      <div className="mt-5 grid gap-5 lg:grid-cols-3">
        <FeatureCard title="One tab. One LinkedIn session. Zero extensions." eyebrow="NATIVE INTEGRATION" body="Connect your LinkedIn the same way you sign into any SaaS. No Chrome extension, no browser hijacking." dark={false} />
        <FeatureCard title="LinkedIn-safe by design" body="Business-hours sending, random delays, per-account caps. Your account stays squeaky clean." dark={false} />
        <FeatureCard title="Smart triggers" body="Multiple keywords per post, regex matching, exact-match exclusions. Fire exactly when you want." dark={false} />
      </div>
      <div className="mt-5 grid gap-5 lg:grid-cols-3">
        <SmallFeature title="Personalize at scale" body="Variables like {{firstName}}, {{headline}}, {{company}}. Every DM feels hand-typed." />
        <SmallFeature title="CRM in one click" body="Push captured leads to HubSpot, Pipedrive, Notion, Airtable, or export a clean CSV." />
        <SmallFeature title="Live analytics" body="Track triggers fired, DMs delivered, reply rate, and leads captured per post and per keyword." />
      </div>
    </section>
  );
}

function FeaturePostGenerator() {
  return <div className="min-h-[470px] overflow-hidden rounded-[22px] bg-[linear-gradient(160deg,#0f172a_0%,#1e293b_60%,#0A66C2_180%)] p-7 text-white shadow-[0_30px_60px_-20px_rgba(15,23,42,.35)]"><p className="text-xs font-bold text-blue-200">NEW · AI POWERED</p><h3 className="mt-3 font-[family-name:var(--font-poppins)] text-2xl font-bold">AI Post Generator</h3><p className="mt-3 text-sm leading-6 text-slate-300">Describe your audience. Get a viral LinkedIn post, ready to gate behind a keyword, in 60 seconds.</p><div className="mt-7 rounded-2xl bg-white/10 p-4"><p className="text-xs font-bold text-blue-200">PROMPT</p><p className="mt-2 text-sm">"Post about cold outbound mistakes for B2B SaaS founders"</p></div><div className="mt-4 rounded-2xl bg-white p-4 text-slate-900"><p className="text-xs text-slate-500">Your post · LinkedIn · Just now</p><p className="mt-3 text-sm leading-6">I sent 1,200 cold DMs last month. Here are the 3 mistakes killing my reply rate (and what took it from 4% to 31%)</p><p className="mt-3 text-sm font-semibold text-[#0A66C2]">Comment "PLAYBOOK" to get the guide in your DMs.</p><p className="mt-3 text-xs text-slate-500">Like 1.2k · 284 comments · 47 reposts</p></div></div>;
}

function FeatureCalendar() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return <div className="min-h-[470px] overflow-hidden rounded-[22px] border border-slate-200 bg-white p-7 shadow-[0_30px_60px_-20px_rgba(15,23,42,.1)]"><p className="text-xs font-bold text-[#3B5BDB]">NEW · SCHEDULER</p><h3 className="mt-3 font-[family-name:var(--font-poppins)] text-2xl font-bold text-slate-900">Post Planner Calendar</h3><p className="mt-3 text-sm leading-6 text-slate-600">Plan a month of LinkedIn posts in one view. Drag to reschedule. Queue lead magnets to drop when you're offline.</p><div className="mt-7 grid grid-cols-7 gap-2 rounded-2xl bg-slate-50 p-3 text-center text-xs"><>{days.map((day) => <div key={day} className="font-bold text-slate-400">{day}</div>)}</>{[10,11,12,13,14,15,16].map((day) => <div key={day} className={`rounded-xl p-3 font-semibold ${day === 13 ? 'bg-[#0A66C2] text-white' : 'bg-white text-slate-600'}`}>{day}</div>)}</div><div className="mt-4 space-y-2"><div className="rounded-xl bg-blue-50 p-3 text-sm font-semibold text-[#0A66C2]">Lead magnet drop · Thu 9:00</div><div className="rounded-xl bg-slate-50 p-3 text-sm text-slate-600">Case study · Thu 14:00</div></div></div>;
}

function FeatureLibrary() {
  return <div className="min-h-[470px] overflow-hidden rounded-[22px] border border-slate-200 bg-[linear-gradient(160deg,#F3F6F8_0%,#fff_60%)] p-7 shadow-[0_30px_60px_-20px_rgba(15,23,42,.1)]"><p className="text-xs font-bold text-[#3B5BDB]">NEW · LIBRARY</p><h3 className="mt-3 font-[family-name:var(--font-poppins)] text-2xl font-bold text-slate-900">400+ Magnets That Already Work.</h3><p className="mt-3 text-sm leading-6 text-slate-600">Browse the library. Filter by industry, conversion rate, or creator. Fork in one click, it's yours.</p><div className="mt-7 space-y-3">{[['Cold Outbound Playbook','28p','42%'], ['SaaS Pricing Teardown','19p','38%'], ['LinkedIn Content OS','34p','51%'], ['Founder Sales Scripts','22p','45%']].map(([title,pages,rate]) => <div key={title} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-4"><div><p className="font-semibold text-slate-900">{title}</p><p className="text-xs text-slate-500">{pages}</p></div><span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">{rate}</span></div>)}</div><p className="mt-4 text-center text-sm font-semibold text-[#0A66C2]">Browse 396 more</p></div>;
}

function FeatureCard({ title, body, eyebrow }: { title: string; body: string; eyebrow?: string; dark: boolean }) {
  return <div className="min-h-[353px] rounded-[20px] border border-slate-200 bg-white p-7 shadow-[0_4px_12px_-6px_rgba(15,23,42,.08)]"><p className="text-xs font-bold text-[#3B5BDB]">{eyebrow ?? ""}</p><h3 className="mt-3 font-[family-name:var(--font-poppins)] text-2xl font-bold text-slate-900">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{body}</p><div className="mt-7 rounded-2xl bg-slate-50 p-4"><div className="mb-3 flex justify-between text-sm"><span>ACCOUNT</span><strong className="text-emerald-600">Connected</strong></div><div className="mb-3 flex justify-between text-sm"><span>SESSION</span><strong className="text-emerald-600">Healthy</strong></div><div className="flex justify-between text-sm"><span>SYNC</span><strong className="text-[#0A66C2]">Live</strong></div></div></div>;
}

function SmallFeature({ title, body }: { title: string; body: string }) {
  return <div className="min-h-[179px] rounded-[20px] border border-slate-200 bg-white p-6 shadow-[0_1px_3px_rgba(15,23,42,.06)]"><h3 className="font-[family-name:var(--font-poppins)] text-xl font-bold text-slate-900">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{body}</p></div>;
}

export function SecuritySection() {
  return <section className="mx-auto max-w-7xl px-6 py-24"><div className="grid items-center gap-12 rounded-[24px] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 lg:grid-cols-2 lg:p-12"><div><p className="text-xs font-bold tracking-[.2em] text-[#3B5BDB]">SECURITY & COMPLIANCE</p><h2 className="mt-4 font-[family-name:var(--font-poppins)] text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Engineered to Be The Most Secure.</h2><p className="mt-5 text-lg leading-8 text-slate-600">Refined for 1 year by its creator and 10+ beta testers on their own LinkedIn accounts. We treat your account like we treat ours.</p><div className="mt-8 space-y-4">{['Per-account daily caps that respect LinkedIn limits', 'Random delays between actions, never robotic', 'Sends only during your configured business hours', 'Full audit log of every trigger, DM, and reply'].map((item) => <p key={item} className="flex gap-3 text-slate-700"><CheckIcon className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />{item}</p>)}</div></div><div className="rounded-[22px] border border-slate-200 bg-white p-6 shadow-xl"><p className="text-xs font-bold tracking-[.16em] text-slate-400">TODAY'S ACTIVITY · WITHIN LIMITS</p>{[['DMs sent','38 / 80','48%'], ['Replies posted','24 / 100','24%'], ['Profile views','12 / 120','10%']].map(([label,value,width]) => <div key={label} className="mt-5"><div className="mb-2 flex justify-between text-sm"><span className="text-slate-600">{label}</span><strong className="text-slate-900">{value}</strong></div><div className="h-2 rounded-full bg-slate-100"><div className={`h-2 rounded-full bg-gradient-to-r from-[#0A66C2] to-emerald-500 ${width === '48%' ? 'w-[48%]' : width === '24%' ? 'w-[24%]' : 'w-[10%]'}`} /></div></div>)}<p className="mt-6 rounded-2xl bg-emerald-50 p-4 text-sm font-semibold text-emerald-700">Account health: Excellent · No warnings in 127 days</p></div></div></section>;
}

export function PricingSection() {
  const [yearly, setYearly] = useState(true);
  return <section id="pricing" className="bg-white"><div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8"><div className="text-center"><h2 className="font-[family-name:var(--font-poppins)] text-4xl font-bold text-slate-900 sm:text-5xl">Automate your LinkedIn Lead Magnets</h2><p className="mt-4 text-lg text-slate-600">Start 7 days for free. Cancel anytime.</p></div><div className="my-10 flex justify-center"><div className="rounded-xl bg-slate-100 p-1"><button type="button" onClick={() => setYearly(false)} className={`rounded-lg px-6 py-2 text-sm font-medium transition-all ${!yearly ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>Monthly</button><button type="button" onClick={() => setYearly(true)} className={`rounded-lg px-6 py-2 text-sm font-medium transition-all ${yearly ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>Yearly <span className="ml-2 rounded-full bg-emerald-100 px-2 py-0.5 text-xs text-emerald-700">Save 20%</span></button></div></div><div className="grid gap-6 lg:grid-cols-3 lg:gap-8">{pricingPlans.map((plan) => <PricingCard key={plan.name} plan={plan} yearly={yearly} />)}</div><p className="mt-12 text-center text-sm text-slate-500">Secure Payment · Cancel Anytime · 7-day Free Trial</p></div></section>;
}

function PricingCard({ plan, yearly }: { plan: PricingPlan; yearly: boolean }) {
  const price = yearly ? plan.yearly : plan.monthly;
  return <div className={`relative rounded-[24px] border p-6 shadow-sm ${plan.popular ? 'border-slate-800 shadow-xl' : 'border-slate-200'}`}>{plan.popular ? <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-slate-900 px-4 py-1 text-xs font-bold text-white">Most Popular</div> : null}<h3 className="font-[family-name:var(--font-poppins)] text-2xl font-bold text-slate-900">{plan.name}</h3><div className="mt-6 flex items-end gap-2"><span className="font-[family-name:var(--font-poppins)] text-5xl font-bold text-slate-900">${price}</span><span className="pb-2 text-slate-500">/month</span></div>{yearly ? <div className="mt-2 flex gap-2 text-sm"><span className="text-slate-400 line-through">${plan.monthlyOriginal}/mo</span><span className="font-semibold text-emerald-600">-20%</span></div> : <div className="mt-2 h-5" />}<a href="/en/signup" className={`mt-7 block w-full rounded-xl py-3 text-center text-sm font-semibold transition ${plan.popular ? 'bg-gradient-to-r from-slate-800 to-slate-700 text-white shadow-lg hover:brightness-110' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}>Start 7-Day Free Trial</a><p className="mt-6 font-semibold text-slate-900">{plan.quota} <span className="ml-1 rounded-full bg-slate-100 px-1.5 text-xs text-slate-400">?</span></p><div className="mt-5 space-y-3">{plan.features.map((feature) => <p key={feature} className="flex gap-3 text-sm text-slate-600"><CheckIcon className="h-5 w-5 shrink-0 text-emerald-600" />{feature}</p>)}</div></div>;
}

export function FaqSection() {
  const questions = ['How does the automation work?', 'Can I personalize my messages?', 'What happens during the free trial?', 'How many messages can I send per day?', 'Can I cancel anytime?'];
  return <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8"><div className="mb-16 text-center"><h2 className="font-[family-name:var(--font-poppins)] text-3xl font-bold text-slate-800 sm:text-4xl lg:text-5xl">Frequently Asked Questions</h2><p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">Everything you need to know about LeadGravity</p></div><div className="mx-auto max-w-3xl"><div className="space-y-4"><div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><h3 className="font-[family-name:var(--font-poppins)] text-xl font-bold text-slate-900">Is my LinkedIn account safe?</h3><p className="mt-4 text-[15px] leading-7 text-slate-600">Absolutely. LeadGravity was built from day one with security as the top priority. The system has been refined for over 1 year by its creator (on his own 30k-follower account) and battle-tested by 10+ beta testers, zero account restrictions to date. You control everything: daily DM and comment limits, random delays between messages, custom sending hours, active days. Messages are sent with natural human-like timing, indistinguishable from manual sending. And we never have access to your LinkedIn password.</p></div>{questions.map((question) => <div key={question} className="rounded-2xl border border-slate-200 bg-white p-6 text-lg font-semibold text-slate-800 shadow-sm">{question}</div>)}</div><div className="mt-12 text-center"><p className="mb-3 text-slate-600">Still have a question?</p><button type="button" className="inline-flex items-center gap-2 font-semibold text-slate-800 transition-colors hover:text-[#0A66C2]">Contact our support team! We'll be happy to help you.<ArrowRightIcon className="h-4 w-4" /></button></div></div></section>;
}

export function TestimonialsSection() {
  return <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8"><div className="mb-16 text-center"><h2 className="font-[family-name:var(--font-poppins)] text-3xl font-bold text-slate-800 sm:text-4xl lg:text-5xl">Loved by LinkedIn Creators</h2><p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">Join hundreds of professionals growing their LinkedIn presence with LeadGravity</p></div><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{testimonials.map((item) => <a key={item.name} href={item.href} className="block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-[#0A66C2]/30 hover:shadow-lg"><div className="mb-5 flex items-center gap-4"><img src={item.image} alt={item.name} className="h-12 w-12 rounded-full object-cover" /><div><h3 className="font-bold text-slate-900">{item.name}</h3><p className="whitespace-pre-line text-sm text-slate-500">{item.role}</p></div></div><p className="leading-7 text-slate-600">"{item.quote}"</p></a>)}</div></section>;
}

export function CtaSection() {
  return <section className="px-6 py-24"><div className="relative mx-auto max-w-[1100px] overflow-hidden rounded-[28px] bg-[#0a0f1c] px-8 py-20 text-center shadow-[0_30px_60px_-20px_rgba(15,23,42,.45)] lg:px-12"><div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(10,102,194,.35),transparent_28%),radial-gradient(circle_at_82%_22%,rgba(59,91,219,.25),transparent_25%),radial-gradient(circle_at_50%_80%,rgba(255,255,255,.08),transparent_35%)]" /><svg aria-hidden="true" viewBox="0 0 1100 500" className="absolute inset-0 h-full w-full opacity-35"><path d="M80 400 C240 160 420 470 610 210 S880 130 1040 330" fill="none" stroke="#38bdf8" strokeWidth="2" strokeDasharray="8 14" /><path d="M130 120 C360 260 650 50 980 160" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="5 18" /></svg><div className="relative"><p className="text-xs font-bold tracking-[.25em] text-blue-200">READY WHEN YOU ARE</p><h2 className="mx-auto mt-5 max-w-3xl font-[family-name:var(--font-poppins)] text-4xl font-bold tracking-tight text-white sm:text-6xl">Your Next Lead is One Comment Away.</h2><p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-300">Set up your first automation in under 4 minutes. 7 days free.</p><div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"><a href="/en/signup" className="rounded-2xl bg-white px-7 py-4 font-semibold text-slate-900 shadow-xl transition hover:bg-blue-50">Start 7-Day Free Trial</a><a href="https://cal.com/eric-djavid/demo-lead-gravity/" className="rounded-2xl border border-white/20 px-7 py-4 font-semibold text-white transition hover:bg-white/10">Book a Demo</a></div><p className="mt-7 text-sm text-slate-400">Secure Payment · Cancel Anytime · Used by 500+ creators</p></div></div></section>;
}

export function FooterSection() {
  const nav = ['Pricing', 'Features', 'Blog', 'Help Center', 'Affiliates (30%)', 'Get Started'];
  return <footer className="mt-20 border-t border-slate-200 bg-white"><div className="mx-auto max-w-7xl px-6 py-16 pb-8 lg:px-8"><div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-16"><div><div className="mb-5 flex items-center gap-2 font-[family-name:var(--font-poppins)] text-xl font-bold text-slate-900"><LogoIcon className="h-9 w-9" />LeadGravity</div><p className="max-w-xs text-sm leading-6 text-slate-500">Turn every LinkedIn comment into a lead. Automated, personalized, and safe.</p><p className="mt-6 text-sm text-slate-500">© 2026 LeadGravity.<br />All rights reserved.</p></div><FooterColumn title="NAVIGATION" items={nav} /><FooterColumn title="CONTACT" items={['Contact', 'Book a Demo']} /><FooterColumn title="LEGAL" items={['Terms and Conditions', 'Privacy Policy']} /></div></div><div className="-mt-4 h-[45px] overflow-hidden sm:h-[88px] lg:h-[140px]"><h2 className="select-none bg-gradient-to-b from-slate-200 to-white bg-clip-text text-center font-[family-name:var(--font-poppins)] text-[56px] font-semibold leading-none tracking-wide text-transparent sm:text-[110px] lg:text-[176px]">Lead Gravity</h2></div></footer>;
}

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return <div><h3 className="mb-5 text-xs font-bold tracking-[.18em] text-slate-400">{title}</h3><div className="grid gap-3">{items.map((item) => <a key={item} href="#" className="text-sm text-slate-500 transition-colors hover:text-slate-800">{item}</a>)}</div></div>;
}
