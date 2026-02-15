"use client";

import { motion } from "motion/react";
import { 
  IconCircleNumber0, 
  IconTypography, 
  IconComponents, 
  IconWind, 
  IconBrandFramerMotion, 
  IconTargetArrow,
  IconBrandGithub
} from "@tabler/icons-react";

const PRINCIPLES = [
  {
    title: "Fluid Typography",
    description: "Responsive scaling across all viewports using Tailwind Fluid plugin.",
    icon: IconTypography,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "ShadCN UI",
    description: "Built on Radix UI for accessible, unstyled components you can truly own.",
    icon: IconComponents,
    color: "from-purple-500 to-indigo-500"
  },
  {
    title: "Motion Excellence",
    description: "Integrated with Motion for fluid, high-performance animations.",
    icon: IconBrandFramerMotion,
    color: "from-pink-500 to-rose-500"
  },
  {
    title: "Native Performance",
    description: "Self-hosted variable fonts and Next.js optimization for zero-latency load.",
    icon: IconTargetArrow,
    color: "from-orange-500 to-amber-500"
  },
  {
    title: "Tabler Icons",
    description: "A comprehensive library of 5300+ pixel-perfect icons included by default.",
    icon: IconWind,
    color: "from-emerald-500 to-teal-500"
  }
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-[#030303] overflow-hidden selection:bg-indigo-100 selection:text-indigo-900">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-500/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-rose-500/10 blur-[120px]" />
      </div>

      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-24 lg:pt-48 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/50 mb-8">
            <IconCircleNumber0 size={16} className="text-indigo-500" />
            <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400 uppercase tracking-widest">Version 1.0.0</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 dark:text-white mb-8">
            Zero <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500">Template</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-12 leading-relaxed">
            The opinionated starting point for modern web applications. 
            Engineered for visual excellence, performance, and developer experience.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-24">
            <button className="px-8 py-3 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold transition-all hover:scale-105 active:scale-95">
              Get Started
            </button>
            <button className="flex items-center gap-2 px-8 py-3 rounded-full bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 font-semibold border border-zinc-200 dark:border-zinc-800 transition-all hover:bg-zinc-50 dark:hover:bg-zinc-800">
              <IconBrandGithub size={20} />
              Repository
            </button>
          </div>
        </motion.div>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRINCIPLES.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-100 dark:border-zinc-800/50 hover:border-indigo-500/20 transition-all cursor-default"
            >
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${principle.color} flex items-center justify-center text-white mb-6 shadow-lg shadow-indigo-500/10`}>
                <principle.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">
                {principle.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {principle.description}
              </p>
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col justify-center p-8 rounded-3xl border-2 border-dashed border-zinc-200 dark:border-zinc-800 items-center text-center opacity-60 hover:opacity-100 transition-opacity"
          >
            <p className="text-zinc-500 italic">Ready for your next big idea.</p>
          </motion.div>
        </section>
      </main>
      
      <footer className="relative z-10 border-t border-zinc-100 dark:border-zinc-900 py-12 text-center">
        <p className="text-sm text-zinc-500">
          Built with Zero Template • 2026
        </p>
      </footer>
    </div>
  );
}
