
import React from 'react';
import { Car, ChevronRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-zinc-950 border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white text-black flex items-center justify-center rounded-lg">
                <Car size={18} />
              </div>
              <span className="text-lg font-black tracking-tighter uppercase italic">Premium <span className="text-zinc-400">Showroom</span></span>
            </div>
            <p className="text-sm text-zinc-500 leading-relaxed">The region's leading authorized dealer for Honda and Kia. Experience luxury automotive services that exceed expectations.</p>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-widest mb-8 text-white">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Models', 'EMI Calculator', 'Comparison', 'Contact'].map((link) => (
                <li key={link}>
                  <button 
                    onClick={() => onNavigate(link.toLowerCase().replace(' ', ''))}
                    className="text-sm text-zinc-500 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" /> {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-widest mb-8 text-white">Showcase</h4>
            <ul className="space-y-4">
              {['Honda City', 'Honda Elevate', 'Kia Seltos', 'Kia Sonet', 'Kia EV6'].map((link) => (
                <li key={link}>
                  <button 
                    onClick={() => onNavigate('models')}
                    className="text-sm text-zinc-500 hover:text-white transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
             <h4 className="text-xs font-black uppercase tracking-widest mb-2 text-white">Subscribe</h4>
             <p className="text-sm text-zinc-500">Get the latest automotive news and offers.</p>
             <div className="flex">
               <input className="bg-white/5 border border-white/10 rounded-l-xl p-3 text-xs w-full outline-none focus:border-white transition-colors" placeholder="Email Address" />
               <button className="bg-white text-black px-4 rounded-r-xl font-bold text-xs uppercase">Join</button>
             </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold text-zinc-600 uppercase tracking-widest">
           <p>© 2024 Premium Car Showroom. All Rights Reserved.</p>
           <div className="flex gap-8">
             <button className="hover:text-white">Privacy Policy</button>
             <button className="hover:text-white">Terms of Service</button>
             <button className="hover:text-white">Cookie Policy</button>
           </div>
        </div>
      </div>
    </footer>
  );
};
