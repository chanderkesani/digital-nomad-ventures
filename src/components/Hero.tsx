
import { ArrowDownCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-hero-pattern bg-cover bg-center bg-fixed">
      <div className="section-container text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="animate-fadeIn mb-6">
            <span className="block">Hello, I'm</span>
            <span className="block text-brand-400">Brajesh Yadav</span>
          </h1>
          <p className="animate-slideUp text-xl md:text-2xl mb-8 text-gray-200">
            Digital Marketing Expert & Freelancer
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-brand-500 hover:bg-brand-600 text-white">
              <a href="#services">My Services</a>
            </Button>
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about">
          <ArrowDownCircle className="h-10 w-10 text-white" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
