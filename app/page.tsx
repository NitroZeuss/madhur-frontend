import React, { useState } from 'react';
import Hero from "@/components/hero";
import MenuSection from "@/components/menu-section";
import AboutSection from "@/components/about-section";
import ServicesSection from "@/components/services-section";
import TestimonialsSection from "@/components/testimonials-section";
import ContactSection from "@/components/contact-section";
import ServerWakeUp from "@/components/server-wakeup";

export default function Home() {
  const [serverReady, setServerReady] = useState(false);

  // Trigger the state to true once the server is ready
  const handleServerReady = () => {
    setServerReady(true);
  };

  // Display the ServerWakeUp component until the server is ready
  if (!serverReady) {
    return (
      <ServerWakeUp
        backendUrl="https://madhur.onrender.com/def/menu-items/"
        onReady={handleServerReady}
      />
    );
  }

  // Once the server is ready, show the rest of the page
  return (
    <main className="min-h-screen">
      <Hero />
      <MenuSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
