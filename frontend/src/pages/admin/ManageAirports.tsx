import React, { useState } from 'react';
import { Plus, Search, MapPin, Edit, Trash2, MoreVertical } from 'lucide-react';

const ManageAirports: React.FC = () => {
  const [airports] = useState([
    { code: 'DXB', name: 'Dubai International Airport', city: 'Dubai', country: 'UAE', status: 'Active' },
    { code: 'LHR', name: 'Heathrow Airport', city: 'London', country: 'UK', status: 'Active' },
    { code: 'JFK', name: 'John F. Kennedy International', city: 'New York', country: 'USA', status: 'Active' },
    { code: 'CDG', name: 'Charles de Gaulle Airport', city: 'Paris', country: 'France', status: 'Active' },
    { code: 'SIN', name: 'Singapore Changi Airport', city: 'Singapore', country: 'Singapore', status: 'Maintenance' },
  ]);

  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-nova-navy mb-2">Manage Airports</h1>
          <p className="text-gray-500">Configure operational airports and destinations.</p>
        </div>
        <button 
          onClick={() => setShowAddModal(true)}
          className="bg-nova-teal hover:bg-nova-navy text-white px-5 py-2.5 rounded-xl font-bold shadow-md transition-colors flex items-center justify-center gap-2"
        >
          <Plus className="h-5 w-5" /> Add Airport
        </button>
      </div>

      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-6 flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative flex-1 md:w-80 w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input type="text" placeholder="Search by name, code, city or country..." className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-nova-teal" />
        </div>
        <div className="text-sm text-gray-500 font-medium">
          <span className="text-nova-navy font-bold">{airports.length}</span> destinations
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {airports.map((airport) => (
          <div key={airport.code} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow group relative">
            <div className="absolute top-4 right-4 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="p-1.5 text-nova-blue hover:bg-nova-blue/10 rounded-lg transition-colors"><Edit className="h-4 w-4" /></button>
              <button className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition-colors"><Trash2 className="h-4 w-4" /></button>
            </div>

            <div className="flex items-start gap-4 mb-4">
              <div className="bg-gray-50 p-3 rounded-xl border border-gray-100"><MapPin className="h-6 w-6 text-nova-navy" /></div>
              <div>
                <h3 className="font-bold text-xl text-nova-navy">{airport.code}</h3>
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm ${airport.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                  {airport.status}
                </span>
              </div>
            </div>
            
            <h4 className="font-bold text-gray-900 mb-1">{airport.name}</h4>
            <p className="text-sm text-gray-500">{airport.city}, {airport.country}</p>
          </div>
        ))}
      </div>

      {showAddModal && (
        <div className="fixed inset-0 bg-nova-navy/60 z-[60] flex items-center justify-center p-4 backdrop-blur-sm">
           <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                 <h3 className="font-bold text-nova-navy text-lg">Add New Airport</h3>
                 <button onClick={() => setShowAddModal(false)} className="text-gray-400 hover:text-gray-700">✖</button>
              </div>
              
              <div className="p-6">
                 <form className="space-y-4">
                   <div>
                     <label className="block text-sm font-medium text-gray-700 mb-1">Airport Code (IATA)</label>
                     <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-nova-teal" placeholder="e.g. LHR" maxLength={3} style={{textTransform: 'uppercase'}} />
                   </div>
                   <div>
                     <label className="block text-sm font-medium text-gray-700 mb-1">Airport Name</label>
                     <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-nova-teal" placeholder="e.g. Heathrow Airport" />
                   </div>
                   <div>
                     <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                     <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-nova-teal" placeholder="e.g. London" />
                   </div>
                   <div>
                     <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                     <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-nova-teal" placeholder="e.g. UK" />
                   </div>
                 </form>
              </div>

              <div className="px-6 py-4 border-t border-gray-100 flex justify-end gap-3 bg-gray-50">
                 <button onClick={() => setShowAddModal(false)} className="px-4 py-2 text-gray-600 font-medium hover:bg-gray-200 rounded-lg transition-colors">Cancel</button>
                 <button onClick={() => setShowAddModal(false)} className="px-6 py-2 bg-nova-navy hover:bg-nova-teal text-white font-bold rounded-lg transition-colors">Add</button>
              </div>
           </div>
        </div>
      )}
    </div>
  );
};

export default ManageAirports;
