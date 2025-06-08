// src/app/page.tsx
import CoreValueSection from "@/components/home/CoreValueSection";
import Hero from "@/components/home/Hero";
import ServiceSection from "@/components/home/ServiceSection";
import TeamSection from "@/components/home/TeamSection";
import Testimonials from "@/components/home/Testimonials";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import FadeInOnScroll from "@/components/FadeInOnScroll"; // Import our new component

export const metadata = {
  title: "Home | Ably Care",
  description: "Ably Care",
};

export default function Home() {
  return (
    <>
      <div className="w-full relative z-[2]">
        <main className="mx-auto p-2 w-full lg:max-w-7xl mt-20">
          {/* Hero section can use the initial fade-in or you can wrap it too if you prefer */}
          <Hero />
        </main>

        <FadeInOnScroll threshold={0.15} delay="delay-200" duration="duration-700" direction="up">
          <section className="mx-auto p-2 w-full lg:max-w-7xl mt-6">
            <ServiceSection />
          </section>
        </FadeInOnScroll>

        <FadeInOnScroll threshold={0.15} delay="delay-100" duration="duration-700" direction="up">
          <section className="mx-auto p-2 w-full lg:max-w-7xl mt-12">
            <CoreValueSection />
          </section>
        </FadeInOnScroll>

        <FadeInOnScroll threshold={0.15} delay="delay-200" duration="duration-700" direction="up">
          <section className="mx-auto p-2 w-full lg:max-w-7xl mt-12">
            <Testimonials />
          </section>
        </FadeInOnScroll>

        <FadeInOnScroll threshold={0.15} delay="delay-300" duration="duration-700" direction="up">
          <section className="mx-auto p-2 w-full lg:max-w-7xl mt-12">
            <WhyChooseSection />
          </section>
        </FadeInOnScroll>

        <FadeInOnScroll threshold={0.15} delay="delay-200" duration="duration-700" direction="up">
          <section className="mx-auto p-2 w-full lg:max-w-7xl mt-12">
            <TeamSection />
          </section>
        </FadeInOnScroll>
      </div>

      <div className="fixed top-0 left-0 w-full h-screen z-[-1] overflow-hidden">
        <ParticlesBackground />
      </div>
    </>
  );
}