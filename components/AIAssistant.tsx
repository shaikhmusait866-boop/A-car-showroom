
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Sparkles } from 'lucide-react';
import { getCarRecommendation } from '../geminiService';

export const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'bot', content: string }[]>([
    { role: 'bot', content: "Welcome to Premium Showroom! I'm your AI assistant. How can I help you find your perfect Honda or Kia today?" }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsTyping(true);

    const response = await getCarRecommendation(userMsg);
    setMessages(prev => [...prev, { role: 'bot', content: response || "I'm sorry, I couldn't process that right now." }]);
    setIsTyping(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {isOpen ? (
        <div className="glass w-80 md:w-96 rounded-[2.5rem] flex flex-col shadow-2xl border-white/20 animate-in slide-in-from-bottom-8 duration-300">
          <div className="p-6 border-b border-white/10 flex items-center justify-between bg-white/5 rounded-t-[2.5rem]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white text-black rounded-xl flex items-center justify-center">
                <Sparkles size={20} />
              </div>
              <div>
                <p className="text-sm font-black uppercase italic tracking-tighter leading-none">Showroom Assistant</p>
                <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest mt-1">Powered by Gemini</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-zinc-500 hover:text-white"><X size={20} /></button>
          </div>

          <div ref={scrollRef} className="h-96 overflow-y-auto p-6 space-y-6">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${
                  m.role === 'user' 
                  ? 'bg-white text-black font-semibold rounded-tr-none' 
                  : 'glass text-zinc-300 rounded-tl-none'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="glass p-4 rounded-2xl rounded-tl-none flex gap-1">
                  <span className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce delay-100"></span>
                  <span className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce delay-200"></span>
                </div>
              </div>
            )}
          </div>

          <div className="p-6 border-t border-white/10">
            <div className="flex gap-2">
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about mileage, pricing..."
                className="w-full glass rounded-xl p-3 text-sm outline-none focus:border-white transition-colors"
              />
              <button 
                onClick={handleSend}
                className="p-3 bg-white text-black rounded-xl hover:bg-zinc-200 transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-white text-black rounded-2xl shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all group"
        >
          <MessageSquare size={28} className="group-hover:rotate-12 transition-transform" />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-4 border-black animate-pulse"></div>
        </button>
      )}
    </div>
  );
};
