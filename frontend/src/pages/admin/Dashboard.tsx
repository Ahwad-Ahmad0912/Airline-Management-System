import React from 'react';
import { Plane, Ticket, DollarSign, TrendingUp, Users, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const AdminDashboard: React.FC = () => {
  const revenueData = [
    { name: 'Jan', value: 45000 },
    { name: 'Feb', value: 52000 },
    { name: 'Mar', value: 48000 },
    { name: 'Apr', value: 61000 },
    { name: 'May', value: 59000 },
    { name: 'Jun', value: 75000 },
    { name: 'Jul', value: 89000 },
  ];

  const occupancyData = [
    { name: 'Mon', economy: 85, business: 45 },
    { name: 'Tue', economy: 75, business: 35 },
    { name: 'Wed', economy: 90, business: 65 },
    { name: 'Thu', economy: 88, business: 55 },
    { name: 'Fri', economy: 98, business: 85 },
    { name: 'Sat', economy: 95, business: 75 },
    { name: 'Sun', economy: 82, business: 60 },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-nova-navy mb-2">Admin Dashboard</h1>
          <p className="text-gray-500">Overview of system metrics, flights, and revenue.</p>
        </div>
        <div className="bg-nova-teal/10 text-nova-teal px-4 py-2 rounded-lg font-bold text-sm">
          System Status: Online
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-all">
          <div className="flex justify-between items-start mb-4">
            <div className="bg-green-100 p-3 rounded-xl text-green-600"><DollarSign className="h-6 w-6" /></div>
            <div className="flex items-center gap-1 text-green-600 text-sm font-bold bg-green-50 px-2 py-1 rounded">
              <ArrowUpRight className="h-4 w-4" /> 12.5%
            </div>
          </div>
          <p className="text-gray-500 font-medium text-sm mb-1">Total Revenue</p>
          <h3 className="text-3xl font-black text-nova-navy">$428,500</h3>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-all">
          <div className="flex justify-between items-start mb-4">
            <div className="bg-nova-teal/20 p-3 rounded-xl text-nova-teal"><Plane className="h-6 w-6" /></div>
            <div className="flex items-center gap-1 text-green-600 text-sm font-bold bg-green-50 px-2 py-1 rounded">
              <ArrowUpRight className="h-4 w-4" /> 4.2%
            </div>
          </div>
          <p className="text-gray-500 font-medium text-sm mb-1">Active Flights</p>
          <h3 className="text-3xl font-black text-nova-navy">124</h3>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-all">
          <div className="flex justify-between items-start mb-4">
            <div className="bg-nova-blue/20 p-3 rounded-xl text-nova-blue"><Ticket className="h-6 w-6" /></div>
            <div className="flex items-center gap-1 text-red-500 text-sm font-bold bg-red-50 px-2 py-1 rounded">
              <ArrowDownRight className="h-4 w-4" /> 1.8%
            </div>
          </div>
          <p className="text-gray-500 font-medium text-sm mb-1">New Bookings (Today)</p>
          <h3 className="text-3xl font-black text-nova-navy">342</h3>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-all">
          <div className="flex justify-between items-start mb-4">
            <div className="bg-purple-100 p-3 rounded-xl text-purple-600"><Users className="h-6 w-6" /></div>
            <div className="flex items-center gap-1 text-green-600 text-sm font-bold bg-green-50 px-2 py-1 rounded">
              <ArrowUpRight className="h-4 w-4" /> 8.4%
            </div>
          </div>
          <p className="text-gray-500 font-medium text-sm mb-1">Active Users</p>
          <h3 className="text-3xl font-black text-nova-navy">14,890</h3>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        
        {/* Revenue Chart */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 lg:col-span-2">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-bold text-nova-navy">Revenue Overview</h2>
              <p className="text-sm text-gray-500">Monthly revenue for the current year</p>
            </div>
            <select className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 text-sm font-medium outline-none">
               <option>This Year</option>
               <option>Last Year</option>
            </select>
          </div>
          
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4FB7B3" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#4FB7B3" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} tickFormatter={(value) => `$${value/1000}k`} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                  formatter={(value: number) => [`$${value.toLocaleString()}`, 'Revenue']}
                />
                <Area type="monotone" dataKey="value" stroke="#4FB7B3" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Occupancy Chart */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 lg:col-span-1">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-nova-navy">Seat Occupancy</h2>
            <p className="text-sm text-gray-500">Average % occupied by class</p>
          </div>
          
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={occupancyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} />
                <Tooltip cursor={{fill: '#f9fafb'}} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }} />
                <Bar dataKey="economy" name="Economy" fill="#637AB9" radius={[4, 4, 0, 0]} />
                <Bar dataKey="business" name="Business" fill="#A8FBD3" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>

      {/* Recent Activity Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-xl font-bold text-nova-navy">Recent Flights</h2>
          <button className="text-nova-teal text-sm font-bold hover:text-nova-navy transition-colors">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
                <th className="px-6 py-4 font-medium">Flight No.</th>
                <th className="px-6 py-4 font-medium">Route</th>
                <th className="px-6 py-4 font-medium">Departure</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-bold text-nova-navy">NF-142</td>
                <td className="px-6 py-4 font-medium text-gray-700">DXB → LHR</td>
                <td className="px-6 py-4 text-gray-500">15 Oct, 11:00</td>
                <td className="px-6 py-4"><span className="bg-green-100 text-green-700 px-2.5 py-1 rounded-md text-xs font-bold">On Time</span></td>
                <td className="px-6 py-4 text-right"><button className="text-nova-blue font-semibold hover:underline">Manage</button></td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-bold text-nova-navy">NF-055</td>
                <td className="px-6 py-4 font-medium text-gray-700">CDG → DXB</td>
                <td className="px-6 py-4 text-gray-500">15 Oct, 14:30</td>
                <td className="px-6 py-4"><span className="bg-yellow-100 text-yellow-700 px-2.5 py-1 rounded-md text-xs font-bold">Delayed</span></td>
                <td className="px-6 py-4 text-right"><button className="text-nova-blue font-semibold hover:underline">Manage</button></td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-bold text-nova-navy">NF-310</td>
                <td className="px-6 py-4 font-medium text-gray-700">LHR → JFK</td>
                <td className="px-6 py-4 text-gray-500">15 Oct, 18:45</td>
                <td className="px-6 py-4"><span className="bg-green-100 text-green-700 px-2.5 py-1 rounded-md text-xs font-bold">On Time</span></td>
                <td className="px-6 py-4 text-right"><button className="text-nova-blue font-semibold hover:underline">Manage</button></td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-bold text-nova-navy">NF-892</td>
                <td className="px-6 py-4 font-medium text-gray-700">JFK → CDG</td>
                <td className="px-6 py-4 text-gray-500">16 Oct, 08:00</td>
                <td className="px-6 py-4"><span className="bg-gray-100 text-gray-700 px-2.5 py-1 rounded-md text-xs font-bold">Scheduled</span></td>
                <td className="px-6 py-4 text-right"><button className="text-nova-blue font-semibold hover:underline">Manage</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default AdminDashboard;
