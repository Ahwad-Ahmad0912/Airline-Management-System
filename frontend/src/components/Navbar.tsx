import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plane, Menu, X, User } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-nova-navy text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <Plane className="h-8 w-8 text-nova-mint group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              <span className="font-bold text-2xl tracking-tighter">NovaFly</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-nova-mint transition-colors">Home</Link>
            <Link to="/search" className="hover:text-nova-mint transition-colors">Search Flights</Link>
            <Link to="/login" className="text-white hover:text-nova-mint transition-colors">Login</Link>
            <Link to="/register" className="bg-nova-teal hover:bg-nova-blue text-white px-5 py-2 rounded-md font-medium transition-colors shadow-sm">
              Sign Up
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-nova-mint focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-nova-navy pb-4 px-4 shadow-inner">
          <div className="flex flex-col space-y-3 pt-2">
            <Link to="/" className="hover:text-nova-mint transition-colors block py-2" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/search" className="hover:text-nova-mint transition-colors block py-2" onClick={() => setIsOpen(false)}>Search Flights</Link>
            <Link to="/login" className="hover:text-nova-mint transition-colors block py-2 border-t border-nova-blue pt-4" onClick={() => setIsOpen(false)}>Login</Link>
            <Link to="/register" className="bg-nova-teal text-center hover:bg-nova-blue text-white px-4 py-2 rounded-md font-medium transition-colors" onClick={() => setIsOpen(false)}>
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
