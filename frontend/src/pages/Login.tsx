import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Plane, Mail, Lock, LogIn, ArrowRight } from 'lucide-react';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [role, setRole] = useState('customer'); // Mock role selector for demo

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login logic -> redirect based on role
    if (role === 'admin') navigate('/admin');
    else navigate('/dashboard');
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Side - Image/Branding */}
        <div className="md:w-5/12 bg-nova-navy p-10 text-white flex flex-col justify-between relative overflow-hidden hidden md:flex">
          <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
          
          <div className="relative z-10">
            <Link to="/" className="flex items-center gap-2 mb-12">
              <Plane className="h-8 w-8 text-nova-mint" />
              <span className="font-bold text-3xl tracking-tighter">NovaFly</span>
            </Link>
            
            <h2 className="text-3xl font-bold mb-4 leading-tight">Welcome Back to the Skies</h2>
            <p className="text-blue-100 mb-8 opacity-90">Log in to manage your bookings, check flight status, or access exclusive member offers.</p>
          </div>

          <div className="relative z-10">
            <div className="bg-nova-blue/30 p-4 rounded-xl backdrop-blur-sm border border-nova-blue/50">
              <p className="text-sm italic">"The best airline interface I've ever used. Managing my flights is a breeze!"</p>
              <div className="mt-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-nova-teal flex items-center justify-center font-bold text-xs">JD</div>
                <div className="text-xs">
                  <p className="font-semibold text-nova-mint">Jane Doe</p>
                  <p className="text-blue-200">Frequent Flyer</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="md:w-7/12 p-8 md:p-12 lg:p-16">
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-3xl font-bold text-nova-navy mb-2">Sign In</h2>
            <p className="text-gray-500">Please enter your details to continue.</p>
          </div>

          {/* MOCK ROLE SELECTOR FOR DEMO PURPOSES */}
          <div className="flex p-1 bg-gray-100 rounded-lg mb-8">
            <button 
              className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${role === 'customer' ? 'bg-white shadow-sm text-nova-navy' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setRole('customer')}
            >
              Customer
            </button>
            <button 
              className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${role === 'admin' ? 'bg-white shadow-sm text-nova-navy' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setRole('admin')}
            >
              Admin
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-nova-teal focus:border-nova-teal outline-none transition-all placeholder-gray-400"
                  placeholder="test@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <a href="#" className="text-sm font-medium text-nova-teal hover:text-nova-blue transition-colors">Forgot Password?</a>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input 
                  type="password" 
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-nova-teal focus:border-nova-teal outline-none transition-all placeholder-gray-400"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <div className="flex items-center">
              <input 
                id="remember_me" 
                type="checkbox" 
                className="h-4 w-4 text-nova-teal focus:ring-nova-teal border-gray-300 rounded" 
              />
              <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-700">
                Remember me for 30 days
              </label>
            </div>

            <button 
              type="submit" 
              className="w-full bg-nova-navy hover:bg-nova-teal text-white py-3 rounded-xl font-bold shadow-lg shadow-nova-navy/20 transition-all flex items-center justify-center gap-2 group"
            >
              Sign In <LogIn className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-10 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account yet?{' '}
              <Link to="/register" className="font-bold text-nova-teal hover:text-nova-navy transition-colors">
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
