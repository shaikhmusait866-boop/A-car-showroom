
import React, { useState } from 'react';
import { Car } from '../types';
import { IndianRupee, ArrowLeft, ChevronRight, Fuel, Gauge, Cpu, CheckCircle2 } from 'lucide-react';

interface CarDetailsProps {
  car: Car;
  onBook: () => void;
  onBack: () => void;
}

export const CarDetails: React.FC<CarDetailsProps> = ({ car, onBook, onBack }) => {
  const [selectedVariant, setSelectedVariant] = useState(car.variants[0]);
  const [selectedColor, setSelectedColor] = useState(car.colors[0]);

  // Rough estimation for On-Road Price (Ex-Showroom + ~15% tax/insurance)
  const onRoadPrice = Math.round(selectedVariant.price * 1.15);

  return (
    <div className="pt-24 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="container mx-auto px-4">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-zinc-500 hover:text-white mb-8 transition-colors group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> 
          <span className="text-sm font-bold uppercase tracking-widest">Back to Models</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Media & Branding */}
          <div className="space-y-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-white/5 rounded-[3rem] blur-3xl -z-10 group-hover:bg-white/10 transition-colors"></div>
              <img 
                src={car.image} 
                alt={car.name} 
                className="w-full h-auto object-cover rounded-[3rem] shadow-2xl transition-transform hover:scale-[1.01] duration-700"
              />
              <div className="absolute -bottom-6 -right-6 glass p-6 rounded-3xl hidden md:block max-w-xs">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 size={16} className="text-emerald-500" />
                  <span className="text-xs font-bold uppercase tracking-widest">Verified Specs</span>
                </div>
                <p className="text-sm text-zinc-400 italic">"Premium quality combined with futuristic technology. A masterpiece in its class."</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="glass p-6 rounded-3xl text-center space-y-2">
                <Fuel className="mx-auto text-zinc-400" size={24} />
                <p className="text-[10px] text-zinc-500 font-black uppercase">Fuel Type</p>
                <p className="font-bold">{car.specs.fuelType}</p>
              </div>
              <div className="glass p-6 rounded-3xl text-center space-y-2">
                <Gauge className="mx-auto text-zinc-400" size={24} />
                <p className="text-[10px] text-zinc-500 font-black uppercase">Mileage</p>
                <p className="font-bold">{car.specs.mileage}</p>
              </div>
              <div className="glass p-6 rounded-3xl text-center space-y-2">
                <Cpu className="mx-auto text-zinc-400" size={24} />
                <p className="text-[10px] text-zinc-500 font-black uppercase">Transmission</p>
                <p className="font-bold">{car.specs.transmission}</p>
              </div>
            </div>
          </div>

          {/* Right: Info & Pricing */}
          <div className="space-y-10">
            <div>
              <h2 className="text-zinc-500 font-black uppercase tracking-widest mb-2">{car.brand} Experience</h2>
              <h1 className="text-6xl font-black italic uppercase tracking-tighter gradient-text leading-tight">{car.name}</h1>
              <p className="text-zinc-400 mt-4 leading-relaxed">{car.description}</p>
            </div>

            {/* Price Table */}
            <div className="glass p-8 rounded-3xl space-y-6">
              <div className="flex justify-between items-end border-b border-white/10 pb-6">
                <div>
                  <p className="text-zinc-500 text-xs font-black uppercase tracking-widest mb-1">Estimated On-Road Price</p>
                  <h3 className="text-5xl font-black flex items-center">
                    <IndianRupee size={32} />
                    {onRoadPrice.toLocaleString('en-IN')}*
                  </h3>
                </div>
                <div className="text-right">
                   <p className="text-zinc-500 text-xs font-black uppercase tracking-widest mb-1">Ex-Showroom</p>
                   <p className="text-xl font-bold">₹{selectedVariant.price.toLocaleString('en-IN')}</p>
                </div>
              </div>

              {/* Variant Picker */}
              <div className="space-y-3">
                <p className="text-xs font-black uppercase tracking-widest text-zinc-500">Select Variant</p>
                <div className="flex flex-wrap gap-3">
                  {car.variants.map((v) => (
                    <button
                      key={v.name}
                      onClick={() => setSelectedVariant(v)}
                      className={`px-6 py-3 rounded-2xl text-sm font-bold transition-all ${
                        selectedVariant.name === v.name ? 'bg-white text-black' : 'glass hover:bg-white/10'
                      }`}
                    >
                      {v.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Picker */}
              <div className="space-y-3">
                <p className="text-xs font-black uppercase tracking-widest text-zinc-500">Exterior Color: <span className="text-white">{selectedColor.name}</span></p>
                <div className="flex gap-4">
                  {car.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c)}
                      className={`w-10 h-10 rounded-full border-2 transition-all p-1 ${
                        selectedColor.name === c.name ? 'border-white scale-110' : 'border-transparent'
                      }`}
                      title={c.name}
                    >
                      <div className="w-full h-full rounded-full" style={{ backgroundColor: c.hex }}></div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-6">
                <button 
                  onClick={onBook}
                  className="w-full py-5 bg-white text-black font-black uppercase text-sm tracking-widest rounded-full flex items-center justify-center gap-3 hover:bg-zinc-200 transition-all"
                >
                  Book Online Now <ChevronRight size={20} />
                </button>
                <p className="text-[10px] text-center text-zinc-500 mt-4 uppercase font-bold tracking-widest">*Taxes and registration fees vary by state.</p>
              </div>
            </div>

            {/* Key Features */}
            <div className="space-y-4">
              <h4 className="text-lg font-black uppercase italic tracking-tighter">Key Highights</h4>
              <div className="grid grid-cols-2 gap-4">
                {car.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 glass rounded-2xl">
                    <CheckCircle2 size={16} className="text-white shrink-0" />
                    <span className="text-sm font-semibold">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
