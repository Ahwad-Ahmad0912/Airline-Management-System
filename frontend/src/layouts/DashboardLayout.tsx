import React, { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Plane, LayoutDashboard, Ticket, User, Settings, LogOut, 
  Menu, Bell, Search as SearchIcon, X, MapPin, Users, BarChart3
} from 'lucide-react';

const DashboardLayout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  // Quick mock to determine if we are in admin or customer route
  const isAdmin = location.pathname.startsWith('/admin');
  
  const customerLinks = [
    { name: 'Dashboard', path: '/customer/dashboard', icon: LayoutDashboard },
    { name: 'My Bookings', path: '/customer/bookings', icon: Ticket },
    { name: 'Profile', path: '/customer/profile', icon: User },
    { name: 'Book a Flight', path: '/search', icon: Plane },
  ];

  const adminLinks = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Manage Flights', path: '/admin/flights', icon: Plane },
    { name: 'Manage Bookings', path: '/admin/bookings', icon: Ticket },
    { name: 'Manage Airports', path: '/admin/airports', icon: MapPin },
    { name: 'Manage Users', path: '/admin/users', icon: Users },
    { name: 'Analytics', path: '/admin/analytics', icon: BarChart3 },
  ];

  const links = isAdmin ? adminLinks : customerLinks;

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="flex h-screen bg-gray-50 font-sans text-gray-900 overflow-hidden">
      
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-gray-900/50 z-40" 
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-50 w-64 bg-nova-navy text-white transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        flex flex-col shadow-2xl lg:shadow-none
      `}>
        {/* Logo Area */}
        <div className="flex items-center justify-between h-20 px-6 bg-nova-navy border-b border-nova-blue/30">
          <Link to="/" className="flex items-center gap-2 group">
            <Plane className="h-8 w-8 text-nova-mint group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            <span className="font-bold text-2xl tracking-tighter">NovaFly</span>
          </Link>
          <button className="lg:hidden text-gray-400 hover:text-white" onClick={() => setSidebarOpen(false)}>
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* User Info / Role Badge */}
        <div className="px-6 py-6 border-b border-nova-blue/30 flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-nova-teal flex items-center justify-center font-bold text-lg shadow-inner">
            {isAdmin ? 'AD' : 'JD'}
          </div>
          <div>
            <p className="font-bold text-sm text-white">{isAdmin ? 'Admin User' : 'Jane Doe'}</p>
            <span className="text-xs bg-nova-blue/30 text-nova-mint font-medium px-2 py-0.5 rounded-full mt-1 inline-block">
              {isAdmin ? 'Administrator' : 'SkyMember Core'}
            </span>
          </div>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          <p className="px-2 text-xs font-semibold text-nova-blue uppercase tracking-wider mb-4">Menu</p>
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname.startsWith(link.path);
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setSidebarOpen(false)}
                className={`
                  flex items-center gap-3 px-3 py-3 rounded-xl transition-all font-medium text-sm border border-transparent
                  ${isActive 
                    ? 'bg-nova-teal/20 text-nova-mint border-nova-teal/30 shadow-sm' 
                    : 'text-gray-300 hover:bg-nova-blue/20 hover:text-white'}
                `}
              >
                <Icon className={`h-5 w-5 ${isActive ? 'text-nova-mint' : 'text-gray-400'}`} />
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Bottom Actions */}
        <div className="p-4 border-t border-nova-blue/30">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-3 w-full rounded-xl text-gray-300 hover:bg-red-500/10 hover:text-red-400 transition-all font-medium text-sm"
          >
            <LogOut className="h-5 w-5" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        
        {/* Topbar */}
        <header className="h-20 bg-white shadow-sm border-b border-gray-100 flex items-center justify-between px-4 sm:px-6 lg:px-8 shrink-0 relative z-20">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-md text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              <Menu className="h-6 w-6" />
            </button>
            <div className="hidden sm:flex items-center bg-gray-100 rounded-full px-4 py-2 w-64 focus-within:ring-2 focus-within:ring-nova-teal transition-all">
              <SearchIcon className="h-4 w-4 text-gray-400" />
              <input 
                type="text" 
                placeholder={`Search ${isAdmin ? 'users, flights...' : 'destinations...'}`} 
                className="bg-transparent border-none focus:outline-none ml-2 text-sm w-full text-gray-700"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-4 sm:gap-6">
            <button className="relative p-2 text-gray-500 hover:text-nova-teal transition-colors">
              <Bell className="h-6 w-6" />
              <span className="absolute top-1 right-1 h-2.5 w-2.5 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <Link to={isAdmin ? "/admin/settings" : "/customer/profile"} className="p-2 text-gray-500 hover:text-nova-teal transition-colors hidden sm:block">
              <Settings className="h-6 w-6" />
            </Link>
          </div>
        </header>

        {/* Scrollable Page Content */}
        <main className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8 relative z-10">
          <div className="max-w-7xl mx-auto w-full">
            <Outlet />
          </div>
        </main>
        
      </div>
    </div>
  );
};

export default DashboardLayout;
