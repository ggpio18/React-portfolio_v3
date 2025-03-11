"use client";

import { useState, useEffect } from "react";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import Loader from "@/components/Loader"; // Adjust the import path if necessary

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set a timeout to remove the preloader after 3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timeout
  }, []);

  return (
    <div>
      {loading ? (
        <div className="preloader-container">
          <Loader />
        </div>
      ) : (
        <main className="fade-in">
          <Header />
          <HeroSection />
          <ProjectsSection />
          <TapeSection />
          <TestimonialsSection />
          <AboutSection />
          <ContactSection />
          <Footer />
        </main>
      )}
    </div>
  );
}
