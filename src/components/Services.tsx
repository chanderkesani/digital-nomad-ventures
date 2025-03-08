
import { 
  Megaphone, 
  LineChart, 
  ShoppingBag, 
  Search, 
  Smartphone, 
  Mail 
} from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Social Media Marketing",
      description: "Strategic social media campaigns to grow your brand presence and engagement across all major platforms.",
      icon: <Megaphone className="h-10 w-10 text-brand-600" />
    },
    {
      title: "SEO Optimization",
      description: "Boost your website's visibility in search engines with data-driven SEO strategies and keyword research.",
      icon: <Search className="h-10 w-10 text-brand-600" />
    },
    {
      title: "E-commerce Marketing",
      description: "Specialized marketing solutions for online stores to increase traffic, conversion rates, and sales.",
      icon: <ShoppingBag className="h-10 w-10 text-brand-600" />
    },
    {
      title: "Content Marketing",
      description: "Create compelling content that resonates with your audience and drives engagement and conversions.",
      icon: <Mail className="h-10 w-10 text-brand-600" />
    },
    {
      title: "Analytics & Reporting",
      description: "In-depth analysis and reports of your marketing campaigns to track performance and ROI.",
      icon: <LineChart className="h-10 w-10 text-brand-600" />
    },
    {
      title: "Mobile Marketing",
      description: "Targeted mobile marketing strategies to reach customers on their smartphones and tablets.",
      icon: <Smartphone className="h-10 w-10 text-brand-600" />
    }
  ];

  return (
    <section id="services" className="py-16">
      <div className="section-container">
        <h2 className="section-title">My <span className="gradient-text">Services</span></h2>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden card-hover">
              <CardHeader className="pb-2">
                <div className="mb-4">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
