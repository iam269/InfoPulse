import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">InfoPluse</h3>
            <p className="text-sm text-primary-foreground/80">
              Informații de încredere, la zi, pentru tine.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Categorii</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#politic" className="hover:text-accent transition-colors">Politic</a></li>
              <li><a href="#economie" className="hover:text-accent transition-colors">Economie</a></li>
              <li><a href="#sport" className="hover:text-accent transition-colors">Sport</a></li>
              <li><a href="#tech" className="hover:text-accent transition-colors">Tech</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Despre</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><Link to="/developer" className="hover:text-accent transition-colors">Dezvoltator</Link></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Cod Sursă</a></li>
              <li><Link to="/terms" className="hover:text-accent transition-colors">Termeni și condiții</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Rețele sociale</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/80">
          <p>&copy; {currentYear} InfoPulse. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  );
};
