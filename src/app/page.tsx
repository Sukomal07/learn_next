import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestiMonialCards from "@/components/TestiMonialCards";

export default function Home() {
  return (
    <main className="min-h-screen no-scrollbar bg-black/[0.96] antialiased flex flex-col">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <TestiMonialCards />
    </main>
  );
}
