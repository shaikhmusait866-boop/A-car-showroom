
import React, { useState } from 'react';
import { X, Mail, Github, Chrome, Apple } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAuthSuccess: (email: string) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onAuthSuccess }) => {
  const [email, setEmail] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative glass p-10 rounded-[3rem] w-full max-w-md animate-in zoom-in duration-300">
        <button onClick={onClose} className="absolute top-8 right-8 text-zinc-500 hover:text-white">
          <X size={24} />
        </button>

        <div className="text-center mb-10 space-y-2">
           <h2 className="text-3xl font-black uppercase italic tracking-tighter">Welcome Back</h2>
           <p className="text-zinc-500 text-sm">Join the exclusive world of Premium Showroom.</p>
        </div>

        <div className="space-y-4 mb-10">
           <button className="w-full py-4 glass rounded-2xl flex items-center justify-center gap-4 hover:bg-white/10 transition-all font-bold text-sm">
             <Chrome size={20} /> Continue with Google
           </button>
           <button className="w-full py-4 glass rounded-2xl flex items-center justify-center gap-4 hover:bg-white/10 transition-all font-bold text-sm">
             <Apple size={20} /> Continue with Apple ID
           </button>
        </div>

        <div className="relative mb-10">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/10"></div></div>
          <div className="relative flex justify-center text-xs uppercase font-black text-zinc-600 bg-transparent px-4">
            <span className="glass px-2">OR CONTINUE WITH EMAIL</span>
          </div>
        </div>

        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onAuthSuccess(email || 'guest@example.com'); }}>
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Email Address</label>
            <input 
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 outline-none focus:border-white transition-colors" 
              placeholder="name@example.com" 
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Password</label>
            <input 
              required
              type="password"
              className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 outline-none focus:border-white transition-colors" 
              placeholder="••••••••" 
            />
          </div>
          <button className="w-full py-4 bg-white text-black font-black uppercase text-sm tracking-widest rounded-full hover:bg-zinc-200 transition-all">
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        <p className="text-center mt-8 text-xs font-bold text-zinc-500 uppercase tracking-widest">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="text-white ml-2 hover:underline"
          >
            {isLogin ? 'Sign Up' : 'Log In'}
          </button>
        </p>
      </div>
    </div>
  );
};
