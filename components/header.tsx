"use client";

import { Link } from "next-view-transitions";
import { IconBrandGithub } from "@tabler/icons-react";

export function Header() {
  return (
    <header className="flex items-center justify-between mb-24 pt-12">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-zinc-900 dark:bg-zinc-100 rounded-sm" />
        <span className="font-bold tracking-tight uppercase text-xs">Zero Template</span>
      </div>
      <nav className="flex items-center gap-4 text-xs font-medium text-zinc-500">
        <Link href="https://github.com/leonardobetti/zero-template" className="hover:text-zinc-900 dark:hover:text-white transition-colors flex items-center gap-1">
          Github <IconBrandGithub size={14} />
        </Link>
      </nav>
    </header>
  );
}
