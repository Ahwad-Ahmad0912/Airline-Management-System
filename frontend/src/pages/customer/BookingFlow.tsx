import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, CreditCard, Users, Armchair, FileText, ArrowLeft, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

const BookingFlow: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  // Steps Configuration
  const steps = [
    { id: 1, name: 'Passenger Info', icon: Users },
    { id: 2, name: 'Seat Selection', icon: Armchair },
    { id: 3, name: 'Payment', icon: CreditCard },
    { id: 4, name: 'Confirmation', icon: FileText }
  ];

  const handleNext = () => {
    if (step === 3) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setStep(4);
      }, 2000);
    } else {
      setStep(s => Math.min(s + 1, 4));
    }
  };

  const handleBack = () => {
    setStep(s => Math.max(s - 1, 1));
  };

  const renderStepContent = () => {
    switch(step) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-nova-navy">Passenger Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-nova-teal" defaultValue="Jane" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-nova-teal" defaultValue="Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                <input type="date" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-nova-teal" defaultValue="1990-01-01" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Passport Number</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-nova-teal" defaultValue="P12345678" />
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6 text-center">
            <h3 className="text-xl font-bold text-nova-navy">Select Your Seat</h3>
            <p className="text-gray-500">Click on an available seat to select it.</p>
            
            <div className="bg-gray-100 p-8 rounded-2xl mx-auto max-w-sm border border-gray-200 shadow-inner overflow-hidden relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-10 bg-gray-200 rounded-b-3xl"></div> {/* Plane nose simulation */}
              <div className="grid grid-cols-5 gap-y-4 gap-x-2 pt-10">
                {/* Mock Seats */}
                {[...Array(6)].map((_, rowIdx) => (
                  <React.Fragment key={rowIdx}>
                    <div className={`p-4 rounded-t-xl rounded-b flex items-center justify-center cursor-pointer transition-colors ${rowIdx === 2 ? 'bg-nova-teal text-white' : 'bg-white border-2 border-gray-300 text-gray-400 hover:border-nova-teal'}`}><Armchair className="h-5 w-5" /></div>
                    <div className="p-4 rounded-t-xl rounded-b flex items-center justify-center cursor-not-allowed bg-gray-200 text-gray-400 border-2 border-transparent"><Armchair className="h-5 w-5" /></div>
                    
                    <div className="w-6"></div> {/* Aisle */}
                    
                    <div className="p-4 rounded-t-xl rounded-b flex items-center justify-center cursor-not-allowed bg-gray-200 text-gray-400 border-2 border-transparent"><Armchair className="h-5 w-5" /></div>
                    <div className={`p-4 rounded-t-xl rounded-b flex items-center justify-center cursor-pointer transition-colors bg-white border-2 border-gray-300 text-gray-400 hover:border-nova-teal`}><Armchair className="h-5 w-5" /></div>
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="flex justify-center gap-6 mt-6">
              <div className="flex items-center gap-2"><div className="w-4 h-4 bg-white border border-gray-300 rounded"></div><span className="text-sm">Available</span></div>
              <div className="flex items-center gap-2"><div className="w-4 h-4 bg-gray-200 rounded"></div><span className="text-sm">Taken</span></div>
              <div className="flex items-center gap-2"><div className="w-4 h-4 bg-nova-teal rounded"></div><span className="text-sm border-gray-300">Selected</span></div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-nova-navy">Payment Details</h3>
            
            <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl flex items-start gap-3">
               <ShieldCheck className="h-6 w-6 text-nova-blue shrink-0" />
               <p className="text-sm text-gray-700">Your payment is secure. All of our transactions map to 256-bit SSL encryption standards.</p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                <div className="relative">
                  <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input type="text" className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-nova-teal" placeholder="0000 0000 0000 0000" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-nova-teal" placeholder="MM/YY" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">CVC</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-nova-teal" placeholder="123" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Cardholder Name</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-nova-teal" placeholder="JANE DOE" />
              </div>
            </div>
          </div>
        );
      case 4:
         return (
           <div className="text-center py-10">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="h-10 w-10 text-green-500" />
              </div>
              <h2 className="text-3xl font-black text-nova-navy mb-4">Booking Confirmed!</h2>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">Your flight has been successfully booked. An email confirmation has been sent to jane.doe@example.com.</p>
              
              <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl mb-8 max-w-sm mx-auto shadow-sm">
                 <p className="text-sm text-gray-500 uppercase font-bold mb-1">Booking Reference</p>
                 <p className="text-2xl font-mono font-bold tracking-widest text-nova-navy">NF-Z84K9L</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <button onClick={() => navigate('/customer/ticket')} className="bg-nova-teal hover:bg-nova-navy text-white px-8 py-3 rounded-xl font-bold transition-colors shadow-lg shadow-nova-teal/20">
                   View E-Ticket
                 </button>
                 <button onClick={() => navigate('/customer/dashboard')} className="bg-white border border-gray-300 text-gray-700 hover:text-nova-navy hover:border-nova-navy px-8 py-3 rounded-xl font-bold transition-colors">
                   Go to Dashboard
                 </button>
              </div>
           </div>
         );
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-50 min-h-[calc(100vh-80px)] py-8 px-4 sm:px-6"> {/* calc(100vh-topbarHeight) */}
      <div className="max-w-4xl mx-auto">
        
        {/* Progress Tracker */}
        {step < 4 && (
          <div className="mb-12">
            <div className="flex justify-between relative">
              {/* Line behind steps */}
              <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -z-10 transform -translate-y-1/2"></div>
              {/* Active Line */}
              <div 
                className="absolute top-1/2 left-0 h-1 bg-nova-teal -z-10 transform -translate-y-1/2 transition-all duration-500"
                style={{ width: `${((step - 1) / (steps.length - 2)) * 100}%` }}
              ></div>

              {steps.slice(0, 3).map((s) => {
                const Icon = s.icon;
                const isActive = step === s.id;
                const isPast = step > s.id;
                return (
                  <div key={s.id} className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border-4 border-gray-50 transition-colors ${
                      isActive ? 'bg-nova-teal text-white shadow-lg shadow-nova-teal/30' : 
                      isPast ? 'bg-nova-navy text-white' : 'bg-gray-200 text-gray-500'
                    }`}>
                      {isPast ? <Check className="h-5 w-5" /> : <Icon className="h-4 w-4" />}
                    </div>
                    <span className={`text-xs mt-2 font-bold ${isActive ? 'text-nova-teal' : isPast ? 'text-nova-navy' : 'text-gray-400'}`}>
                      {s.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          
          {/* Header (hidden on step 4) */}
          {step < 4 && (
            <div className="bg-nova-navy px-6 py-4 flex justify-between items-center text-white">
              <div className="font-bold">Total Fare</div>
              <div className="text-xl font-bold text-nova-mint">$704.00</div>
            </div>
          )}

          <div className="p-6 md:p-10">
            {renderStepContent()}
          </div>

          {/* Footer Navigation (hidden on step 4) */}
          {step < 4 && (
            <div className="bg-gray-50 px-6 py-4 border-t border-gray-100 flex justify-between items-center">
              <button 
                onClick={handleBack}
                disabled={step === 1}
                className={`flex items-center gap-2 px-4 py-2 font-medium transition-colors ${step === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-600 hover:text-nova-navy'}`}
              >
                <ArrowLeft className="h-4 w-4" /> Back
              </button>
              
              <button 
                onClick={handleNext}
                disabled={loading}
                className="bg-nova-teal hover:bg-nova-navy text-white px-8 py-2.5 rounded-lg font-bold shadow-md transition-colors flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? 'Processing...' : (
                  <>
                    {step === 3 ? 'Pay & Confirm' : 'Continue'} 
                    {step !== 3 && <ArrowRight className="h-4 w-4" />}
                  </>
                )}
              </button>
            </div>
          )}
        </div>
        
      </div>
    </div>
  );
};

export default BookingFlow;
