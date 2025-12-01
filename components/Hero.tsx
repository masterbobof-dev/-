import React from 'react';
import { CreditCard, ShieldCheck, Coins, Coffee, FileCheck } from 'lucide-react';
import { HERO_BG_IMAGE } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src={HERO_BG_IMAGE}
          alt="Шиномонтаж Forsage Фасад" 
          className="w-full h-full object-cover object-center md:object-top opacity-50"
        />
        {/* Gradient Overlay - Darker at top for text readability, lighter at bottom to show image details */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-[#09090b]"></div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12 md:py-20 flex flex-col gap-8">
        
        <div className="space-y-6">
          <div className="bg-[#FFC300]/10 border-l-4 border-[#FFC300] p-6 backdrop-blur-sm rounded-r-lg shadow-[0_0_30px_rgba(255,195,0,0.1)]">
            <div className="flex items-start gap-4">
              <ShieldCheck className="text-[#FFC300] w-10 h-10 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl md:text-5xl font-black text-[#FFC300] uppercase leading-tight drop-shadow-lg">
                  УВАГА!<br/>УСІМ ВІЙСЬКОВИМ ЗНИЖКА!
                </h2>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Payment Block */}
            <div className="bg-zinc-800/60 backdrop-blur-md border border-zinc-700 p-5 rounded-xl flex items-center gap-4 hover:border-[#FFC300] transition-colors group">
              <div className="p-3 bg-zinc-900 rounded-full group-hover:bg-[#FFC300] transition-colors">
                <CreditCard className="text-[#FFC300] w-8 h-8 group-hover:text-black transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white uppercase group-hover:text-[#FFC300] transition-colors">
                Розрахунок карткою
                <span className="block text-sm font-normal text-zinc-400 normal-case mt-1">(термінал працює)</span>
              </h3>
            </div>

            {/* Change Block */}
            <div className="bg-zinc-800/60 backdrop-blur-md border border-zinc-700 p-5 rounded-xl flex items-center gap-4 hover:border-[#FFC300] transition-colors group">
              <div className="p-3 bg-zinc-900 rounded-full group-hover:bg-[#FFC300] transition-colors">
                <Coins className="text-[#FFC300] w-8 h-8 group-hover:text-black transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white uppercase group-hover:text-[#FFC300] transition-colors">
                Завжди маємо здачу
              </h3>
            </div>

            {/* Comfort Block */}
            <div className="bg-zinc-800/60 backdrop-blur-md border border-zinc-700 p-5 rounded-xl flex items-center gap-4 hover:border-[#FFC300] transition-colors group">
              <div className="p-3 bg-zinc-900 rounded-full group-hover:bg-[#FFC300] transition-colors">
                <Coffee className="text-[#FFC300] w-8 h-8 group-hover:text-black transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white uppercase group-hover:text-[#FFC300] transition-colors">
                Гаряча кава та чай
                <span className="block text-sm font-normal text-zinc-400 normal-case mt-1">(холодні напої)</span>
              </h3>
            </div>

            {/* Fixed Prices Block */}
            <div className="bg-zinc-800/60 backdrop-blur-md border border-zinc-700 p-5 rounded-xl flex items-center gap-4 hover:border-[#FFC300] transition-colors group">
              <div className="p-3 bg-zinc-900 rounded-full group-hover:bg-[#FFC300] transition-colors">
                <FileCheck className="text-[#FFC300] w-8 h-8 group-hover:text-black transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white uppercase group-hover:text-[#FFC300] transition-colors">
                Фіксовані ціни
                <span className="block text-sm font-normal text-zinc-400 normal-case mt-1">(на всі послуги)</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;