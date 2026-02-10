
import React, { useState } from 'react';
import { Car } from '../types';
import { IndianRupee, ArrowUpRight, Zap } from 'lucide-react';

interface ModelsGridProps {
  cars: Car[];
  onCarSelect: (car: Car) => void;
}

export const ModelsGrid: React.FC<ModelsGridProps> = ({ cars, onCarSelect }) => {
  const [activeBrand, setActiveBrand] = useState<'All' | 'Honda' | 'Kia'>('All');

  const filteredCars = activeBrand === 'All' 
    ? cars 
    : cars.filter(c => c.brand === activeBrand);

  return (
    <div className="space-y-12">
      {/* Filters */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        {['All', 'Honda', 'Kia'].map((brand) => (
          <button
            key={brand}
            onClick={() => setActiveBrand(brand as any)}
            className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all ${
              activeBrand === brand 
              ? 'bg-white text-black scale-105' 
              : 'glass text-white hover:bg-white/10'
            }`}
          >
            {brand}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCars.map((car) => (
          <div 
            key={car.id}
            className="group relative glass rounded-3xl overflow-hidden cursor-pointer flex flex-col hover:scale-[1.02] transition-all duration-500"
            onClick={() => onCarSelect(car)}
          >
            {/* Image Section */}
            <div className="relative h-64 overflow-hidden">
              <img 
                src={car.image} 
                alt={car.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-tighter">
                  {car.type}
                </span>
                {car.type === 'EV' && (
                  <span className="px-3 py-1 bg-emerald-500/80 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-tighter flex items-center gap-1">
                    <Zap size={10} fill="currentColor" /> Electric
                  </span>
                )}
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 flex-grow space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-zinc-500 text-xs font-bold uppercase tracking-widest">{car.brand}</h3>
                  <h2 className="text-3xl font-black italic uppercase tracking-tighter leading-tight">{car.name}</h2>
                </div>
                <div className="p-3 bg-white/5 rounded-full group-hover:bg-white group-hover:text-black transition-colors">
                  <ArrowUpRight size={20} />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-zinc-500 text-sm">Starting from</span>
                <span className="text-2xl font-black text-white flex items-center">
                  <IndianRupee size={20} className="mr-1" />
                  {car.basePrice.toLocaleString('en-IN')}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                <div className="space-y-1">
                  <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Mileage</p>
                  <p className="text-sm font-bold">{car.specs.mileage}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Engine</p>
                  <p className="text-sm font-bold truncate">{car.specs.engine}</p>
                </div>
              </div>
            </div>

            {/* Hover Indicator */}
            <div className="h-2 w-full bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
          </div>
        ))}
      </div>
    </div>
  );
};
