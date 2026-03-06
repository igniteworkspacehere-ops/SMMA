import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <SocialProof />
      <Problem />
      <Solution />
      <Services />
      <Portfolio />
      <Testimonials />
      <Process />
      <CTA />
    </main>
  );
}
