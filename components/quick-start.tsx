"use client";

import { IconTerminal } from "@tabler/icons-react";

const QUICK_START = [
  { name: "Clone repository", command: "git clone https://github.com/leonardobetti/zero-template.git" },
  { name: "Install dependencies", command: "pnpm install" },
  { name: "Start development", command: "pnpm dev" }
];

export function QuickStart() {
  return (
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
  );
}
