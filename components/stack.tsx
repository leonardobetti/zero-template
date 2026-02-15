"use client";

import { Link } from "next-view-transitions";
import { IconArrowUpRight } from "@tabler/icons-react";

const STACK = [
  { name: "Next.js 15", category: "Framework", link: "https://nextjs.org" },
  { name: "Tailwind CSS 4", category: "Styling", link: "https://tailwindcss.com" },
  { name: "Motion", category: "Animation", link: "https://motion.dev" },
  { name: "Tabler Icons", category: "Iconography", link: "https://tabler.io/icons" },
  { name: "Fluid Tailwind", category: "Layout", link: "https://fluid-tailwindcss.vercel.app/" }
];

export function Stack() {
  return (
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
  );
}
