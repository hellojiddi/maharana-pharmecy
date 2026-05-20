import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

/* ─────────────────────────────────────────────
   LANGUAGE OPTIONS — Roman + Native Script
   ───────────────────────────────────────────── */
const languages = [
  { id: 'hindi',    label: 'Hindi',    native: 'हिंदी',     script: 'devanagari' },
  { id: 'bhojpuri', label: 'Bhojpuri', native: 'भोजपुरी',   script: 'devanagari' },
  { id: 'maithili', label: 'Maithili', native: 'मैथिली',    script: 'devanagari' },
  { id: 'urdu',     label: 'Urdu',     native: 'اردو',       script: 'urdu' },
  { id: 'bengali',  label: 'Bengali',  native: 'বাংলা',      script: 'bengali' },
];

/* ─────────────────────────────────────────────
   SYSTEM PROMPT — context-locked for MPCP
   ───────────────────────────────────────────── */
function buildPrompt(langLabel: string, langNative: string): string {
  return `You are the official AI Assistant of Maharana Pratap College of Pharmacy (MPCP), Chilhari, Buxar, Bihar.

STRICT RULES:
1. You MUST answer ONLY using facts, data, and guidelines from the official MPCP website: https://maharanapharmacy.com/
2. The college is: PCI Approved (Pharmacy Council of India, New Delhi) and BUHS Affiliated (Bihar University of Health Sciences, Patna). Established 2018. Offers D.Pharm (2-year) and B.Pharm (4-year) programs. Located at Vill: Chilhari, Block: Dumraon, Dist. Buxar, Bihar - 802133. Contact: +91 92798 81832 / maharanapratapcoe@gmail.com
3. If any question is outside MPCP context, politely say: "I can only answer questions about Maharana Pratap College of Pharmacy."
4. NEVER speculate, hallucinate, or provide unverified information.
5. You MUST reply STRICTLY in ${langLabel} (${langNative}) language using its correct native script. Do NOT switch to English mid-reply.

Start by greeting the user warmly in ${langNative} and asking how you can help them with MPCP admissions, courses, or facilities.`;
}

/* ─────────────────────────────────────────────
   AI PROVIDER CONFIG
   ───────────────────────────────────────────── */
interface AIProvider {
  id: string;
  name: string;
  tagline: string;
  color: string;
  hoverColor: string;
  borderColor: string;
  textColor: string;
  link: (prompt: string) => string;
  icon: React.ReactNode;
}

const providers: AIProvider[] = [
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    tagline: 'by OpenAI',
    color: 'bg-[#1A1A1A]',
    hoverColor: 'hover:bg-[#2A2A2A]',
    borderColor: 'border-[#333]',
    textColor: 'text-white',
    link: (prompt) => `https://chat.openai.com/?q=${encodeURIComponent(prompt)}`,
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.677l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0L4.006 14.5A4.501 4.501 0 0 1 2.34 7.896zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.816 2.8a4.5 4.5 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.393-.676zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.814-2.786a4.5 4.5 0 0 1 6.681 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08-4.778 2.758a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
      </svg>
    ),
  },
  {
    id: 'gemini',
    name: 'Gemini',
    tagline: 'by Google',
    color: 'bg-gradient-to-br from-[#1B5E9B] to-[#1565C0]',
    hoverColor: 'hover:brightness-110',
    borderColor: 'border-[#1565C0]/50',
    textColor: 'text-white',
    link: (prompt) => `https://gemini.google.com/app?q=${encodeURIComponent(prompt)}`,
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="white" opacity="0.15"/>
        <path d="M12 3.5C9.5 9.5 3.5 12 3.5 12S9.5 14.5 12 20.5C14.5 14.5 20.5 12 20.5 12S14.5 9.5 12 3.5z" fill="white"/>
      </svg>
    ),
  },
  {
    id: 'claude',
    name: 'Claude',
    tagline: 'by Anthropic',
    color: 'bg-[#CC785C]',
    hoverColor: 'hover:bg-[#b86b4f]',
    borderColor: 'border-[#CC785C]/50',
    textColor: 'text-white',
    link: (prompt) => `https://claude.ai/new?q=${encodeURIComponent(prompt)}`,
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm-1-5h2v2h-2zm0-8h2v6h-2z"/>
      </svg>
    ),
  },
  {
    id: 'perplexity',
    name: 'Perplexity',
    tagline: 'AI Search',
    color: 'bg-[#20B2AA]',
    hoverColor: 'hover:bg-[#1a9e97]',
    borderColor: 'border-[#20B2AA]/50',
    textColor: 'text-white',
    link: (prompt) => `https://www.perplexity.ai/?q=${encodeURIComponent(prompt)}`,
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 0 1 9-9" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
  },
];

/* ─────────────────────────────────────────────
   COMPACT VARIANT — for Homepage
   ───────────────────────────────────────────── */
export function AIAssistantCardCompact() {
  const ref = useScrollReveal<HTMLElement>();
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  const [copied, setCopied] = useState<string | null>(null);

  const handleClick = (provider: AIProvider) => {
    const prompt = buildPrompt(selectedLang.label, selectedLang.native);
    // Copy prompt to clipboard
    navigator.clipboard.writeText(prompt).then(() => {
      setCopied(provider.id);
      setTimeout(() => setCopied(null), 2500);
    });
    // Open the AI provider in a new tab
    window.open(provider.link(prompt), '_blank', 'noopener,noreferrer');
  };

  return (
    <section ref={ref} className="py-20 md:py-28 bg-navy relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-[#0d2545] pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-burnt/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-burnt/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-10">
          <span className="section-label justify-center mb-4 text-cream/60">
            <span className="w-10 h-[1px] bg-burnt/60" />
            AI Assistant
            <span className="w-10 h-[1px] bg-burnt/60" />
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-cream font-bold mb-3">
            Ask About MPCP in <span className="text-burnt">Your Language</span>
          </h2>
          <p className="font-body text-cream/60 text-sm md:text-base max-w-xl mx-auto">
            Get instant answers about admissions, courses &amp; facilities — powered by world's best AI, in your mother tongue.
          </p>
        </div>

        {/* Language Selector */}
        <div className="flex flex-col items-center mb-8">
          <p className="text-cream/50 text-xs uppercase tracking-widest font-body mb-3">
            Choose Your Language • अपनी भाषा चुनें
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {languages.map((lang) => (
              <button
                key={lang.id}
                onClick={() => setSelectedLang(lang)}
                className={`px-4 py-2 rounded-full text-sm font-body transition-all duration-300 border ${
                  selectedLang.id === lang.id
                    ? 'bg-burnt text-cream border-burnt shadow-[0_0_16px_rgba(199,90,30,0.4)]'
                    : 'bg-cream/5 text-cream/70 border-cream/10 hover:bg-cream/10 hover:text-cream'
                }`}
              >
                <span className="font-medium">{lang.label}</span>
                <span className={`ml-1.5 ${lang.script === 'urdu' ? 'font-hindi' : 'font-hindi'} ${
                  selectedLang.id === lang.id ? 'text-cream/90' : 'text-cream/50'
                }`}>
                  ({lang.native})
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* AI Provider Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {providers.map((provider) => (
            <button
              key={provider.id}
              onClick={() => handleClick(provider)}
              className={`group relative ${provider.color} ${provider.hoverColor} ${provider.textColor} border ${provider.borderColor} rounded-xl p-4 flex flex-col items-center gap-2.5 transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)] active:scale-[0.97]`}
              title={`Ask ${provider.name} in ${selectedLang.label} (${selectedLang.native})`}
            >
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                {provider.icon}
              </div>
              <div className="text-center">
                <p className="font-body font-semibold text-sm leading-none">{provider.name}</p>
                <p className="font-body text-[10px] opacity-60 mt-0.5">{provider.tagline}</p>
              </div>
              {/* Copied indicator */}
              {copied === provider.id && (
                <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-green-500 text-white text-[10px] px-2 py-0.5 rounded-full whitespace-nowrap">
                  ✓ Prompt Copied!
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Helper note */}
        <p className="text-center text-cream/35 text-[11px] font-body mt-5 leading-relaxed">
          Clicking opens the AI in a new tab &amp; copies a specialized prompt to your clipboard.<br />
          Paste the prompt if the AI doesn't auto-load it. Works 100% free — no login required for basic use.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   FULL VARIANT — for About Page
   ───────────────────────────────────────────── */
export function AIAssistantCardFull() {
  const ref = useScrollReveal<HTMLElement>();
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  const [copied, setCopied] = useState<string | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);

  const handleClick = (provider: AIProvider) => {
    const prompt = buildPrompt(selectedLang.label, selectedLang.native);
    navigator.clipboard.writeText(prompt).then(() => {
      setCopied(provider.id);
      setTimeout(() => setCopied(null), 2500);
    });
    window.open(provider.link(prompt), '_blank', 'noopener,noreferrer');
  };

  return (
    <section ref={ref} className="py-24 md:py-36 bg-cream relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-16 right-10 w-72 h-72 bg-burnt/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-16 left-10 w-72 h-72 bg-navy/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-label justify-center mb-4">
            Explore With AI
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-navy font-bold mb-4 leading-tight">
            Know More About MPCP —<br />
            <span className="text-burnt">In Your Own Language</span>
          </h2>
          <p className="font-body text-navy/60 text-base max-w-2xl mx-auto leading-relaxed">
            Ask any question about Maharana Pratap College of Pharmacy — admission process, fee structure, hostel, lab facilities, faculty — and get detailed answers in your native language, powered by world's most advanced AI assistants.
          </p>
        </div>

        {/* Language Selector — Large */}
        <div className="bg-navy/5 border border-navy/10 rounded-2xl p-6 md:p-8 mb-8">
          <p className="text-navy/50 text-xs uppercase tracking-widest font-body mb-5 text-center">
            Step 1 — Choose Your Language • अपनी भाषा चुनें
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {languages.map((lang) => (
              <button
                key={lang.id}
                onClick={() => setSelectedLang(lang)}
                className={`group flex flex-col items-center gap-1 px-5 py-3 rounded-xl border-2 transition-all duration-300 ${
                  selectedLang.id === lang.id
                    ? 'bg-navy text-cream border-navy shadow-lg scale-105'
                    : 'bg-white text-navy border-navy/10 hover:border-navy/30 hover:bg-navy/5'
                }`}
              >
                <span className={`font-hindi text-xl leading-none ${
                  selectedLang.id === lang.id ? 'text-burnt' : 'text-navy/70'
                }`}>
                  {lang.native}
                </span>
                <span className="font-body text-[11px] uppercase tracking-wider font-medium">
                  {lang.label}
                </span>
              </button>
            ))}
          </div>
          <p className="text-center text-navy/40 text-xs font-body mt-4">
            Selected: <strong className="text-burnt">{selectedLang.label} ({selectedLang.native})</strong>
          </p>
        </div>

        {/* AI Provider Grid — Full */}
        <div className="mb-6">
          <p className="text-navy/50 text-xs uppercase tracking-widest font-body mb-5 text-center">
            Step 2 — Choose Your AI Assistant
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {providers.map((provider) => (
              <button
                key={provider.id}
                onClick={() => handleClick(provider)}
                className={`group relative ${provider.color} ${provider.textColor} border ${provider.borderColor} rounded-2xl p-5 flex flex-col items-center gap-3 transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)] active:scale-[0.97]`}
              >
                {/* Glow ring on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ring-2 ring-white/20" />

                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  {provider.icon}
                </div>
                <div className="text-center">
                  <p className="font-body font-bold text-base leading-none">{provider.name}</p>
                  <p className="font-body text-[11px] opacity-60 mt-1">{provider.tagline}</p>
                </div>
                <div className="text-[10px] font-body opacity-50 border border-white/20 rounded-full px-2.5 py-0.5">
                  Ask in {selectedLang.label}
                </div>

                {/* Copied indicator */}
                {copied === provider.id && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-500 text-white text-[10px] px-3 py-1 rounded-full whitespace-nowrap shadow-lg">
                    ✓ Prompt Copied!
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Preview Prompt Toggle */}
        <div className="text-center mb-4">
          <button
            onClick={() => setShowPrompt(!showPrompt)}
            className="text-burnt text-sm font-body font-medium hover:underline transition-all"
          >
            {showPrompt ? '▲ Hide AI Prompt' : '▼ Preview the AI Prompt (for your language)'}
          </button>
        </div>

        {showPrompt && (
          <div className="bg-navy rounded-xl p-5 mb-6 border border-cream/10 overflow-x-auto">
            <p className="text-cream/40 text-[10px] uppercase tracking-widest font-body mb-2">
              System Prompt — Sent to AI ({selectedLang.label} / {selectedLang.native})
            </p>
            <pre className="text-cream/70 text-xs font-body leading-relaxed whitespace-pre-wrap">
              {buildPrompt(selectedLang.label, selectedLang.native)}
            </pre>
          </div>
        )}

        {/* Info note */}
        <div className="bg-burnt/8 border border-burnt/20 rounded-xl p-4 flex gap-3 items-start">
          <span className="text-burnt text-lg flex-shrink-0">ℹ️</span>
          <div>
            <p className="text-navy font-body text-sm font-semibold mb-1">How does this work?</p>
            <p className="text-navy/60 font-body text-sm leading-relaxed">
              When you click an AI button, we automatically open the AI in a new tab and copy a specialized system prompt to your clipboard. This prompt tells the AI to answer <strong>only</strong> using MPCP's verified information, in your selected language using its native script. Paste the prompt in the AI chat if it doesn't auto-load.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
