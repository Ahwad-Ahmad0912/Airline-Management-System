import React, { useState } from 'react';
import { Search, Shield, User, MoreVertical, Edit, Trash2, Mail } from 'lucide-react';

const ManageUsers: React.FC = () => {
  const [users] = useState([
    { id: 1, name: 'Jane Doe', email: 'jane.doe@example.com', role: 'Customer', status: 'Active', joined: '12 Jan, 2026', flights: 14 },
    { id: 2, name: 'Admin User', email: 'admin@novafly.com', role: 'Admin', status: 'Active', joined: '01 Jan, 2026', flights: 0 },
    { id: 3, name: 'John Smith', email: 'john@example.com', role: 'Customer', status: 'Suspended', joined: '15 Mar, 2026', flights: 2 },
    { id: 4, name: 'Alice Wong', email: 'alice@example.com', role: 'Customer', status: 'Active', joined: '22 Apr, 2026', flights: 8 },
    { id: 5, name: 'Bob Miller', email: 'bob@example.com', role: 'Customer', status: 'Active', joined: '05 May, 2026', flights: 1 },
  ]);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-nova-navy mb-2">Manage Users</h1>
        <p className="text-gray-500">Manage customer accounts and system administrators.</p>
      </div>

      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-6 flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative flex-1 md:w-80 w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input type="text" placeholder="Search users by name, email or role..." className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-nova-teal" />
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider border-b border-gray-200">
                <th className="px-6 py-4 font-semibold w-12"></th>
                <th className="px-6 py-4 font-semibold">User Details</th>
                <th className="px-6 py-4 font-semibold">Role</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold">Activity</th>
                <th className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50/50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="h-10 w-10 rounded-full bg-nova-teal/20 text-nova-teal flex items-center justify-center font-bold text-sm">
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-bold text-gray-900">{user.name}</p>
                    <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5"><Mail className="h-3 w-3" /> {user.email}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`flex items-center gap-1.5 w-max px-2.5 py-1 rounded-md text-xs font-bold ${user.role === 'Admin' ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-700'}`}>
                      {user.role === 'Admin' ? <Shield className="h-3.5 w-3.5" /> : <User className="h-3.5 w-3.5" />}
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-md text-xs font-bold ${user.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-gray-900 font-medium">{user.flights} Flights</p>
                    <p className="text-xs text-gray-500">Joined {user.joined}</p>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-1.5 text-nova-blue hover:bg-nova-blue/10 rounded-lg transition-colors"><Edit className="h-4 w-4" /></button>
                      {user.role !== 'Admin' && <button className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition-colors"><Trash2 className="h-4 w-4" /></button>}
                      <button className="p-1.5 text-gray-400 hover:bg-gray-100 rounded-lg transition-colors"><MoreVertical className="h-4 w-4" /></button>
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

export default ManageUsers;
