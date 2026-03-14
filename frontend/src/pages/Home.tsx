import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PlaneTakeoff, PlaneLanding, Calendar, Users, Search, ArrowRight, ShieldCheck, Clock, MapPin } from 'lucide-react';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useState({
    origin: '',
    destination: '',
    date: '',
    passengers: 1
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/search?origin=${searchParams.origin}&destination=${searchParams.destination}&date=${searchParams.date}&passengers=${searchParams.passengers}`);
  };

  const destinations = [
    { title: 'Dubai', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop', price: '$499' },
    { title: 'Tokyo', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1994&auto=format&fit=crop', price: '$799' },
    { title: 'Paris', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop', price: '$599' },
    { title: 'New York', image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070&auto=format&fit=crop', price: '$399' }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-nova-navy text-white h-[600px] flex items-center">
        <div className="absolute inset-0 z-0 opacity-40">
          <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop" alt="Airplane in sky" className="w-full h-full object-cover" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-10">
          <div className="text-center md:text-left mb-12">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
              Elevate Your Journey<br/>
              <span className="text-nova-mint">Beyond the Horizon.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl">
              Experience world-class service, seamless booking, and unmatched comfort with NovaFly Airways.
            </p>
          </div>

          {/* Search Widget */}
          <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 max-w-5xl text-gray-900 border-t-4 border-nova-teal mx-auto md:mx-0 translate-y-24 md:translate-y-16">
            <div className="flex border-b border-gray-200 mb-6 pb-2">
              <button className="text-nova-teal font-semibold border-b-2 border-nova-teal pb-2 px-4">Flight Search</button>
              <button className="text-gray-500 font-medium hover:text-nova-navy pb-2 px-4 transition-colors">Manage Booking</button>
              <button className="text-gray-500 font-medium hover:text-nova-navy pb-2 px-4 transition-colors">Flight Status</button>
            </div>
            
            <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
                <div className="relative">
                  <PlaneTakeoff className="absolute left-3 top-3 h-5 w-5 text-nova-blue" />
                  <input 
                    type="text" 
                    placeholder="Origin City or Airport" 
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nova-teal focus:border-nova-teal outline-none transition-all"
                    value={searchParams.origin}
                    onChange={(e) => setSearchParams({...searchParams, origin: e.target.value})}
                    required
                  />
                </div>
              </div>
              
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
                <div className="relative">
                  <PlaneLanding className="absolute left-3 top-3 h-5 w-5 text-nova-blue" />
                  <input 
                    type="text" 
                    placeholder="Destination" 
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nova-teal focus:border-nova-teal outline-none transition-all"
                    value={searchParams.destination}
                    onChange={(e) => setSearchParams({...searchParams, destination: e.target.value})}
                    required
                  />
                </div>
              </div>
              
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">Depart</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-5 w-5 text-nova-blue" />
                  <input 
                    type="date" 
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nova-teal focus:border-nova-teal outline-none transition-all text-gray-700"
                    value={searchParams.date}
                    onChange={(e) => setSearchParams({...searchParams, date: e.target.value})}
                    required
                  />
                </div>
              </div>
              
              <div className="flex items-end flex-col md:flex-row gap-4">
                <div className="w-full">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Passengers</label>
                  <div className="relative">
                    <Users className="absolute left-3 top-3 h-5 w-5 text-nova-blue" />
                    <select 
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nova-teal focus:border-nova-teal outline-none transition-all bg-white"
                      value={searchParams.passengers}
                      onChange={(e) => setSearchParams({...searchParams, passengers: parseInt(e.target.value)})}
                    >
                      {[1,2,3,4,5,6].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Passenger' : 'Passengers'}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <button type="submit" className="w-full md:w-auto bg-nova-teal hover:bg-nova-navy text-white px-8 py-2 rounded-lg font-bold shadow-md transition-all flex items-center justify-center gap-2 h-10 mt-6 md:mt-0 group whitespace-nowrap">
                  <Search className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Spacing for absolute positioned search box */}
      <div className="h-40 md:h-32 bg-gray-50"></div>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-nova-navy mb-4">Why Choose NovaFly?</h2>
            <div className="w-24 h-1 bg-nova-mint mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center p-6 rounded-2xl bg-gray-50 hover:shadow-lg transition-all border border-gray-100 group">
              <div className="bg-nova-blue/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-nova-teal/20 transition-colors">
                <ShieldCheck className="h-10 w-10 text-nova-blue group-hover:text-nova-teal transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-nova-navy mb-3">Safe & Secure</h3>
              <p className="text-gray-600">Your safety is our top priority. We adhere to the strictest aviation safety standards globally.</p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-gray-50 hover:shadow-lg transition-all border border-gray-100 group">
              <div className="bg-nova-blue/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-nova-teal/20 transition-colors">
                <Clock className="h-10 w-10 text-nova-blue group-hover:text-nova-teal transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-nova-navy mb-3">On-Time Performance</h3>
              <p className="text-gray-600">We value your time. Our industry-leading punctuality ensures you arrive right on schedule.</p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-gray-50 hover:shadow-lg transition-all border border-gray-100 group">
              <div className="bg-nova-blue/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-nova-teal/20 transition-colors">
                <MapPin className="h-10 w-10 text-nova-blue group-hover:text-nova-teal transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-nova-navy mb-3">Global Connectivity</h3>
              <p className="text-gray-600">Connecting you to over 150 destinations across 6 continents with our modern fleet.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-nova-navy mb-2">Popular Destinations</h2>
              <p className="text-gray-500">Explore our most frequently flown routes this month</p>
            </div>
            <Link to="/search" className="text-nova-teal font-medium hover:text-nova-navy flex items-center gap-1 transition-colors">
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((dest, index) => (
              <div key={index} className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all relative cursor-pointer block h-80">
                <img src={dest.image} alt={dest.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-nova-navy/90 via-nova-navy/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <h3 className="text-2xl font-bold text-white mb-1">{dest.title}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-sm">Economy from</span>
                    <span className="text-nova-mint font-bold text-xl">{dest.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter CTA */}
      <section className="py-20 bg-nova-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           <PlaneTakeoff className="w-96 h-96 absolute -right-10 -bottom-20 transform -rotate-12" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Never Miss a Deal</h2>
          <p className="text-blue-100 mb-8 text-lg">Subscribe to our newsletter and receive exclusive offers, travel inspiration, and updates directly to your inbox.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <input type="email" placeholder="Enter your email address" className="px-6 py-3 rounded-full flex-grow text-gray-900 focus:outline-none focus:ring-2 focus:ring-nova-mint" />
            <button className="bg-nova-mint hover:bg-white text-nova-navy font-bold px-8 py-3 rounded-full transition-colors shadow-lg shadow-nova-mint/20">
              Subscribe Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
