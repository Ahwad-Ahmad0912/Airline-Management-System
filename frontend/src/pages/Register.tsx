import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Plane, Mail, Lock, User, UserPlus } from 'lucide-react';

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(formData.password !== formData.confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    // Mock register logic -> redirect to customer dashboard
    navigate('/dashboard');
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-50 flex items-center justify-center p-4 py-12">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row-reverse">
        
        {/* Right Side - Image/Branding */}
        <div className="md:w-5/12 bg-nova-teal p-10 text-white flex flex-col justify-between relative overflow-hidden hidden md:flex">
          <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1570955938555-66774640d21d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
          
          <div className="relative z-10 text-right">
            <Link to="/" className="flex items-center justify-end gap-2 mb-12">
              <span className="font-bold text-3xl tracking-tighter">NovaFly</span>
              <Plane className="h-8 w-8 text-nova-navy" />
            </Link>
            
            <h2 className="text-3xl font-bold mb-4 leading-tight text-nova-navy">Join Our Sky Network</h2>
            <p className="text-teal-50 mb-8 opacity-90 text-right">Create an account to track miles, save payment details, and speed through checkout.</p>
          </div>

          <div className="relative z-10">
            <div className="bg-nova-navy/40 p-5 rounded-xl backdrop-blur-sm border border-nova-navy/50 text-left">
              <h3 className="font-bold text-lg mb-2 text-nova-mint">Member Benefits</h3>
              <ul className="space-y-2 text-sm text-teal-50">
                <li className="flex items-center gap-2">✨ Exclusive flight deals</li>
                <li className="flex items-center gap-2">🎫 Faster booking process</li>
                <li className="flex items-center gap-2">📱 Electronic boarding passes</li>
                <li className="flex items-center gap-2">🎁 Earn miles on every flight</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Left Side - Register Form */}
        <div className="md:w-7/12 p-8 md:p-12 lg:p-16">
          <div className="mb-8 text-center md:text-left">
            <h2 className="text-3xl font-bold text-nova-navy mb-2">Create Account</h2>
            <p className="text-gray-500">Fill in your details to start flying with us.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-nova-teal focus:border-nova-teal outline-none transition-all placeholder-gray-400"
                  placeholder="John Doe"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-nova-teal focus:border-nova-teal outline-none transition-all placeholder-gray-400"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
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

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input 
                    type="password" 
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-nova-teal focus:border-nova-teal outline-none transition-all placeholder-gray-400"
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="flex items-start mt-4 mb-6">
              <input 
                id="terms" 
                type="checkbox" 
                className="h-4 w-4 mt-1 text-nova-teal focus:ring-nova-teal border-gray-300 rounded" 
                required
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-600">
                I agree to the <a href="#" className="font-medium text-nova-teal hover:text-nova-blue">Terms of Service</a> and <a href="#" className="font-medium text-nova-teal hover:text-nova-blue">Privacy Policy</a>
              </label>
            </div>

            <button 
              type="submit" 
              className="w-full bg-nova-navy hover:bg-nova-teal text-white py-3 rounded-xl font-bold shadow-lg shadow-nova-navy/20 transition-all flex items-center justify-center gap-2 group"
            >
              Sign Up <UserPlus className="h-5 w-5 group-hover:scale-110 transition-transform" />
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="font-bold text-nova-teal hover:text-nova-navy transition-colors">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
