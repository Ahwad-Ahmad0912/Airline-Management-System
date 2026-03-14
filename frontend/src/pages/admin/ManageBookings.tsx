import React, { useState } from 'react';
import { Search, Filter, Eye, Edit, CheckCircle, XCircle } from 'lucide-react';

const ManageBookings: React.FC = () => {
  const [bookings] = useState([
    { id: 'BKG-784920', customer: 'Jane Doe', email: 'jane@example.com', flight: 'NF-142', route: 'DXB → LHR', date: '15 Oct, 2026', amount: '$1240', status: 'Confirmed' },
    { id: 'BKG-512833', customer: 'John Smith', email: 'john@example.com', flight: 'NF-310', route: 'LHR → JFK', date: '28 Nov, 2026', amount: '$510', status: 'Pending' },
    { id: 'BKG-109284', customer: 'Alice Wong', email: 'alice@example.com', flight: 'NF-055', route: 'CDG → DXB', date: '02 Jan, 2026', amount: '$480', status: 'Completed' },
    { id: 'BKG-098177', customer: 'Bob Miller', email: 'bob@example.com', flight: 'NF-202', route: 'JFK → MIA', date: '14 Dec, 2025', amount: '$320', status: 'Cancelled' },
    { id: 'BKG-654321', customer: 'Emma Davis', email: 'emma@example.com', flight: 'NF-142', route: 'DXB → LHR', date: '15 Oct, 2026', amount: '$620', status: 'Confirmed' },
  ]);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Confirmed': return <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">Confirmed</span>;
      case 'Pending': return <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-bold">Pending</span>;
      case 'Completed': return <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-bold">Completed</span>;
      case 'Cancelled': return <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold">Cancelled</span>;
      default: return null;
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-nova-navy mb-2">Manage Bookings</h1>
        <p className="text-gray-500">View and manage all customer flight reservations.</p>
      </div>

      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-6 flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input type="text" placeholder="Search by Booking ID, Customer or Email..." className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-nova-teal" />
          </div>
          <button className="bg-gray-50 border border-gray-200 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2 text-sm font-medium">
            <Filter className="h-4 w-4" /> Filter
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider border-b border-gray-200">
                <th className="px-6 py-4 font-semibold">Booking ID</th>
                <th className="px-6 py-4 font-semibold">Customer</th>
                <th className="px-6 py-4 font-semibold">Flight Info</th>
                <th className="px-6 py-4 font-semibold">Amount</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {bookings.map((b) => (
                <tr key={b.id} className="hover:bg-gray-50/50 transition-colors group">
                  <td className="px-6 py-4 font-mono font-bold text-nova-navy">{b.id}</td>
                  <td className="px-6 py-4">
                    <p className="font-bold text-gray-900">{b.customer}</p>
                    <p className="text-xs text-gray-500">{b.email}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-bold text-gray-900">{b.flight} <span className="text-gray-400 font-normal">| {b.route}</span></p>
                    <p className="text-xs text-gray-500">{b.date}</p>
                  </td>
                  <td className="px-6 py-4 font-bold text-gray-900">{b.amount}</td>
                  <td className="px-6 py-4">{getStatusBadge(b.status)}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-1.5 text-nova-teal hover:bg-nova-teal/10 rounded-lg transition-colors" title="View"><Eye className="h-4 w-4" /></button>
                      <button className="p-1.5 text-nova-blue hover:bg-nova-blue/10 rounded-lg transition-colors" title="Edit"><Edit className="h-4 w-4" /></button>
                      {b.status === 'Pending' && <button className="p-1.5 text-green-500 hover:bg-green-50 rounded-lg transition-colors" title="Confirm"><CheckCircle className="h-4 w-4" /></button>}
                      {b.status !== 'Cancelled' && <button className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition-colors" title="Cancel"><XCircle className="h-4 w-4" /></button>}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageBookings;
