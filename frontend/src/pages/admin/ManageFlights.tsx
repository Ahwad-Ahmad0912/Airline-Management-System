import React, { useState } from 'react';
import { Plus, Search, Filter, Edit, Trash2, MoreVertical, Plane } from 'lucide-react';

const ManageFlights: React.FC = () => {
  // Mock flights data
  const [flights] = useState([
    { id: 1, flightNumber: 'NF-142', from: 'DXB', to: 'LHR', departure: '2026-10-15 11:00', arrival: '2026-10-15 16:00', price: 620, status: 'Scheduled', seats: 120 },
    { id: 2, flightNumber: 'NF-055', from: 'CDG', to: 'DXB', departure: '2026-10-15 14:30', arrival: '2026-10-15 23:30', price: 450, status: 'Delayed', seats: 180 },
    { id: 3, flightNumber: 'NF-310', from: 'LHR', to: 'JFK', departure: '2026-10-15 18:45', arrival: '2026-10-15 22:30', price: 510, status: 'Scheduled', seats: 85 },
    { id: 4, flightNumber: 'NF-892', from: 'JFK', to: 'CDG', departure: '2026-10-16 08:00', arrival: '2026-10-16 21:00', price: 580, status: 'Scheduled', seats: 210 },
    { id: 5, flightNumber: 'NF-101', from: 'DXB', to: 'SIN', departure: '2026-10-16 02:30', arrival: '2026-10-16 14:00', price: 420, status: 'Boarding', seats: 45 },
  ]);

  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-nova-navy mb-2">Manage Flights</h1>
          <p className="text-gray-500">Create, update, and monitor all flight schedules.</p>
        </div>
        <button 
          onClick={() => setShowAddModal(true)}
          className="bg-nova-teal hover:bg-nova-navy text-white px-5 py-2.5 rounded-xl font-bold shadow-md transition-colors flex items-center justify-center gap-2"
        >
          <Plus className="h-5 w-5" /> Add New Flight
        </button>
      </div>

      {/* Toolbar */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-6 flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input type="text" placeholder="Search by flight number, origin, or destination..." className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-nova-teal" />
          </div>
          <button className="bg-gray-50 border border-gray-200 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2 text-sm font-medium">
            <Filter className="h-4 w-4" /> Filter
          </button>
        </div>
        
        <div className="text-sm text-gray-500 font-medium">
          Showing <span className="text-nova-navy font-bold">{flights.length}</span> flights
        </div>
      </div>

      {/* Flights Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider border-b border-gray-200">
                <th className="px-6 py-4 font-semibold">Flight Info</th>
                <th className="px-6 py-4 font-semibold">Route</th>
                <th className="px-6 py-4 font-semibold">Schedule</th>
                <th className="px-6 py-4 font-semibold">Seats / Price</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {flights.map((flight) => (
                <tr key={flight.id} className="hover:bg-gray-50/50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                       <div className="bg-nova-teal/10 p-2 rounded-lg text-nova-teal"><Plane className="h-5 w-5" /></div>
                       <div>
                         <p className="font-bold text-nova-navy tracking-wide">{flight.flightNumber}</p>
                         <p className="text-xs text-gray-500">Boeing 787</p>
                       </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-gray-900">{flight.from}</span>
                      <span className="text-gray-400 text-xs">→</span>
                      <span className="font-bold text-gray-900">{flight.to}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-gray-900 font-medium">{flight.departure.split(' ')[1]} - {flight.arrival.split(' ')[1]}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{flight.departure.split(' ')[0]}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-gray-900 font-bold">${flight.price}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{flight.seats} Available</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold
                      ${flight.status === 'Scheduled' ? 'bg-gray-100 text-gray-700' : 
                        flight.status === 'Delayed' ? 'bg-yellow-100 text-yellow-700' :
                        flight.status === 'Boarding' ? 'bg-nova-mint/30 text-nova-teal' : 'bg-green-100 text-green-700'
                      }
                    `}>
                      {flight.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 text-nova-blue hover:bg-nova-blue/10 rounded-lg transition-colors"><Edit className="h-4 w-4" /></button>
                      <button className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"><Trash2 className="h-4 w-4" /></button>
                      <button className="p-2 text-gray-400 hover:bg-gray-100 rounded-lg transition-colors"><MoreVertical className="h-4 w-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination mock */}
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500">
           <div>Showing 1 to 5 of 24 entries</div>
           <div className="flex gap-1">
             <button className="px-3 py-1 border border-gray-200 rounded hover:bg-white transition-colors">Prev</button>
             <button className="px-3 py-1 border border-nova-teal bg-nova-teal text-white rounded font-medium">1</button>
             <button className="px-3 py-1 border border-gray-200 rounded hover:bg-white transition-colors">2</button>
             <button className="px-3 py-1 border border-gray-200 rounded hover:bg-white transition-colors">3</button>
             <button className="px-3 py-1 border border-gray-200 rounded hover:bg-white transition-colors">Next</button>
           </div>
        </div>
      </div>

      {/* Add Flight Modal Mock */}
      {showAddModal && (
        <div className="fixed inset-0 bg-nova-navy/60 z-[60] flex items-center justify-center p-4 backdrop-blur-sm">
           <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                 <h3 className="font-bold text-nova-navy text-lg">Add New Flight</h3>
                 <button onClick={() => setShowAddModal(false)} className="text-gray-400 hover:text-gray-700">✖</button>
              </div>
              
              <div className="p-6">
                 <form className="space-y-4">
                   <div className="grid grid-cols-2 gap-4">
                     <div>
                       <label className="block text-sm font-medium text-gray-700 mb-1">Flight Number</label>
                       <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-nova-teal" placeholder="e.g. NF-100" />
                     </div>
                     <div>
                       <label className="block text-sm font-medium text-gray-700 mb-1">Aircraft</label>
                       <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-nova-teal">
                         <option>Boeing 787</option>
                         <option>Airbus A350</option>
                         <option>Boeing 737 Max</option>
                       </select>
                     </div>
                   </div>

                   <div className="grid grid-cols-2 gap-4">
                     <div>
                       <label className="block text-sm font-medium text-gray-700 mb-1">Departure Airport</label>
                       <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-nova-teal">
                         <option>DXB - Dubai</option>
                         <option>LHR - London</option>
                         <option>JFK - New York</option>
                       </select>
                     </div>
                     <div>
                       <label className="block text-sm font-medium text-gray-700 mb-1">Arrival Airport</label>
                       <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-nova-teal">
                         <option>LHR - London</option>
                         <option>DXB - Dubai</option>
                         <option>JFK - New York</option>
                       </select>
                     </div>
                   </div>

                   <div className="grid grid-cols-2 gap-4">
                     <div>
                       <label className="block text-sm font-medium text-gray-700 mb-1">Departure Time</label>
                       <input type="datetime-local" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-nova-teal" />
                     </div>
                     <div>
                       <label className="block text-sm font-medium text-gray-700 mb-1">Arrival Time</label>
                       <input type="datetime-local" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-nova-teal" />
                     </div>
                   </div>

                   <div className="grid grid-cols-2 gap-4">
                     <div>
                       <label className="block text-sm font-medium text-gray-700 mb-1">Base Price ($)</label>
                       <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-nova-teal" placeholder="500" />
                     </div>
                     <div>
                       <label className="block text-sm font-medium text-gray-700 mb-1">Total Seats</label>
                       <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-nova-teal" placeholder="180" />
                     </div>
                   </div>
                 </form>
              </div>

              <div className="px-6 py-4 border-t border-gray-100 flex justify-end gap-3 bg-gray-50">
                 <button onClick={() => setShowAddModal(false)} className="px-4 py-2 text-gray-600 font-medium hover:bg-gray-200 rounded-lg transition-colors">Cancel</button>
                 <button onClick={() => setShowAddModal(false)} className="px-6 py-2 bg-nova-navy hover:bg-nova-teal text-white font-bold rounded-lg transition-colors">Save Flight</button>
              </div>
           </div>
        </div>
      )}

    </div>
  );
};

export default ManageFlights;
