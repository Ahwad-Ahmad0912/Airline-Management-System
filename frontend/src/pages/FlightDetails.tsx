import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Plane, Calendar, Clock, ArrowRight, MapPin, CheckCircle2, BaggageClaim, Utensils } from 'lucide-react';

const FlightDetails: React.FC = () => {
  const { id } = useParams();

  // Mock flight detail data
  const flight = {
    id: id,
    airline: 'NovaFly',
    flightNumber: 'NF-142',
    departureTime: '11:00 AM',
    departureDate: '15 Oct, 2026',
    arrivalTime: '04:00 PM',
    arrivalDate: '15 Oct, 2026',
    duration: '5h 00m',
    from: 'DXB - Dubai Intl',
    to: 'LHR - London Heathrow',
    price: 620,
    aircraft: 'Boeing 787 Dreamliner'
  };

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-6 font-medium">
          <Link to="/" className="hover:text-nova-teal">Home</Link> <span className="mx-2">/</span> 
          <Link to="/search" className="hover:text-nova-teal">Search Results</Link> <span className="mx-2">/</span> 
          <span className="text-nova-navy">Flight Details</span>
        </div>

        <h1 className="text-3xl font-bold text-nova-navy mb-8">Review Your Flight</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content - Left */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Flight Ticket Summary */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-nova-navy px-6 py-4 flex justify-between items-center text-white">
                <div className="flex items-center gap-3">
                  <Plane className="h-6 w-6 text-nova-mint" />
                  <span className="font-bold text-lg text-nova-mint">{flight.airline}</span>
                </div>
                <div className="text-sm text-blue-200 font-medium">Flight {flight.flightNumber} • {flight.duration}</div>
              </div>
              
              <div className="p-8 pb-10 relative">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="text-4xl font-bold text-nova-navy mb-1">{flight.departureTime}</div>
                    <div className="text-gray-500 text-sm mb-3 flex items-center gap-1"><Calendar className="h-4 w-4" /> {flight.departureDate}</div>
                    <div className="font-semibold text-gray-800 flex items-center gap-2"><MapPin className="h-4 w-4 text-nova-teal" /> {flight.from}</div>
                  </div>
                  
                  <div className="flex flex-col items-center justify-center flex-1 mt-4 relative z-10 px-4">
                     <span className="text-xs text-gray-500 mb-1 font-medium bg-white px-2">Direct</span>
                     <div className="w-full border-t-2 border-dashed border-gray-300 relative">
                       <Plane className="h-6 w-6 text-nova-teal absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                     </div>
                  </div>

                  <div className="flex-1 text-right">
                    <div className="text-4xl font-bold text-nova-navy mb-1">{flight.arrivalTime}</div>
                    <div className="text-gray-500 text-sm mb-3 flex items-center justify-end gap-1"><Calendar className="h-4 w-4" /> {flight.arrivalDate}</div>
                    <div className="font-semibold text-gray-800 flex items-center justify-end gap-2"><MapPin className="h-4 w-4 text-nova-teal" /> {flight.to}</div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between text-sm text-gray-600 font-medium">
                  <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-nova-blue" /> Duration: {flight.duration}</div>
                  <div>Aircraft: <span className="text-nova-navy font-semibold">{flight.aircraft}</span></div>
                </div>
              </div>
            </div>

            {/* Included Features */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8">
              <h2 className="text-xl font-bold text-nova-navy mb-6">What's included in this fare</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="bg-nova-teal/10 p-3 rounded-full text-nova-teal h-min"><BaggageClaim className="h-6 w-6" /></div>
                  <div>
                    <h3 className="font-bold text-gray-800">Baggage</h3>
                    <p className="text-sm text-gray-600 mt-1">1x 7kg Cabin Bag</p>
                    <p className="text-sm text-gray-600">1x 23kg Checked Bag</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-nova-teal/10 p-3 rounded-full text-nova-teal h-min"><Utensils className="h-6 w-6" /></div>
                  <div>
                    <h3 className="font-bold text-gray-800">In-flight Dining</h3>
                    <p className="text-sm text-gray-600 mt-1">Complimentary hot meal</p>
                    <p className="text-sm text-gray-600">Free beverages (alcoholic/non-alcoholic)</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-nova-teal/10 p-3 rounded-full text-nova-teal h-min"><CheckCircle2 className="h-6 w-6" /></div>
                  <div>
                    <h3 className="font-bold text-gray-800">Flexibility</h3>
                    <p className="text-sm text-gray-600 mt-1">Changes permitted with fee</p>
                    <p className="text-sm text-gray-600">Cancellations permitted with fee</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>

          {/* Sidebar - Right */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sticky top-24">
              <h2 className="text-xl font-bold text-nova-navy mb-6">Fare Summary</h2>
              
              <div className="space-y-4 text-sm text-gray-700">
                <div className="flex justify-between items-center">
                  <span>Adult (1x)</span>
                  <span className="font-bold text-gray-900">${flight.price}</span>
                </div>
                <div className="flex justify-between items-center text-gray-500">
                  <span>Taxes & Fees</span>
                  <span>$84</span>
                </div>
                
                <div className="border-t border-gray-200 pt-4 mt-4 flex justify-between items-center">
                  <span className="text-lg font-bold text-nova-navy">Total Price</span>
                  <span className="text-3xl font-bold text-nova-teal">${flight.price + 84}</span>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                <Link to="/customer/booking" className="w-full bg-nova-navy hover:bg-nova-teal text-white py-4 rounded-xl font-bold shadow-lg shadow-nova-navy/20 transition-all flex items-center justify-center gap-2 group text-lg">
                  Continue as Guest <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <div className="text-center text-sm text-gray-500 py-2">OR</div>
                <Link to="/login" className="w-full bg-white border-2 border-nova-teal text-nova-teal hover:bg-nova-teal hover:text-white py-3 rounded-xl font-bold transition-colors flex items-center justify-center">
                  Login to Book Faster
                </Link>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default FlightDetails;
