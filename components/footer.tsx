"use client";

export function Footer() {
  return (
    <footer className="max-w-[45.5rem] mx-auto px-6 py-12 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-6">
      <p className="text-xs text-zinc-400">
        <a href="https://leonardobetti.co.uk/" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-white transition-colors underline decoration-zinc-200 underline-offset-4 font-semibold">Leonardo Betti</a> © 2026 Zero Template, made in a rainy sunday.
      </p>
    </footer>
  );
}
