
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { ScrollArea } from "@/components/ui/scroll-area";

const Index = () => {
  useEffect(() => {
    document.title = "Brajesh Yadav | Digital Marketing & Freelancer";
  }, []);

  return (
    <ScrollArea className="h-screen">
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Contact />
        <Footer />
      </main>
    </ScrollArea>
  );
};

export default Index;
