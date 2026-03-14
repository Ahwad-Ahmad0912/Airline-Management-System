import React from 'react';
import { Plane, Calendar, Clock, Download, Printer, Share2, Info, MapPin } from 'lucide-react';

const TicketDownload: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full flex justify-between items-center mb-8 max-w-3xl">
        <h1 className="text-2xl sm:text-3xl font-bold text-nova-navy">Your Boarding Pass</h1>
        <div className="flex items-center gap-3">
           <button className="bg-white border border-gray-200 hover:border-nova-teal hover:text-nova-teal p-2 rounded-lg text-gray-600 transition-colors shadow-sm" title="Share Ticket">
             <Share2 className="h-5 w-5" />
           </button>
           <button className="bg-white border border-gray-200 hover:border-nova-teal hover:text-nova-teal p-2 rounded-lg text-gray-600 transition-colors shadow-sm" title="Print Ticket">
             <Printer className="h-5 w-5" />
           </button>
           <button className="bg-nova-teal hover:bg-nova-navy text-white px-4 py-2 rounded-lg font-bold shadow-md transition-colors flex items-center gap-2 text-sm whitespace-nowrap">
             <Download className="h-4 w-4" /> Download PDF
           </button>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-xl w-full max-w-3xl overflow-hidden border border-gray-100 flex flex-col md:flex-row print:flex-row print:shadow-none print:border-2">
        
        {/* Main Ticket Area */}
        <div className="md:w-3/4 flex flex-col relative bg-white pb-6 pt-0 border-r-0 md:border-r-2 border-dashed border-gray-200 print:w-3/4">
          
          {/* Header */}
          <div className="bg-nova-navy text-white px-8 py-5 flex justify-between items-center rounded-tl-3xl rounded-tr-3xl md:rounded-tr-none">
            <div className="flex items-center gap-3">
              <Plane className="h-8 w-8 text-nova-mint" />
              <span className="font-bold text-2xl tracking-tighter text-white">NovaFly</span>
            </div>
            <div className="text-right">
              <div className="text-xs text-blue-200 font-bold tracking-widest uppercase">Boarding Pass</div>
              <div className="font-mono font-bold">ECONOMY CLASS</div>
            </div>
          </div>

          <div className="px-8 pt-8 pb-4">
             {/* Passengers & Flight */}
             <div className="flex justify-between items-start mb-8">
               <div>
                 <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Passenger Name</p>
                 <p className="text-xl font-bold text-nova-navy uppercase">DOE / JANE MRS</p>
               </div>
               <div className="text-right">
                 <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Flight</p>
                 <p className="text-xl font-bold text-nova-navy">NF 142</p>
                 <p className="text-xs text-gray-400 font-mono mt-1">PNR: Z84K9L</p>
               </div>
             </div>

             {/* Route */}
             <div className="flex justify-between items-center mb-10 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <div className="text-left">
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">From</p>
                  <p className="text-5xl font-black text-nova-navy tracking-tighter">DXB</p>
                  <p className="text-sm font-medium text-gray-800 mt-2">Dubai</p>
                  <p className="text-xs text-gray-500 mt-1 flex items-center gap-1"><Calendar className="h-3 w-3"/> 15 Oct, 2026</p>
                </div>
                
                <div className="flex-1 px-8 flex flex-col items-center">
                  <Plane className="h-8 w-8 text-gray-300" />
                </div>

                <div className="text-right">
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">To</p>
                  <p className="text-5xl font-black text-nova-navy tracking-tighter">LHR</p>
                  <p className="text-sm font-medium text-gray-800 mt-2">London</p>
                  <p className="text-xs text-gray-500 mt-1 flex items-center justify-end gap-1"><Calendar className="h-3 w-3"/> 15 Oct, 2026</p>
                </div>
             </div>

             {/* Details Grid */}
             <div className="grid grid-cols-4 gap-4 pb-2 border-b border-gray-100 uppercase">
                <div>
                  <p className="text-xs text-gray-500 font-bold tracking-wider mb-1">Gate</p>
                  <p className="text-2xl font-bold text-gray-900">D14</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold tracking-wider mb-1">Boarding</p>
                  <p className="text-2xl font-bold text-nova-teal">10:15</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold tracking-wider mb-1">Zone</p>
                  <p className="text-2xl font-bold text-gray-900">3</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold tracking-wider mb-1">Seat</p>
                  <p className="text-2xl font-bold text-gray-900">12A</p>
                </div>
             </div>
             
             <div className="pt-4 flex items-start gap-3">
               <Info className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
               <p className="text-xs text-gray-500 leading-relaxed">
                 Gate closes 20 minutes before departure. Security checks may take longer than expected, please arrive at the airport at least 2 hours prior to boarding time.
               </p>
             </div>
          </div>
          
          {/* Cutouts styling */}
          <div className="hidden md:block absolute -right-4 top-16 w-8 h-8 rounded-full bg-gray-50 border-l border-gray-200 shadow-inner"></div>
          <div className="hidden md:block absolute -right-4 bottom-16 w-8 h-8 rounded-full bg-gray-50 border-l border-gray-200 shadow-inner"></div>
        </div>

        {/* Stub Area (Right side / Bottom on mobile) */}
        <div className="md:w-1/4 bg-[#f8fafc] rounded-bl-3xl rounded-br-3xl md:rounded-bl-none flex flex-col relative print:w-1/4">
          
          <div className="bg-nova-mint text-nova-navy px-6 py-5 flex justify-center items-center md:rounded-tr-3xl hidden md:flex">
             <span className="font-bold uppercase tracking-widest text-sm">Boarding Pass</span>
          </div>

          <div className="p-6 md:p-8 flex-1 flex flex-col items-center justify-center border-t-2 border-dashed border-gray-200 md:border-None md:pt-8 bg-">
             <div className="w-full text-center mb-6 hidden md:block">
               <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Flight</p>
               <p className="text-2xl font-bold text-nova-navy">NF 142</p>
             </div>
             <div className="w-full flex justify-between md:flex-col md:text-center md:gap-4 mb-8">
               <div className="text-left md:text-center">
                 <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider mb-1">Seat</p>
                 <p className="text-xl font-bold text-gray-900">12A</p>
               </div>
               <div className="text-right md:text-center">
                 <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider mb-1">Seq No</p>
                 <p className="text-xl font-bold text-gray-900">084</p>
               </div>
             </div>
             
             {/* QR Code Mock */}
             <div className="bg-white p-3 rounded-xl border border-gray-200 shadow-sm mx-auto">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-32 h-32 text-nova-navy" fill="currentColor">
                 <path d="M3 3h8v8H3zm2 2v4h4V5z"/>
                 <path d="M13 3h8v8h-8zm2 2v4h4V5z"/>
                 <path d="M3 13h8v8H3zm2 2v4h4v-4z"/>
                 <path d="M13 13h2v2h-2z"/>
                 <path d="M15 15h2v2h-2z"/>
                 <path d="M13 17h2v2h-2z"/>
                 <path d="M17 17h2v2h-2z"/>
                 <path d="M19 19h2v2h-2z"/>
                 <path d="M15 19h2v2h-2z"/>
                 <path d="M19 15h2v2h-2z"/>
                 <path d="M17 13h2v2h-2z"/>
               </svg>
             </div>
             <p className="text-xs text-gray-400 mt-4 text-center font-mono tracking-widest">NF-Z84K9L</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TicketDownload;
