import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, ShieldCheck, Key, Save } from 'lucide-react';

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const [userData, setUserData] = useState({
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'jane.doe@example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Aviation Way',
    city: 'New York',
    country: 'USA',
    postalCode: '10001'
  });

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-nova-navy mb-2">My Profile</h1>
        <p className="text-gray-500">Manage your personal information, security settings, and preferences.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Left Sidebar - Navigation */}
        <div className="w-full lg:w-1/4">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden sticky top-24">
            
            {/* User Info Overview */}
            <div className="p-6 border-b border-gray-100 flex flex-col items-center text-center">
               <div className="h-24 w-24 rounded-full bg-nova-teal flex items-center justify-center font-bold text-4xl text-white shadow-inner mb-4 relative">
                 JD
                 <button className="absolute bottom-0 right-0 bg-nova-navy text-white p-1.5 rounded-full border-2 border-white shadow-sm hover:bg-nova-blue transition-colors">
                   <User className="h-4 w-4" />
                 </button>
               </div>
               <h2 className="text-xl font-bold text-nova-navy">{userData.firstName} {userData.lastName}</h2>
               <p className="text-sm text-gray-500 font-medium">SkyMember Core</p>
               <span className="bg-nova-mint/20 text-nova-teal text-xs font-bold px-3 py-1 rounded-full mt-3">Verified Member</span>
            </div>

            {/* Navigation Tabs */}
            <nav className="p-2 space-y-1">
              <button 
                onClick={() => setActiveTab('personal')}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-all ${activeTab === 'personal' ? 'bg-nova-teal/10 text-nova-teal' : 'text-gray-600 hover:bg-gray-50'}`}
              >
                <User className={`h-5 w-5 ${activeTab === 'personal' ? 'text-nova-teal' : 'text-gray-400'}`} />
                Personal Info
              </button>
              <button 
                onClick={() => setActiveTab('security')}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-all ${activeTab === 'security' ? 'bg-nova-teal/10 text-nova-teal' : 'text-gray-600 hover:bg-gray-50'}`}
              >
                <ShieldCheck className={`h-5 w-5 ${activeTab === 'security' ? 'text-nova-teal' : 'text-gray-400'}`} />
                Security
              </button>
              <button 
                onClick={() => setActiveTab('preferences')}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-all ${activeTab === 'preferences' ? 'bg-nova-teal/10 text-nova-teal' : 'text-gray-600 hover:bg-gray-50'}`}
              >
                <MapPin className={`h-5 w-5 ${activeTab === 'preferences' ? 'text-nova-teal' : 'text-gray-400'}`} />
                Travel Preferences
              </button>
            </nav>
          </div>
        </div>

        {/* Right Area - Content */}
        <div className="w-full lg:w-3/4">
          
          {activeTab === 'personal' && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
              <h2 className="text-xl font-bold text-nova-navy mb-6 pb-4 border-b border-gray-100 flex items-center justify-between">
                <span>Personal Information</span>
                <span className="text-sm text-gray-400 font-normal">Last updated: 2 weeks ago</span>
              </h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input type="text" value={userData.firstName} onChange={e => setUserData({...userData, firstName: e.target.value})} className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nova-teal focus:border-nova-teal outline-none transition-all" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input type="text" value={userData.lastName} onChange={e => setUserData({...userData, lastName: e.target.value})} className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nova-teal focus:border-nova-teal outline-none transition-all" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input type="email" value={userData.email} onChange={e => setUserData({...userData, email: e.target.value})} className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nova-teal focus:border-nova-teal outline-none transition-all" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input type="text" value={userData.phone} onChange={e => setUserData({...userData, phone: e.target.value})} className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nova-teal focus:border-nova-teal outline-none transition-all" />
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-100">
                   <h3 className="font-bold text-gray-800 mb-4">Residential Address</h3>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="md:col-span-2">
                       <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                       <div className="relative">
                         <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                         <input type="text" value={userData.address} onChange={e => setUserData({...userData, address: e.target.value})} className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nova-teal focus:border-nova-teal outline-none transition-all" />
                       </div>
                     </div>
                     <div>
                       <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                       <input type="text" value={userData.city} onChange={e => setUserData({...userData, city: e.target.value})} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nova-teal focus:border-nova-teal outline-none transition-all" />
                     </div>
                     <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                          <input type="text" value={userData.country} onChange={e => setUserData({...userData, country: e.target.value})} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nova-teal focus:border-nova-teal outline-none transition-all" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Postal Code</label>
                          <input type="text" value={userData.postalCode} onChange={e => setUserData({...userData, postalCode: e.target.value})} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nova-teal focus:border-nova-teal outline-none transition-all" />
                        </div>
                     </div>
                   </div>
                </div>

                <div className="pt-6 border-t border-gray-100 flex justify-end">
                  <button type="button" className="bg-nova-teal hover:bg-nova-navy text-white px-8 py-3 rounded-xl font-bold shadow-md transition-colors flex items-center justify-center gap-2">
                    <Save className="h-5 w-5" /> Save Changes
                  </button>
                </div>
              </form>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
               <h2 className="text-xl font-bold text-nova-navy mb-6 pb-4 border-b border-gray-100">Security Settings</h2>
               
               <form className="space-y-6 max-w-lg">
                 <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                    <div className="relative">
                      <Key className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input type="password" placeholder="••••••••" className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nova-teal focus:border-nova-teal outline-none transition-all" />
                    </div>
                 </div>
                 <div className="pt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                    <div className="relative">
                      <Key className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input type="password" placeholder="••••••••" className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nova-teal focus:border-nova-teal outline-none transition-all" />
                    </div>
                 </div>
                 <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
                    <div className="relative">
                      <Key className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input type="password" placeholder="••••••••" className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nova-teal focus:border-nova-teal outline-none transition-all" />
                    </div>
                 </div>
                 
                 <div className="pt-6 flex justify-start">
                  <button type="button" className="bg-nova-navy hover:bg-nova-teal text-white px-8 py-3 rounded-xl font-bold shadow-md transition-colors">
                    Update Password
                  </button>
                </div>
               </form>
            </div>
          )}

          {activeTab === 'preferences' && (
             <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
                <h2 className="text-xl font-bold text-nova-navy mb-6 pb-4 border-b border-gray-100">Travel Preferences</h2>
                <p className="text-gray-500 mb-6">Set your defaults to speed up future bookings.</p>
                {/* Mock content for preferences */}
                <div className="space-y-4">
                  <div className="p-4 border border-gray-200 rounded-lg flex justify-between items-center">
                    <div>
                       <h4 className="font-bold text-gray-800">Seat Preference</h4>
                       <p className="text-sm text-gray-500">Window, Aisle, Middle</p>
                    </div>
                    <select className="border border-gray-300 bg-gray-50 rounded-lg px-3 py-2 outline-none text-sm font-medium">
                      <option>Window</option>
                      <option>Aisle</option>
                      <option>Middle</option>
                    </select>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg flex justify-between items-center">
                    <div>
                       <h4 className="font-bold text-gray-800">Meal Preference</h4>
                       <p className="text-sm text-gray-500">Special dietary requirements</p>
                    </div>
                    <select className="border border-gray-300 bg-gray-50 rounded-lg px-3 py-2 outline-none text-sm font-medium">
                      <option>Standard Meal</option>
                      <option>Vegetarian</option>
                      <option>Vegan</option>
                      <option>Halal</option>
                      <option>Gluten Free</option>
                    </select>
                  </div>
                </div>
             </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Profile;
