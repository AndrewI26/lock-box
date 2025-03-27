import Hero from "./_components/Hero";
import Problem from "./_components/Problem";
import Shop from "./_components/Shop";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-maven-pro)]">
      <main className="flex flex-col">
        <Hero />
        <Problem />
        <Shop />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
