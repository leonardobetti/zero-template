"use client";

import { motion } from "motion/react";
import { Link } from "next-view-transitions";
import { IconCode } from "@tabler/icons-react";

export function Hero() {
  return (
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
  );
}
