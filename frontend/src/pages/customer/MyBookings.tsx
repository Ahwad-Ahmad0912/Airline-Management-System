import React from 'react';
import { Plane, Calendar, ExternalLink, Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

const MyBookings: React.FC = () => {
  // Mock bookings
  const bookings = [
    {
      id: 'BKG-784920',
      flightNumber: 'NF-142',
      from: 'DXB',
      to: 'LHR',
      date: '15 Oct, 2026',
      status: 'Confirmed',
      passengers: 2,
      price: '$1240',
      type: 'upcoming'
    },
    {
      id: 'BKG-512833',
      flightNumber: 'NF-310',
      from: 'LHR',
      to: 'JFK',
      date: '28 Nov, 2026',
      status: 'Pending Payment',
      passengers: 1,
      price: '$510',
      type: 'upcoming'
    },
    {
      id: 'BKG-109284',
      flightNumber: 'NF-055',
      from: 'CDG',
      to: 'DXB',
      date: '02 Jan, 2026',
      status: 'Completed',
      passengers: 1,
      price: '$480',
      type: 'past'
    },
    {
      id: 'BKG-098177',
      flightNumber: 'NF-202',
      from: 'JFK',
      to: 'MIA',
      date: '14 Dec, 2025',
      status: 'Cancelled',
      passengers: 2,
      price: '$320',
      type: 'past'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Confirmed':
        return <span className="px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700">Confirmed</span>;
      case 'Pending Payment':
        return <span className="px-3 py-1 rounded-full text-xs font-bold bg-yellow-100 text-yellow-700">Pending</span>;
      case 'Completed':
        return <span className="px-3 py-1 rounded-full text-xs font-bold bg-gray-100 text-gray-700">Completed</span>;
      case 'Cancelled':
        return <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-100 text-red-700">Cancelled</span>;
      default:
        return <span className="px-3 py-1 rounded-full text-xs font-bold bg-gray-100 text-gray-700">{status}</span>;
    }
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-nova-navy mb-2">My Bookings</h1>
          <p className="text-gray-500">Manage your upcoming flights and view past trips.</p>
        </div>
        <Link to="/search" className="bg-nova-teal hover:bg-nova-navy text-white px-6 py-2.5 rounded-xl font-bold shadow-md transition-colors whitespace-nowrap self-start sm:self-auto text-sm">
          Book New Flight
        </Link>
      </div>

      {/* Filters and Search */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex gap-2 w-full md:w-auto">
          <button className="bg-nova-navy text-white px-4 py-2 rounded-lg text-sm font-semibold flex-1 md:flex-none">Upcoming (2)</button>
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold transition-colors flex-1 md:flex-none">Past (2)</button>
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold transition-colors flex-1 md:flex-none">All (4)</button>
        </div>
        
        <div className="flex gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input type="text" placeholder="Search booking ID..." className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-nova-teal" />
          </div>
          <button className="bg-gray-50 border border-gray-200 text-gray-600 p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <Filter className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Bookings List */}
      <div className="space-y-4">
        {bookings.map((booking, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 md:p-6 hover:shadow-md transition-shadow group flex flex-col lg:flex-row gap-6 items-center justify-between">
            
            {/* Flight Route & Details */}
            <div className="flex items-center gap-6 lg:gap-10 w-full lg:w-auto">
              {/* Route */}
              <div className="flex items-center justify-between min-w-[150px] md:min-w-[200px]">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-black text-nova-navy">{booking.from}</div>
                </div>
                <div className="flex-1 px-4 flex flex-col items-center">
                  <Plane className="h-5 w-5 text-gray-400" />
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-black text-nova-navy">{booking.to}</div>
                </div>
              </div>

              {/* Info */}
              <div className="hidden md:block border-l border-gray-200 pl-6 lg:pl-10 space-y-1">
                <div className="text-sm font-bold text-gray-900">{booking.date}</div>
                <div className="text-sm text-gray-500">Flight {booking.flightNumber} • {booking.passengers} Passenger(s)</div>
                <div className="text-xs text-gray-400 font-mono mt-1">ID: {booking.id}</div>
              </div>
            </div>

            {/* Mobile Info (visible only on small screens) */}
            <div className="w-full md:hidden flex justify-between items-center border-t border-b border-gray-100 py-3">
               <div>
                  <div className="text-sm font-bold text-gray-900">{booking.date}</div>
                  <div className="text-xs text-gray-500">Flight {booking.flightNumber}</div>
               </div>
               <div className="text-right">
                  <div className="text-xs text-gray-400 font-mono">ID: {booking.id}</div>
                  <div className="text-xs text-gray-500">{booking.passengers} Pax</div>
               </div>
            </div>

            {/* Status & Action */}
            <div className="flex items-center justify-between w-full lg:w-auto gap-6 lg:gap-10">
              <div className="flex flex-col items-start lg:items-end gap-2">
                {getStatusBadge(booking.status)}
                <span className="font-bold text-nova-navy pl-1">{booking.price}</span>
              </div>
              
              <Link to={`/customer/ticket`} className="bg-gray-50 hover:bg-nova-teal hover:text-white text-nova-navy border border-gray-200 hover:border-nova-teal p-3 rounded-xl transition-all h-min">
                <ExternalLink className="h-5 w-5" />
              </Link>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default MyBookings;
