import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Calendar, Download, Filter } from 'lucide-react';

const Analytics: React.FC = () => {
  const [timeRange, setTimeRange] = useState('Last 30 Days');

  const revenueData = [
    { name: 'Week 1', revenue: 12000 },
    { name: 'Week 2', revenue: 19000 },
    { name: 'Week 3', revenue: 15000 },
    { name: 'Week 4', revenue: 22000 },
  ];

  const bookingsData = [
    { name: 'Mon', bookings: 45 },
    { name: 'Tue', bookings: 52 },
    { name: 'Wed', bookings: 38 },
    { name: 'Thu', bookings: 65 },
    { name: 'Fri', bookings: 85 },
    { name: 'Sat', bookings: 90 },
    { name: 'Sun', bookings: 75 },
  ];

  const routeData = [
    { name: 'DXB - LHR', value: 400 },
    { name: 'JFK - LHR', value: 300 },
    { name: 'SIN - DXB', value: 300 },
    { name: 'CDG - JFK', value: 200 },
  ];

  const COLORS = ['#31326F', '#637AB9', '#4FB7B3', '#A8FBD3'];

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-nova-navy mb-2">Analytics & Reports</h1>
          <p className="text-gray-500">In-depth performance metrics and financial reports.</p>
        </div>
        <div className="flex gap-3">
          <div className="relative">
             <button className="bg-white border border-gray-200 text-gray-700 px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 shadow-sm whitespace-nowrap">
               <Calendar className="h-4 w-4 text-gray-400" /> {timeRange}
             </button>
          </div>
          <button className="bg-nova-teal hover:bg-nova-navy text-white px-4 py-2.5 rounded-xl font-bold shadow-md transition-colors flex items-center gap-2 whitespace-nowrap text-sm">
            <Download className="h-4 w-4" /> Export Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        
        {/* Revenue Trend */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
           <h2 className="text-lg font-bold text-nova-navy mb-6">Revenue Trend</h2>
           <div className="h-72 w-full">
             <ResponsiveContainer width="100%" height="100%">
               <LineChart data={revenueData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                 <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                 <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} dy={10} />
                 <YAxis axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} tickFormatter={(val) => `$${val/1000}k`} />
                 <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }} formatter={(val: number) => [`$${val.toLocaleString()}`, 'Revenue']} />
                 <Line type="monotone" dataKey="revenue" stroke="#31326F" strokeWidth={3} dot={{r: 4, fill: '#31326F', strokeWidth: 0}} activeDot={{r: 6}} />
               </LineChart>
             </ResponsiveContainer>
           </div>
        </div>

        {/* Daily Bookings */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
           <h2 className="text-lg font-bold text-nova-navy mb-6">Daily Bookings</h2>
           <div className="h-72 w-full">
             <ResponsiveContainer width="100%" height="100%">
               <BarChart data={bookingsData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                 <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                 <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} dy={10} />
                 <YAxis axisLine={false} tickLine={false} tick={{fill: '#9ca3af', fontSize: 12}} />
                 <Tooltip cursor={{fill: '#f9fafb'}} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }} />
                 <Bar dataKey="bookings" fill="#4FB7B3" radius={[4, 4, 0, 0]} />
               </BarChart>
             </ResponsiveContainer>
           </div>
        </div>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 lg:col-span-1">
            <h2 className="text-lg font-bold text-nova-navy mb-6">Top Routes by Volume</h2>
            <div className="h-64 w-full flex items-center justify-center relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={routeData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {routeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }} />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                 <span className="text-2xl font-black text-nova-navy">1.2k</span>
                 <span className="text-xs text-gray-500 font-medium">Total</span>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2">
               {routeData.map((entry, index) => (
                 <div key={index} className="flex items-center gap-2 text-xs text-gray-600">
                   <div className="w-3 h-3 rounded-full" style={{backgroundColor: COLORS[index % COLORS.length]}}></div>
                   {entry.name}
                 </div>
               ))}
            </div>
         </div>

         <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 lg:col-span-2">
            <h2 className="text-lg font-bold text-nova-navy mb-6">Recent Reports</h2>
            <div className="space-y-4">
              {[
                { name: 'Monthly Financial Summary - September', date: 'Oct 1, 2026', type: 'PDF' },
                { name: 'Q3 Passenger Demographics', date: 'Sep 30, 2026', type: 'CSV' },
                { name: 'Route Performance Analysis', date: 'Sep 25, 2026', type: 'Excel' },
                { name: 'System Usage Logs', date: 'Sep 24, 2026', type: 'CSV' },
                { name: 'Q3 Marketing ROI', date: 'Sep 20, 2026', type: 'PDF' },
              ].map((report, idx) => (
                 <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-nova-teal/5 transition-colors group cursor-pointer border border-transparent hover:border-nova-teal/20">
                   <div className="flex items-center gap-4">
                     <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xs ${report.type === 'PDF' ? 'bg-red-100 text-red-600' : report.type === 'CSV' ? 'bg-green-100 text-green-600' : 'bg-green-100 text-green-700'}`}>
                       {report.type}
                     </div>
                     <div>
                       <p className="font-bold text-nova-navy group-hover:text-nova-teal transition-colors text-sm">{report.name}</p>
                       <p className="text-xs text-gray-500 mt-0.5">Generated: {report.date}</p>
                     </div>
                   </div>
                   <button className="text-nova-blue bg-white px-3 py-1.5 rounded-lg text-xs font-bold border border-gray-200 hover:border-nova-blue transition-colors opacity-0 group-hover:opacity-100">
                     Download
                   </button>
                 </div>
              ))}
            </div>
         </div>
      </div>
    </div>
  );
};

export default Analytics;
