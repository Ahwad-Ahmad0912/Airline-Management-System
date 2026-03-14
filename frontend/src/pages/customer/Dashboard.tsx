import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, Calendar, Clock, ArrowRight, MapPin, Award, Ticket, Luggage } from 'lucide-react';

const CustomerDashboard: React.FC = () => {
  // Mock upcoming flight
  const upcomingFlight = {
    id: 1,
    flightNumber: 'NF-142',
    departureTime: '11:00 AM',
    departureDate: '15 Oct, 2026',
    arrivalTime: '04:00 PM',
    arrivalDate: '15 Oct, 2026',
    from: 'DXB',
    to: 'LHR',
    status: 'Scheduled',
    seat: '12A',
    gate: 'D14'
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-nova-navy mb-2">Welcome back, Jane! 👋</h1>
        <p className="text-gray-500">Here is an overview of your upcoming travels and account activity.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow cursor-pointer">
           <div className="bg-nova-teal/10 p-4 rounded-xl text-nova-teal"><Award className="h-7 w-7" /></div>
           <div>
             <p className="text-gray-500 text-sm font-medium mb-1">Total Miles</p>
             <h3 className="text-2xl font-bold text-nova-navy">12,450</h3>
           </div>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow cursor-pointer">
           <div className="bg-nova-blue/10 p-4 rounded-xl text-nova-blue"><Ticket className="h-7 w-7" /></div>
           <div>
             <p className="text-gray-500 text-sm font-medium mb-1">Upcoming Flights</p>
             <h3 className="text-2xl font-bold text-nova-navy">2</h3>
           </div>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow cursor-pointer">
           <div className="bg-purple-500/10 p-4 rounded-xl text-purple-600"><Plane className="h-7 w-7" /></div>
           <div>
             <p className="text-gray-500 text-sm font-medium mb-1">Flights Taken</p>
             <h3 className="text-2xl font-bold text-nova-navy">14</h3>
           </div>
        </div>
        <div className="bg-nova-navy text-white rounded-2xl p-6 shadow-sm flex flex-col justify-center items-start lg:items-center text-left lg:text-center group cursor-pointer overflow-hidden relative">
           <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform"><MapPin className="h-24 w-24" /></div>
           <h3 className="text-xl font-bold mb-1 relative z-10">Ready for a trip?</h3>
           <Link to="/search" className="text-nova-mint text-sm font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform relative z-10">
             Book now <ArrowRight className="h-4 w-4" />
           </Link>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column - Upcoming Flight */}
        <div className="lg:col-span-2">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-nova-navy">Next Flight</h2>
            <Link to="/customer/bookings" className="text-nova-teal text-sm font-medium hover:text-nova-navy transition-colors">View all</Link>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
            <div className="bg-gradient-to-r from-nova-navy to-nova-blue px-6 py-4 flex justify-between items-center text-white">
              <div className="font-bold tracking-wide">BOARDING PASS</div>
              <div className="bg-white/20 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
                {upcomingFlight.status}
              </div>
            </div>
            
            <div className="p-6 sm:p-8">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <div className="text-5xl sm:text-6xl font-black text-nova-navy tracking-tighter leading-none">{upcomingFlight.from}</div>
                  <div className="text-gray-500 text-sm font-medium mt-2">Dubai Intl.</div>
                </div>
                
                <div className="flex-1 px-4 sm:px-10 flex flex-col items-center">
                  <div className="w-full h-[2px] bg-gray-200 relative">
                     <Plane className="h-6 w-6 text-nova-teal absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-1" />
                  </div>
                  <div className="text-xs text-nova-blue font-bold mt-3">FLIGHT {upcomingFlight.flightNumber}</div>
                </div>

                <div className="text-right">
                  <div className="text-5xl sm:text-6xl font-black text-nova-navy tracking-tighter leading-none">{upcomingFlight.to}</div>
                  <div className="text-gray-500 text-sm font-medium mt-2">London LHR</div>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-4 bg-gray-50 rounded-xl mb-6">
                <div>
                  <div className="text-xs text-gray-500 uppercase font-semibold mb-1">Date</div>
                  <div className="font-bold text-gray-900">{upcomingFlight.departureDate}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase font-semibold mb-1">Boarding Time</div>
                  <div className="font-bold text-nova-teal text-lg">10:15 AM</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase font-semibold mb-1">Gate</div>
                  <div className="font-bold text-gray-900 text-lg">{upcomingFlight.gate}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase font-semibold mb-1">Seat</div>
                  <div className="font-bold text-gray-900 text-lg">{upcomingFlight.seat}</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                 <Link to="/customer/ticket" className="flex-1 bg-nova-navy hover:bg-nova-teal text-white py-3 rounded-xl font-bold transition-colors shadow-lg shadow-nova-navy/10 flex items-center justify-center gap-2">
                   <Ticket className="h-5 w-5" /> View Ticket
                 </Link>
                 <button className="flex-1 bg-white border border-gray-300 hover:border-nova-teal hover:text-nova-teal text-gray-700 py-3 rounded-xl font-bold transition-colors flex items-center justify-center gap-2">
                   <Luggage className="h-5 w-5" /> Manage Baggage
                 </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Recent Activity & Offers */}
        <div className="lg:col-span-1 space-y-8">
          
          {/* Quick Actions */}
          <div>
            <h2 className="text-xl font-bold text-nova-navy mb-6">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-4">
               <button className="bg-white border border-gray-100 shadow-sm p-4 rounded-xl flex flex-col items-center justify-center gap-3 hover:border-nova-teal hover:shadow-md transition-all group">
                 <div className="bg-gray-50 p-3 rounded-full group-hover:bg-nova-teal/10 transition-colors"><Plane className="h-6 w-6 text-gray-600 group-hover:text-nova-teal transition-colors" /></div>
                 <span className="text-sm font-semibold text-gray-700">Check-in</span>
               </button>
               <button className="bg-white border border-gray-100 shadow-sm p-4 rounded-xl flex flex-col items-center justify-center gap-3 hover:border-nova-teal hover:shadow-md transition-all group">
                 <div className="bg-gray-50 p-3 rounded-full group-hover:bg-nova-teal/10 transition-colors"><MapPin className="h-6 w-6 text-gray-600 group-hover:text-nova-teal transition-colors" /></div>
                 <span className="text-sm font-semibold text-gray-700">Flight Status</span>
               </button>
            </div>
          </div>

          {/* Offers */}
          <div>
            <h2 className="text-xl font-bold text-nova-navy mb-6">Exclusive Offers</h2>
            <div className="bg-nova-mint/20 rounded-2xl p-6 border border-nova-mint/50 relative overflow-hidden">
              <div className="absolute -right-6 -bottom-6 text-nova-teal opacity-20"><Award className="h-32 w-32" /></div>
              <h3 className="text-lg font-bold text-nova-navy mb-2 relative z-10">Get 5,000 Bonus Miles</h3>
              <p className="text-sm text-gray-700 mb-4 relative z-10">Refer a friend to NovaFly and earn bonus miles when they take their first flight.</p>
              <button className="bg-nova-teal hover:bg-nova-navy text-white px-5 py-2 rounded-lg text-sm font-bold transition-colors relative z-10 shadow-md shadow-nova-teal/20">
                Refer Now
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
