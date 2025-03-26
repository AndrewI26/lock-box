import Hero from "./_components/Hero";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-maven-pro)]">
      <main className="flex flex-col">
        <Hero />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
