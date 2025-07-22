import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { ServicesSection } from "@/components/services";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import { ProjectsVideo } from "@/components/projects-video";

export default function Home() {
  return (
    <main className="font-geist tracking-[-0.04rem] relative radial">
      <div className="fixed top-0 left-0 right-0 h-16 z-50 pointer-events-none progressive-blur-top"></div>
      <div className="fixed bottom-0 left-0 right-0 h-16 z-50 pointer-events-none progressive-blur-bottom"></div>

      <Hero />

      <ProjectsVideo />

      {/* <Projects /> */}

      <ServicesSection />

      <CTA />

      <Footer />
    </main>
  );
}
