
import React, { useState, useEffect } from 'react';
import { Car } from '../types';
import { ALL_CARS } from '../constants';
import { IndianRupee, PieChart as PieIcon, Calculator } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

export const EMICalculator: React.FC<{ defaultCar?: Car | null }> = ({ defaultCar }) => {
  const [car, setCar] = useState<Car>(defaultCar || ALL_CARS[0]);
  const [downPayment, setDownPayment] = useState(car.basePrice * 0.2);
  const [tenure, setTenure] = useState(60); // months
  const [interestRate, setInterestRate] = useState(8.5); // %

  const loanAmount = car.basePrice - downPayment;
  const r = interestRate / 12 / 100;
  const n = tenure;
  
  const emi = Math.round(
    (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
  );

  const totalPayable = emi * n;
  const totalInterest = totalPayable - loanAmount;

  const chartData = [
    { name: 'Principal', value: loanAmount },
    { name: 'Interest', value: totalInterest }
  ];

  const COLORS = ['#FFFFFF', '#333333'];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4">
             <Calculator size={16} />
             <span className="text-xs font-black uppercase tracking-widest">Finance Manager</span>
           </div>
           <h2 className="text-5xl font-black italic uppercase tracking-tighter gradient-text">Plan Your Dream Ride</h2>
           <p className="text-zinc-500 max-w-2xl mx-auto">Instant estimates for your monthly investments with our flexible financing options.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Controls */}
          <div className="glass p-10 rounded-[3rem] space-y-10">
            <div className="space-y-4">
              <label className="text-xs font-black uppercase tracking-widest text-zinc-500">Select Model</label>
              <select 
                value={car.id}
                onChange={(e) => {
                  const selected = ALL_CARS.find(c => c.id === e.target.value);
                  if (selected) {
                    setCar(selected);
                    setDownPayment(selected.basePrice * 0.2);
                  }
                }}
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 font-bold outline-none focus:border-white transition-colors"
              >
                {ALL_CARS.map(c => (
                  <option key={c.id} value={c.id} className="bg-zinc-900">{c.brand} {c.name}</option>
                ))}
              </select>
            </div>

            <div className="space-y-6">
              <div className="flex justify-between">
                <label className="text-xs font-black uppercase tracking-widest text-zinc-500">Down Payment</label>
                <span className="font-bold">₹{downPayment.toLocaleString('en-IN')}</span>
              </div>
              <input 
                type="range"
                min={0}
                max={car.basePrice * 0.9}
                value={downPayment}
                onChange={(e) => setDownPayment(Number(e.target.value))}
                className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-white"
              />
              <div className="flex justify-between text-[10px] font-bold text-zinc-600 uppercase">
                <span>Min</span>
                <span>Max (90%)</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-4">
                <label className="text-xs font-black uppercase tracking-widest text-zinc-500">Tenure (Months)</label>
                <input 
                  type="number"
                  value={tenure}
                  onChange={(e) => setTenure(Number(e.target.value))}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 font-bold outline-none"
                />
              </div>
              <div className="space-y-4">
                <label className="text-xs font-black uppercase tracking-widest text-zinc-500">Interest Rate (%)</label>
                <input 
                  type="number"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 font-bold outline-none"
                />
              </div>
            </div>
          </div>

          {/* Result Card */}
          <div className="relative group">
            <div className="absolute inset-0 bg-white/5 blur-3xl rounded-[3rem] -z-10 group-hover:bg-white/10 transition-all duration-700"></div>
            <div className="glass p-12 rounded-[3rem] h-full flex flex-col items-center justify-center text-center space-y-8">
              <div>
                <p className="text-zinc-500 font-black uppercase tracking-[0.2em] mb-2">Monthly EMI</p>
                <h3 className="text-7xl font-black italic tracking-tighter flex items-center justify-center">
                  <IndianRupee size={48} />
                  {emi.toLocaleString('en-IN')}
                </h3>
              </div>

              <div className="w-full h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={chartData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                      stroke="none"
                    >
                      {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#111', border: 'none', borderRadius: '12px', fontSize: '12px' }}
                      itemStyle={{ color: '#fff' }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="grid grid-cols-2 w-full gap-4 pt-8 border-t border-white/10">
                <div>
                  <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-1">Total Loan</p>
                  <p className="text-lg font-black">₹{loanAmount.toLocaleString('en-IN')}</p>
                </div>
                <div>
                  <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-1">Total Interest</p>
                  <p className="text-lg font-black">₹{totalInterest.toLocaleString('en-IN')}</p>
                </div>
              </div>

              <button className="w-full py-5 bg-white text-black font-black uppercase text-sm tracking-widest rounded-full hover:bg-zinc-200 transition-all">
                Check Eligibility
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
