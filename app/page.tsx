"use client";

import { motion } from "motion/react";
import { Link } from "next-view-transitions";
import { 
  IconArrowUpRight, 
  IconBrandGithub, 
  IconBrandX, 
  IconBrandLinkedin,
  IconMail
} from "@tabler/icons-react";

const PROJECTS = [
  {
    title: "Producer.AI",
    category: "Brand / Product",
    link: "#",
  },
  {
    title: "APMC (A Parent Media Co. Inc.)",
    category: "Brand / Product",
    link: "#",
  },
  {
    title: "LilyLink",
    category: "Brand / Product",
    link: "#",
  }
];

const WRITING = [
  {
    date: "Nov 18, 2025",
    title: "You shouldn't become a designer.",
    description: "A few reasons why being a “designer” in any sense is a terrible idea in 2024.",
    link: "#",
  },
  {
    date: "Oct 18, 2020",
    title: "We need to seek differing opinions",
    description: "The more we become divided, the more we need to make space to understand one another.",
    link: "#",
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-zinc-100 selection:bg-zinc-900 selection:text-white dark:selection:bg-white dark:selection:text-black">
      <main className="max-w-screen-xl mx-auto px-6 py-12 md:py-24">
        
        {/* Hero Section */}
        <section className="mb-24 md:mb-32">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] max-w-4xl"
          >
            I’m a designer working in <span className="text-zinc-400 dark:text-zinc-500">brand & product.</span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="mt-8 flex items-center gap-4"
          >
            <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 text-xs font-medium bg-zinc-50 dark:bg-zinc-950">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Available for Freelance
            </div>
            <span className="text-zinc-400 text-xs">Until Q2, 2026</span>
          </motion.div>
        </section>

        {/* At a Glance / Stats */}
        <section className="grid grid-cols-1 md:grid-cols-3 border-y border-zinc-200 dark:border-zinc-800 mb-24 md:mb-32">
          <div className="p-8 md:border-r border-zinc-200 dark:border-zinc-800 flex flex-col gap-4">
            <h3 className="text-xs uppercase tracking-widest text-zinc-400 font-semibold">Experience</h3>
            <p className="text-3xl font-bold">20+</p>
            <p className="text-sm text-zinc-500">Years working with clients across all industries.</p>
          </div>
          <div className="p-8 md:border-r border-zinc-200 dark:border-zinc-800 flex flex-col gap-4">
            <h3 className="text-xs uppercase tracking-widest text-zinc-400 font-semibold">Focus</h3>
            <p className="text-3xl font-bold">0 — 1</p>
            <p className="text-sm text-zinc-500">Specializing in early-stage product environments.</p>
          </div>
          <div className="p-8 flex flex-col gap-4">
            <h3 className="text-xs uppercase tracking-widest text-zinc-400 font-semibold">Impact</h3>
            <p className="text-3xl font-bold">50+</p>
            <p className="text-sm text-zinc-500">Products launched and brands established.</p>
          </div>
        </section>

        {/* Recent Work */}
        <section className="mb-24 md:mb-32">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-zinc-200 dark:border-zinc-800">
            <h2 className="text-xl font-bold">Recent Work</h2>
            <Link href="#" className="group flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
              View All <IconArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
          <div className="flex flex-col">
            {PROJECTS.map((project, i) => (
              <Link 
                key={project.title} 
                href={project.link}
                className="group flex items-center justify-between py-8 border-b border-zinc-200 dark:border-zinc-800 last:border-0 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 px-4 -mx-4 transition-colors"
              >
                <div>
                  <h3 className="text-2xl font-bold group-hover:translate-x-2 transition-transform duration-300">{project.title}</h3>
                  <p className="text-zinc-500 text-sm mt-1">{project.category}</p>
                </div>
                <IconArrowUpRight className="text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors" size={24} />
              </Link>
            ))}
          </div>
        </section>

        {/* Writing */}
        <section className="mb-24 md:mb-32">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-zinc-200 dark:border-zinc-800">
            <h2 className="text-xl font-bold">Writing</h2>
            <Link href="#" className="group flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
              View All <IconArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-200 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 overflow-hidden">
            {WRITING.map((post) => (
              <Link key={post.title} href={post.link} className="bg-white dark:bg-black p-8 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors flex flex-col gap-4">
                <span className="text-xs text-zinc-400 font-medium tracking-wider">{post.date}</span>
                <h3 className="text-xl font-bold leading-tight">{post.title}</h3>
                <p className="text-sm text-zinc-500 line-clamp-2">{post.description}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="py-24 border-t border-zinc-200 dark:border-zinc-800">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Get in touch</h2>
            <p className="text-lg text-zinc-500 mb-12 leading-relaxed">
              Want to work on something together? Just want to chat? Hit me up.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="mailto:hello@example.com" className="flex items-center gap-2 px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-full font-medium hover:scale-[1.02] active:scale-[0.98] transition-all">
                <IconMail size={20} />
                Send a Message
              </a>
              <div className="flex items-center gap-2">
                <a href="#" className="p-3 border border-zinc-200 dark:border-zinc-800 rounded-full hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
                  <IconBrandX size={20} />
                </a>
                <a href="#" className="p-3 border border-zinc-200 dark:border-zinc-800 rounded-full hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
                  <IconBrandLinkedin size={20} />
                </a>
                <a href="#" className="p-3 border border-zinc-200 dark:border-zinc-800 rounded-full hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
                  <IconBrandGithub size={20} />
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer className="max-w-screen-xl mx-auto px-6 py-12 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm text-zinc-400">© 2018—2026 Eric Sin. All rights reserved.</p>
        <div className="flex items-center gap-6 text-sm font-medium text-zinc-500">
          <Link href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">About</Link>
          <Link href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Work</Link>
          <Link href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Playground</Link>
          <Link href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Writing</Link>
        </div>
      </footer>
    </div>
  );
}
