"use client";

import { motion } from "motion/react";
import { Link } from "next-view-transitions";
import { 
  IconArrowUpRight, 
  IconBrandGithub, 
  IconCode,
  IconTerminal
} from "@tabler/icons-react";

const STACK = [
  { name: "Next.js 15", category: "Framework", link: "https://nextjs.org" },
  { name: "Tailwind CSS 4", category: "Styling", link: "https://tailwindcss.com" },
  { name: "Motion", category: "Animation", link: "https://motion.dev" },
  { name: "Tabler Icons", category: "Iconography", link: "https://tabler.io/icons" },
  { name: "Fluid Tailwind", category: "Layout", link: "https://fluid-tailwindcss.com" }
];

const QUICK_START = [
  { name: "Clone repository", command: "git clone https://github.com/leonardobetti/zero-template.git" },
  { name: "Install dependencies", command: "pnpm install" },
  { name: "Start development", command: "pnpm dev" }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-zinc-100 selection:bg-zinc-900 selection:text-white dark:selection:bg-white dark:selection:text-black font-sans">
      {/* Centralized Layout Container: 728px = 45.5rem */}
      <main className="max-w-[45.5rem] mx-auto px-6 ~py-12/24">
        
        {/* Header/Nav */}
        <header className="flex items-center justify-between mb-24">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-zinc-900 dark:bg-zinc-100 rounded-sm" />
            <span className="font-bold tracking-tight uppercase text-xs">Zero Template</span>
          </div>
          <div className="flex items-center gap-4 text-xs font-medium text-zinc-500">
            <Link href="https://github.com/leonardobetti/zero-template" className="hover:text-zinc-900 dark:hover:text-white transition-colors flex items-center gap-1">
              Github <IconBrandGithub size={14} />
            </Link>
          </div>
        </header>

        {/* Hero Section */}
        <section className="~mb-32/48">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="~text-4xl/6xl font-bold tracking-tight leading-[1.1] mb-8"
          >
            Foundation for your next <span className="text-zinc-400 dark:text-zinc-500 italic">digital product.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-zinc-500 ~text-lg/xl leading-relaxed max-w-2xl text-balance"
          >
            Zero Template is an opinionated starting point for modern Next.js applications, 
            engineered for visual excellence, high performance, and rapid development.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-12 flex flex-wrap items-center gap-4"
          >
            <Link 
              href="https://github.com/leonardobetti/zero-template" 
              className="px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-full font-medium hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 text-sm"
            >
              <IconCode size={18} />
              Clone Template
            </Link>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 text-[10px] font-medium bg-zinc-50 dark:bg-zinc-950 uppercase tracking-widest text-zinc-500">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Turbopack Ready
            </div>
          </motion.div>
        </section>

        {/* Tech Stack List */}
        <section className="~mb-32/48 pt-12">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-zinc-200 dark:border-zinc-800">
            <h2 className="text-xl font-bold">The Stack</h2>
            <Link href="https://github.com/leonardobetti/zero-template/blob/main/package.json" className="group flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors font-medium uppercase tracking-widest">
              Manifest <IconArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
          <div className="flex flex-col">
            {STACK.map((item) => (
              <a 
                key={item.name} 
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-6 border-b border-zinc-100 dark:border-zinc-900 last:border-0 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 px-4 -mx-4 transition-colors"
              >
                <div>
                  <h3 className="text-lg font-bold group-hover:translate-x-1 transition-transform duration-300">{item.name}</h3>
                  <p className="text-zinc-400 text-xs mt-1 uppercase tracking-tighter">{item.category}</p>
                </div>
                <IconArrowUpRight className="text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors" size={20} />
              </a>
            ))}
          </div>
        </section>

        {/* Quick Start Section - List Style */}
        <section className="~mb-24/32 pt-12">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-zinc-200 dark:border-zinc-800">
            <h2 className="text-xl font-bold">Quick Start</h2>
            <div className="text-xs text-zinc-500 font-medium uppercase tracking-widest flex items-center gap-1">
              Terminal <IconTerminal size={12} />
            </div>
          </div>
          <div className="flex flex-col">
            {QUICK_START.map((item) => (
              <div 
                key={item.name} 
                className="group flex items-center justify-between py-6 border-b border-zinc-100 dark:border-zinc-900 last:border-0 px-4 -mx-4 cursor-default"
              >
                <div className="w-full">
                  <h3 className="text-lg font-bold">{item.name}</h3>
                  <div className="mt-2 font-mono text-xs text-zinc-500 bg-zinc-50 dark:bg-zinc-950 p-3 rounded border border-zinc-100 dark:border-zinc-900 overflow-x-auto">
                    {item.command}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      <footer className="max-w-[45.5rem] mx-auto px-6 py-12 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-xs text-zinc-400">
          <a href="https://leonardobetti.co.uk/" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-white transition-colors underline decoration-zinc-200 underline-offset-4">Leonardo Betti</a> © 2026 Zero Template, made in a rainy sunday.
        </p>
      </footer>
    </div>
  );
}
