
import React, { useState } from 'react';
import { Car, BookingDetails } from '../types';
import { ALL_CARS } from '../constants';
import { Check, ShieldCheck, CreditCard, Truck, Loader2 } from 'lucide-react';

export const BookingForm: React.FC<{ preSelectedCar?: Car | null }> = ({ preSelectedCar }) => {
  const [step, setStep] = useState(1);
  const [car, setCar] = useState<Car>(preSelectedCar || ALL_CARS[0]);
  const [details, setDetails] = useState<Partial<BookingDetails>>({
    carId: car.id,
    variant: car.variants[0].name,
    color: car.colors[0].name
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      setIsLoading(true);
      const formData = new FormData(e.currentTarget);
      
      // Append configuration details from state
      formData.append('Brand', car.brand);
      formData.append('Model', car.name);
      formData.append('Variant', details.variant || '');
      formData.append('Color', details.color || '');
      formData.append('Base Price', `₹${car.basePrice.toLocaleString('en-IN')}`);

      try {
        const response = await fetch('https://formspree.io/f/mojnjjav', {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          setIsSuccess(true);
        } else {
          const errorData = await response.json();
          alert(errorData.errors ? errorData.errors.map((e: any) => e.message).join(', ') : "Submission failed. Please try again.");
        }
      } catch (error) {
        console.error("Booking submission error:", error);
        alert("An error occurred while submitting your order. Please check your connection and try again.");
      } finally {
        setIsLoading(false);
      }
    }
  };

  if (isSuccess) {
    return (
      <div className="container mx-auto px-4 py-20 text-center animate-in zoom-in duration-500">
        <div className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-emerald-500/20">
          <Check size={48} className="text-white" />
        </div>
        <h2 className="text-5xl font-black uppercase italic tracking-tighter mb-4">Booking Confirmed!</h2>
        <p className="text-zinc-500 max-w-md mx-auto mb-10">Your order for {car.brand} {car.name} has been received. Our luxury concierge will contact you within 24 hours.</p>
        <button 
          onClick={() => window.location.hash = 'home'}
          className="px-12 py-5 bg-white text-black font-black uppercase text-sm tracking-widest rounded-full"
        >
          Return Home
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-center mb-16">
          <div className="flex items-center gap-4">
             {[1, 2, 3].map((s) => (
               <React.Fragment key={s}>
                 <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold border-2 transition-all ${
                   step === s ? 'bg-white text-black border-white' : step > s ? 'bg-emerald-500 text-white border-emerald-500' : 'glass text-zinc-600 border-zinc-800'
                 }`}>
                   {step > s ? <Check size={20} /> : s}
                 </div>
                 {s < 3 && <div className={`w-16 h-0.5 ${step > s ? 'bg-emerald-500' : 'bg-zinc-800'}`}></div>}
               </React.Fragment>
             ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Form Area */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="glass p-10 rounded-[3rem] space-y-8">
              {step === 1 && (
                <div className="space-y-8 animate-in slide-in-from-right-4 duration-500">
                   <h3 className="text-3xl font-black uppercase italic tracking-tighter">Configure Vehicle</h3>
                   
                   <div className="space-y-4">
                     <label className="text-xs font-black uppercase tracking-widest text-zinc-500">Select Model</label>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                       {ALL_CARS.map((c) => (
                         <div 
                           key={c.id}
                           onClick={() => {
                             setCar(c);
                             setDetails(prev => ({ ...prev, carId: c.id, variant: c.variants[0].name, color: c.colors[0].name }));
                           }}
                           className={`p-4 rounded-2xl cursor-pointer border-2 transition-all flex items-center gap-4 ${
                             car.id === c.id ? 'border-white bg-white/5' : 'border-transparent glass opacity-60'
                           }`}
                         >
                           <img src={c.image} alt={c.name} className="w-16 h-10 object-cover rounded-lg" />
                           <span className="font-bold">{c.name}</span>
                         </div>
                       ))}
                     </div>
                   </div>

                   <div className="space-y-4">
                     <label className="text-xs font-black uppercase tracking-widest text-zinc-500">Select Variant</label>
                     <div className="grid grid-cols-2 gap-4">
                       {car.variants.map((v) => (
                         <div 
                           key={v.name}
                           onClick={() => setDetails(prev => ({ ...prev, variant: v.name }))}
                           className={`p-4 rounded-2xl cursor-pointer border-2 transition-all ${
                             details.variant === v.name ? 'border-white bg-white/5' : 'border-transparent glass opacity-60'
                           }`}
                         >
                           <p className="font-bold">{v.name}</p>
                           <p className="text-xs text-zinc-500">₹{v.price.toLocaleString('en-IN')}</p>
                         </div>
                       ))}
                     </div>
                   </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-8 animate-in slide-in-from-right-4 duration-500">
                  <h3 className="text-3xl font-black uppercase italic tracking-tighter">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Full Name</label>
                      <input name="Full Name" required className="w-full glass rounded-xl p-4 outline-none focus:border-white transition-colors" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Phone Number</label>
                      <input name="Phone" required className="w-full glass rounded-xl p-4 outline-none focus:border-white transition-colors" placeholder="+91 00000 00000" />
                    </div>
                    <div className="md:col-span-2 space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Email Address</label>
                      <input name="Email" type="email" required className="w-full glass rounded-xl p-4 outline-none focus:border-white transition-colors" placeholder="john@example.com" />
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-8 animate-in slide-in-from-right-4 duration-500">
                  <h3 className="text-3xl font-black uppercase italic tracking-tighter">Delivery Address</h3>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Full Delivery Address</label>
                      <textarea name="Address" required rows={4} className="w-full glass rounded-xl p-4 outline-none focus:border-white transition-colors" placeholder="Street, Building, Flat No."></textarea>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">City</label>
                        <input name="City" required className="w-full glass rounded-xl p-4 outline-none focus:border-white transition-colors" placeholder="Mumbai" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">ZIP Code</label>
                        <input name="Zip Code" required className="w-full glass rounded-xl p-4 outline-none focus:border-white transition-colors" placeholder="400001" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex gap-4 pt-4">
                {step > 1 && (
                  <button 
                    type="button"
                    disabled={isLoading}
                    onClick={() => setStep(step - 1)}
                    className="flex-1 py-5 glass rounded-full font-bold uppercase text-xs tracking-widest disabled:opacity-50"
                  >
                    Previous
                  </button>
                )}
                <button 
                  type="submit"
                  disabled={isLoading}
                  className="flex-[2] py-5 bg-white text-black font-black uppercase text-xs tracking-widest rounded-full hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 disabled:opacity-80"
                >
                  {isLoading ? (
                    <><Loader2 className="animate-spin" size={20} /> Processing...</>
                  ) : (
                    step === 3 ? 'Confirm Order' : 'Next Step'
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Summary Sidebar */}
          <div className="space-y-8">
            <div className="glass p-8 rounded-[3rem] sticky top-24">
              <h4 className="text-lg font-black uppercase tracking-tighter mb-6">Booking Summary</h4>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-center">
                  <img src={car.image} alt={car.name} className="w-24 h-16 object-cover rounded-2xl" />
                  <div>
                    <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">{car.brand}</p>
                    <p className="font-bold text-lg">{car.name}</p>
                  </div>
                </div>

                <div className="space-y-3 py-6 border-y border-white/10">
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-500 font-bold">Variant</span>
                    <span className="font-bold">{details.variant}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-500 font-bold">Color</span>
                    <span className="font-bold">{details.color}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <span className="text-zinc-500 font-bold">Ex-Showroom Price</span>
                    <span className="font-black text-xl">₹{car.basePrice.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="p-4 glass rounded-2xl flex items-center gap-3">
                    <ShieldCheck size={20} className="text-emerald-500" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Included: 5 Year Warranty</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
               <div className="flex items-center gap-3 p-4 glass rounded-3xl opacity-60">
                 <CreditCard size={18} />
                 <span className="text-[10px] font-bold uppercase tracking-widest">Safe & Secure Payments</span>
               </div>
               <div className="flex items-center gap-3 p-4 glass rounded-3xl opacity-60">
                 <Truck size={18} />
                 <span className="text-[10px] font-bold uppercase tracking-widest">Home Delivery Available</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
