
import { Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="section-container py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Brajesh Yadav</h3>
            <p className="text-gray-400">Digital Marketing & Freelancing</p>
          </div>
          
          <div className="flex gap-6">
            <a 
              href="https://instagram.com/brajeshyadav6314" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-brand-400 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a 
              href="mailto:brajeshkumar39139@gmail.com" 
              className="hover:text-brand-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a 
              href="tel:+916397702214" 
              className="hover:text-brand-400 transition-colors"
              aria-label="Phone"
            >
              <Phone className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} Brajesh Yadav. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
