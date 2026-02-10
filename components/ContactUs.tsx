
import React from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Twitter } from 'lucide-react';

export const ContactUs: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left Side: Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-6xl font-black italic uppercase tracking-tighter gradient-text leading-tight">Get in <br /> Touch.</h2>
              <p className="text-zinc-500 mt-6 max-w-sm">Have questions about our models or ready to schedule your VIP test drive? Our team is standing by.</p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center text-zinc-400">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Call Us</p>
                  <p className="text-xl font-bold">+91 1800 200 400</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center text-zinc-400">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Email Us</p>
                  <p className="text-xl font-bold">concierge@premiumshowroom.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center text-zinc-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Visit Us</p>
                  <p className="text-xl font-bold">A-12, Automobile Hub, Mumbai, IN</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <button key={i} className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all">
                  <Icon size={20} />
                </button>
              ))}
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="glass p-12 rounded-[4rem] relative">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 blur-3xl rounded-full"></div>
            <form className="space-y-8 relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Full Name</label>
                  <input className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 outline-none focus:border-white transition-colors" placeholder="John Wick" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Email Address</label>
                  <input className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 outline-none focus:border-white transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Subject</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 outline-none focus:border-white transition-colors">
                  <option className="bg-zinc-900">Book a Test Drive</option>
                  <option className="bg-zinc-900">General Inquiry</option>
                  <option className="bg-zinc-900">Financing Questions</option>
                  <option className="bg-zinc-900">Service Appointment</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Message</label>
                <textarea rows={5} className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 outline-none focus:border-white transition-colors" placeholder="Tell us how we can help..."></textarea>
              </div>
              <button className="w-full py-5 bg-white text-black font-black uppercase text-sm tracking-widest rounded-full flex items-center justify-center gap-3 hover:bg-zinc-200 transition-all">
                Send Message <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
