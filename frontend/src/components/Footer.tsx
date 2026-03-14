import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-nova-navy text-gray-300 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1 border-r-0 md:border-r border-nova-blue pr-4">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Plane className="h-6 w-6 text-nova-mint" />
              <span className="font-bold text-2xl tracking-tighter text-white">NovaFly</span>
            </Link>
            <p className="text-sm mb-4">Elevate Your Journey Beyond the Horizon.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-nova-mint transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-nova-mint transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-nova-mint transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-nova-mint transition-colors"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/search" className="hover:text-nova-mint transition-colors">Search Flights</Link></li>
              <li><Link to="/destinations" className="hover:text-nova-mint transition-colors">Destinations</Link></li>
              <li><Link to="/status" className="hover:text-nova-mint transition-colors">Flight Status</Link></li>
              <li><Link to="/deals" className="hover:text-nova-mint transition-colors">Special Deals</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">About Us</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-nova-mint transition-colors">Our Story</Link></li>
              <li><Link to="/careers" className="hover:text-nova-mint transition-colors">Careers</Link></li>
              <li><Link to="/press" className="hover:text-nova-mint transition-colors">Press</Link></li>
              <li><Link to="/sustainability" className="hover:text-nova-mint transition-colors">Sustainability</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Help</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/faq" className="hover:text-nova-mint transition-colors">FAQ</Link></li>
              <li><Link to="/support" className="hover:text-nova-mint transition-colors">Customer Support</Link></li>
              <li><Link to="/baggage" className="hover:text-nova-mint transition-colors">Baggage Policy</Link></li>
              <li><Link to="/terms" className="hover:text-nova-mint transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-nova-blue pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; {new Date().getFullYear()} NovaFly Airways. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-nova-mint transition-colors">Privacy Policy</Link>
            <Link to="/cookies" className="hover:text-nova-mint transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
