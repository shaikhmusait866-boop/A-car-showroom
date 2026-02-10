
import React, { useState } from 'react';
import { ALL_CARS } from '../constants';
import { Plus, X, ArrowLeftRight } from 'lucide-react';

export const ComparisonTool: React.FC = () => {
  const [car1, setCar1] = useState(ALL_CARS[0]);
  const [car2, setCar2] = useState(ALL_CARS[3]);

  const SpecRow = ({ label, val1, val2 }: { label: string, val1: any, val2: any }) => (
    <div className="grid grid-cols-3 py-6 border-b border-white/5 hover:bg-white/5 transition-colors px-4">
      <div className="text-xs font-black uppercase tracking-widest text-zinc-500 flex items-center">{label}</div>
      <div className="font-bold text-center">{val1}</div>
      <div className="font-bold text-center">{val2}</div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4">
          <ArrowLeftRight size={16} />
          <span className="text-xs font-black uppercase tracking-widest">Battle of the Titans</span>
        </div>
        <h2 className="text-5xl font-black italic uppercase tracking-tighter gradient-text">Head-to-Head</h2>
        <p className="text-zinc-500 max-w-2xl mx-auto">Compare specifications, features, and performance to find your perfect match.</p>
      </div>

      <div className="glass rounded-[3rem] overflow-hidden">
        {/* Header with Car Selectors */}
        <div className="grid grid-cols-3 border-b border-white/10 glass bg-white/5">
          <div className="p-8 flex items-center justify-center">
            <span className="text-sm font-black uppercase tracking-[0.3em] text-zinc-600 rotate-12">VS</span>
          </div>
          <div className="p-8 border-l border-white/10 space-y-4">
            <select 
              value={car1.id}
              onChange={(e) => setCar1(ALL_CARS.find(c => c.id === e.target.value)!)}
              className="w-full bg-white/5 border border-white/10 rounded-xl p-3 font-bold outline-none"
            >
              {ALL_CARS.map(c => <option key={c.id} value={c.id} className="bg-zinc-900">{c.brand} {c.name}</option>)}
            </select>
            <img src={car1.image} alt={car1.name} className="w-full h-32 object-cover rounded-2xl shadow-xl" />
          </div>
          <div className="p-8 border-l border-white/10 space-y-4">
            <select 
              value={car2.id}
              onChange={(e) => setCar2(ALL_CARS.find(c => c.id === e.target.value)!)}
              className="w-full bg-white/5 border border-white/10 rounded-xl p-3 font-bold outline-none"
            >
              {ALL_CARS.map(c => <option key={c.id} value={c.id} className="bg-zinc-900">{c.brand} {c.name}</option>)}
            </select>
            <img src={car2.image} alt={car2.name} className="w-full h-32 object-cover rounded-2xl shadow-xl" />
          </div>
        </div>

        {/* Comparison Body */}
        <div className="bg-black/40">
           <SpecRow label="Ex-Showroom" val1={`₹${car1.basePrice.toLocaleString('en-IN')}`} val2={`₹${car2.basePrice.toLocaleString('en-IN')}`} />
           <SpecRow label="Fuel Type" val1={car1.specs.fuelType} val2={car2.specs.fuelType} />
           <SpecRow label="Engine" val1={car1.specs.engine} val2={car2.specs.engine} />
           <SpecRow label="Transmission" val1={car1.specs.transmission} val2={car2.specs.transmission} />
           <SpecRow label="Mileage" val1={car1.specs.mileage} val2={car2.specs.mileage} />
           <SpecRow label="Power" val1={car1.specs.power} val2={car2.specs.power} />
           <SpecRow label="Torque" val1={car1.specs.torque} val2={car2.specs.torque} />
           <SpecRow label="Type" val1={car1.type} val2={car2.type} />
        </div>

        <div className="p-8 flex justify-end gap-4 border-t border-white/10">
           <button className="px-8 py-3 glass rounded-full text-xs font-black uppercase tracking-widest">Download PDF</button>
           <button className="px-8 py-3 bg-white text-black rounded-full text-xs font-black uppercase tracking-widest hover:bg-zinc-200 transition-colors">Book a Test Drive</button>
        </div>
      </div>
    </div>
  );
};
