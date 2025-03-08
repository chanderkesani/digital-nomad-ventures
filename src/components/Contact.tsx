
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Mail, Phone, Instagram } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Show success toast
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactMethods = [
    {
      icon: <Phone className="h-10 w-10 text-brand-600" />,
      title: "Call or WhatsApp",
      value: "+916397702214",
      action: "tel:+916397702214"
    },
    {
      icon: <Mail className="h-10 w-10 text-brand-600" />,
      title: "Email",
      value: "brajeshkumar39139@gmail.com",
      action: "mailto:brajeshkumar39139@gmail.com"
    },
    {
      icon: <Instagram className="h-10 w-10 text-brand-600" />,
      title: "Instagram",
      value: "@brajeshyadav6314",
      action: "https://instagram.com/brajeshyadav6314"
    },
    {
      icon: <MapPin className="h-10 w-10 text-brand-600" />,
      title: "Location",
      value: "Agra, India",
      action: "https://maps.google.com/?q=Agra,India"
    }
  ];

  return (
    <section id="contact" className="bg-gray-50 py-16">
      <div className="section-container">
        <h2 className="section-title">Get in <span className="gradient-text">Touch</span></h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
            <p className="text-gray-700 mb-8">
              Have a project in mind or need help with your digital marketing strategy? 
              Fill out the form or contact me directly using one of the methods below.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactMethods.map((method, index) => (
                <Card key={index} className="card-hover">
                  <CardContent className="p-6">
                    <a 
                      href={method.action} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex flex-col items-center text-center"
                    >
                      {method.icon}
                      <h4 className="font-medium mt-4 mb-1">{method.title}</h4>
                      <p className="text-gray-600 text-sm">{method.value}</p>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can I help you?"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      rows={5}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-brand-600 hover:bg-brand-700">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
