import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Stack } from "@/components/stack";
import { QuickStart } from "@/components/quick-start";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-zinc-100 selection:bg-zinc-900 selection:text-white dark:selection:bg-white dark:selection:text-black font-sans">
      <div className="w-[clamp(20rem,90%,45.5rem)] mx-auto px-6">
        <Header />
        <main>
          <Hero />
          <Stack />
          <QuickStart />
        </main>
      </div>
      <Footer />
    </div>
  );
}
