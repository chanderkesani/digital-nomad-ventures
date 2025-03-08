
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Mail, Phone, Instagram } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="bg-gray-50 py-16">
      <div className="section-container">
        <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/lovable-uploads/391d5db0-c11e-4f47-a5f5-36f8f2dbe0ad.png" 
                  alt="Brajesh Yadav" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-36 h-36 rounded-full bg-brand-600 flex items-center justify-center text-white text-xl font-bold">
                3+ Years Experience
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-4">Digital Marketing Professional & Freelancer</h3>
            <p className="text-gray-700 mb-6">
              I'm Brajesh Yadav, a passionate digital marketing expert from Agra. I specialize in creating effective online 
              marketing strategies that deliver results. With expertise in various digital platforms, I help businesses 
              establish their online presence and grow their audience.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="card-hover">
                <CardContent className="flex items-center gap-3 p-4">
                  <MapPin className="h-5 w-5 text-brand-600" />
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium">Agra, India</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="card-hover">
                <CardContent className="flex items-center gap-3 p-4">
                  <Mail className="h-5 w-5 text-brand-600" />
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium">brajeshkumar39139@gmail.com</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="card-hover">
                <CardContent className="flex items-center gap-3 p-4">
                  <Phone className="h-5 w-5 text-brand-600" />
                  <div>
                    <p className="text-sm text-gray-500">Phone & WhatsApp</p>
                    <p className="font-medium">+916397702214</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="card-hover">
                <CardContent className="flex items-center gap-3 p-4">
                  <Instagram className="h-5 w-5 text-brand-600" />
                  <div>
                    <p className="text-sm text-gray-500">Instagram</p>
                    <p className="font-medium">@brajeshyadav6314</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
