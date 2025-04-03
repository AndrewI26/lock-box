import Demo from "./_components/Demo";
import Hero from "./_components/Hero";
import HowItWorks from "./_components/HowItWorks";
import Problem from "./_components/Problem";
import Shop from "./_components/Shop";
import Testimonials from "./_components/Testimonials";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-maven-pro)]">
      <main className="flex flex-col">
        <Hero />
    
        <Problem />
        <Demo />
        <HowItWorks />
        <Testimonials />
        <Shop />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
