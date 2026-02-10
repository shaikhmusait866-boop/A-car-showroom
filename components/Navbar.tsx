
import React, { useState, useEffect } from 'react';
import { Menu, X, Car, User, LogOut } from 'lucide-react';

interface NavbarProps {
  onNavigate: (page: string) => void;
  onAuthClick: () => void;
  user: { email: string } | null;
  onLogout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, onAuthClick, user, onLogout }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: 'home' },
    { name: 'Models', path: 'models' },
    { name: 'Price List', path: 'models' },
    { name: 'EMI Calculator', path: 'emi' },
    { name: 'Compare', path: 'compare' },
    { name: 'Test Drive', path: 'contact' },
    { name: 'Online Order', path: 'order' },
    { name: 'Contact', path: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => onNavigate('home')}
        >
          <div className="w-10 h-10 bg-white text-black flex items-center justify-center rounded-lg group-hover:rotate-12 transition-transform">
            <Car size={24} />
          </div>
          <span className="text-xl font-black tracking-tighter uppercase italic">
            Premium <span className="text-zinc-400">Showroom</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => onNavigate(link.path)}
              className="text-sm font-semibold uppercase tracking-widest text-zinc-300 hover:text-white transition-colors"
            >
              {link.name}
            </button>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-4">
              <span className="text-xs text-zinc-400">{user.email}</span>
              <button 
                onClick={onLogout}
                className="p-2 bg-zinc-800 rounded-full hover:bg-zinc-700 transition-colors"
              >
                <LogOut size={18} />
              </button>
            </div>
          ) : (
            <button 
              onClick={onAuthClick}
              className="flex items-center gap-2 px-6 py-2 bg-white text-black text-sm font-bold uppercase rounded-full hover:bg-zinc-200 transition-all active:scale-95"
            >
              <User size={16} /> Login
            </button>
          )}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 glass h-screen animate-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col items-center gap-6 py-12">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  onNavigate(link.path);
                  setIsMobileMenuOpen(false);
                }}
                className="text-lg font-bold uppercase tracking-widest"
              >
                {link.name}
              </button>
            ))}
            {!user && (
              <button 
                onClick={() => {
                  onAuthClick();
                  setIsMobileMenuOpen(false);
                }}
                className="mt-4 px-8 py-3 bg-white text-black font-black uppercase rounded-full"
              >
                Login / Signup
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};
