import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Plane, Calendar, Users, Search, Filter, Clock, ArrowRight } from 'lucide-react';

const SearchFlights: React.FC = () => {
  const [searchParams] = useSearchParams();
  const originParam = searchParams.get('origin') || 'DXB';
  const destParam = searchParams.get('destination') || 'LHR';
  const dateParam = searchParams.get('date') || new Date().toISOString().split('T')[0];
  const passParam = searchParams.get('passengers') || '1';

  const [date, setDate] = useState(dateParam);

  // Mock flight data
  const mockFlights = [
    {
      id: 1,
      airline: 'NovaFly',
      flightNumber: 'NF-101',
      departureTime: '08:30',
      arrivalTime: '13:15',
      duration: '4h 45m',
      from: originParam.toUpperCase(),
      to: destParam.toUpperCase(),
      price: 450,
      type: 'Direct',
      seats: 12
    },
    {
      id: 2,
      airline: 'NovaFly',
      flightNumber: 'NF-142',
      departureTime: '11:00',
      arrivalTime: '16:00',
      duration: '5h 00m',
      from: originParam.toUpperCase(),
      to: destParam.toUpperCase(),
      price: 620,
      type: 'Direct',
      seats: 4
    },
    {
      id: 3,
      airline: 'NovaFly',
      flightNumber: 'NF-205',
      departureTime: '15:45',
      arrivalTime: '21:30',
      duration: '5h 45m',
      from: originParam.toUpperCase(),
      to: destParam.toUpperCase(),
      price: 380,
      type: '1 Stop',
      seats: 25
    },
    {
      id: 4,
      airline: 'NovaFly',
      flightNumber: 'NF-310',
      departureTime: '22:15',
      arrivalTime: '06:30 (+1)',
      duration: '8h 15m',
      from: originParam.toUpperCase(),
      to: destParam.toUpperCase(),
      price: 510,
      type: 'Direct',
      seats: 8
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      {/* Top Search Edit Bar */}
      <div className="bg-nova-navy py-6 sticky top-16 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <form className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex bg-white/10 rounded-lg p-2 flex-grow w-full">
              <div className="flex items-center gap-3 px-4 py-2 text-white border-r border-white/20 flex-1">
                <Plane className="h-5 w-5 text-nova-mint" />
                <div className="flex flex-col">
                  <span className="text-xs text-blue-200">From - To</span>
                  <span className="font-bold">{originParam.toUpperCase()} <ArrowRight className="h-3 w-3 inline mx-1"/> {destParam.toUpperCase()}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-3 px-4 py-2 text-white border-r border-white/20 flex-1 cursor-pointer hover:bg-white/5 transition-colors">
                <Calendar className="h-5 w-5 text-nova-mint" />
                <div className="flex flex-col w-full">
                  <span className="text-xs text-blue-200">Departure</span>
                  <input type="date" className="bg-transparent text-white font-bold outline-none cursor-pointer [color-scheme:dark]" value={date} onChange={(e) => setDate(e.target.value)} />
                </div>
              </div>
              
              <div className="flex items-center gap-3 px-4 py-2 text-white flex-1">
                <Users className="h-5 w-5 text-nova-mint" />
                <div className="flex flex-col">
                  <span className="text-xs text-blue-200">Passengers</span>
                  <span className="font-bold">{passParam} Adult(s)</span>
                </div>
              </div>
            </div>
            
            <button className="bg-nova-mint hover:bg-white text-nova-navy px-8 py-3 rounded-lg font-bold transition-colors shadow-lg flex items-center gap-2 w-full md:w-auto h-full whitespace-nowrap">
              <Search className="h-5 w-5" /> Modify
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 flex flex-col lg:flex-row gap-8">
        
        {/* Left Sidebar Filters */}
        <div className="w-full lg:w-1/4">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sticky top-48">
            <div className="flex items-center justify-between font-bold text-nova-navy border-b border-gray-100 pb-4 mb-4">
              <h3 className="flex items-center gap-2"><Filter className="h-5 w-5" /> Filters</h3>
              <button className="text-sm text-nova-teal font-medium">Reset</button>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold text-gray-800 mb-3 text-sm">Stops</h4>
              <div className="space-y-2">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 text-nova-teal rounded border-gray-300 focus:ring-nova-teal" defaultChecked />
                  <span className="text-gray-600">Direct (3)</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 text-nova-teal rounded border-gray-300 focus:ring-nova-teal" defaultChecked />
                  <span className="text-gray-600">1 Stop (1)</span>
                </label>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold text-gray-800 mb-3 text-sm">Departure Time</h4>
              <div className="space-y-2">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 text-nova-teal rounded border-gray-300 focus:ring-nova-teal" />
                  <span className="text-gray-600">Morning (06:00 - 11:59)</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 text-nova-teal rounded border-gray-300 focus:ring-nova-teal" />
                  <span className="text-gray-600">Afternoon (12:00 - 17:59)</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 text-nova-teal rounded border-gray-300 focus:ring-nova-teal" />
                  <span className="text-gray-600">Evening (18:00 - 23:59)</span>
                </label>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-3 text-sm">Price Range</h4>
              <input type="range" min="300" max="1000" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-nova-teal" />
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>$300</span>
                <span>$1000</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Flight Results */}
        <div className="w-full lg:w-3/4">
          <div className="flex justify-between items-end mb-6">
            <h2 className="text-2xl font-bold text-nova-navy">{mockFlights.length} Flights Found</h2>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>Sort by:</span>
              <select className="border-none bg-transparent font-semibold text-nova-navy focus:ring-0 cursor-pointer">
                <option>Recommended</option>
                <option>Price (Lowest)</option>
                <option>Duration (Shortest)</option>
                <option>Departure (Earliest)</option>
              </select>
            </div>
          </div>

          <div className="space-y-4">
            {mockFlights.map((flight) => (
              <div key={flight.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow group">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                  
                  {/* Flight Info Row */}
                  <div className="flex-1 w-full grid grid-cols-3 items-center gap-4 text-center md:text-left">
                    <div className="text-left">
                      <div className="text-3xl font-bold text-nova-navy">{flight.departureTime}</div>
                      <div className="text-sm font-semibold text-gray-800">{flight.from}</div>
                    </div>
                    
                    <div className="flex flex-col items-center justify-center relative px-2">
                      <span className="text-xs text-gray-500 mb-1 flex items-center gap-1"><Clock className="h-3 w-3" /> {flight.duration}</span>
                      <div className="w-full h-[2px] bg-gray-200 relative my-2">
                        <Plane className="h-5 w-5 text-nova-teal absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-1" />
                      </div>
                      <span className="text-xs font-medium text-nova-blue">{flight.type}</span>
                    </div>

                    <div className="text-right">
                      <div className="text-3xl font-bold text-nova-navy">{flight.arrivalTime}</div>
                      <div className="text-sm font-semibold text-gray-800">{flight.to}</div>
                    </div>
                  </div>

                  {/* Divider line for mobile */}
                  <div className="w-full h-px bg-gray-100 md:hidden"></div>

                  {/* Pricing and Action */}
                  <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center w-full md:w-auto md:min-w-[150px] border-l-0 md:border-l border-gray-100 md:pl-6">
                    <div className="text-left md:text-right mb-2">
                      <span className="text-gray-500 text-xs block">Starts from</span>
                      <span className="text-2xl font-bold text-nova-navy">${flight.price}</span>
                      <span className="text-red-500 text-xs font-medium block mt-1">{flight.seats} seats left</span>
                    </div>
                    <Link 
                      to={`/flight/${flight.id}`} 
                      className="bg-nova-teal hover:bg-nova-navy text-white px-6 py-2 rounded-lg font-bold transition-colors whitespace-nowrap"
                    >
                      Select
                    </Link>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default SearchFlights;
