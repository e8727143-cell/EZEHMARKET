import { useState } from 'react';
import { motion } from 'motion/react';
import { Product } from '../types';
import { ChevronLeft, Star, CheckCircle, TrendingDown } from 'lucide-react';

interface ProductDetailProps {
  product: Product;
  onClose: () => void;
}

export default function ProductDetail({ product, onClose }: ProductDetailProps) {
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(0);

  const handlePurchase = () => {
    const selectedPlan = product.options[selectedPlanIndex];
    const message = `Hola Ezeh, quiero adquirir ${product.title} por ${selectedPlan.duration}`;
    const whatsappUrl = `https://wa.me/59895188864?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', damping: 30, stiffness: 300 }}
      className="fixed inset-0 z-[200] bg-ezeh-black overflow-y-auto flex flex-col selection:bg-ezeh-red selection:text-white"
    >
      {/* Back Button */}
      <button 
        onClick={onClose}
        className="fixed top-6 left-6 z-[220] text-white/50 hover:text-white transition-all transform hover:scale-110 active:scale-95"
        id="back-btn"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>

      <div className="flex-1 flex flex-col lg:flex-row">
        {/* Gallery / Image Section */}
        <div className="w-full lg:w-1/2 h-[50vh] lg:h-screen lg:sticky lg:top-0">
          <div className="w-full h-full relative">
            <img 
              src={product.image} 
              alt={product.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ezeh-black via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-ezeh-black" />
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 p-6 lg:p-16 flex flex-col gap-10 bg-ezeh-black relative z-10">
          <div className="space-y-4">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ezeh-red/10 border border-ezeh-red/20 text-ezeh-red text-[9px] font-black uppercase tracking-widest">
                <CheckCircle className="w-3 h-3" />
                Acceso Premium Verificado
             </div>
             
             <h2 className="text-4xl lg:text-6xl font-display font-black tracking-tighter leading-none text-white">
              {product.title}
             </h2>

             <div className="flex items-center gap-4">
                <div className="flex items-center text-ezeh-gold gap-1 px-2 py-1 bg-ezeh-gold/10 border border-ezeh-gold/20 rounded-lg">
                  <Star className="w-3 h-3 fill-ezeh-gold" />
                  <span className="font-bold text-[10px]">{product.rating} / 5.0</span>
                </div>
                <div className="text-white/20 text-[8px] uppercase font-black tracking-widest">Licencia Digital Inmediata</div>
             </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-[9px] uppercase tracking-[0.3em] text-ezeh-red font-black">Información</h4>
            <p className="text-lg lg:text-xl text-white/80 font-medium leading-tight tracking-tight">
              {product.description}
            </p>
          </div>

          {/* Benefits Section */}
          <div className="space-y-6">
            <h4 className="text-[9px] uppercase tracking-[0.3em] text-ezeh-gold font-black">Beneficios Premium</h4>
            <div className="grid grid-cols-1 gap-4">
              {product.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-ezeh-red shrink-0" />
                  <span className="text-sm text-white/70 leading-tight">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
             <div className="flex items-end justify-between border-b border-white/5 pb-2">
                <h4 className="text-[9px] uppercase tracking-[0.3em] text-ezeh-gold font-black">Selecciona tu Plan</h4>
                <span className="text-[8px] text-white/40 font-bold uppercase tracking-wider">Disponibilidad 24/7</span>
             </div>

             <div className="grid grid-cols-1 gap-12">
                {product.options.map((option, idx) => (
                  <div key={idx} className="flex flex-col gap-2">
                    {/* Discount Badge Above Container */}
                    <div className="flex justify-start">
                      <div className="bg-ezeh-red text-white py-1 px-3 rounded-full text-[9px] font-black shadow-[0_5px_15px_rgba(231,76,60,0.3)] uppercase tracking-wider">
                        Ahorras {Math.round((1 - (option.price / option.originalPrice)) * 100)}% HOY
                      </div>
                    </div>

                    <motion.div 
                      layout
                      onClick={() => setSelectedPlanIndex(idx)}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className={`group border p-6 rounded-2xl flex items-center justify-between transition-all cursor-pointer relative ${
                        selectedPlanIndex === idx 
                          ? 'bg-ezeh-red/10 border-ezeh-red/50' 
                          : 'bg-white/[0.03] border-white/5'
                      }`}
                    >
                       <div className="flex flex-col">
                          <span className={`text-[8px] font-black uppercase tracking-widest mb-1 ${
                            selectedPlanIndex === idx ? 'text-ezeh-red' : 'text-white/30'
                          }`}>
                            {option.duration}
                          </span>
                          <span className="text-3xl font-black tracking-tighter text-white">${option.price}</span>
                       </div>
                       
                       <div className="flex flex-col items-end">
                          <span className="text-[9px] text-white/20 font-bold mb-1 italic">Precio Oferta EZEH</span>
                          <div className="flex items-center gap-1 text-ezeh-gold font-black text-xs uppercase tracking-tighter">
                             <TrendingDown className="w-3 h-3" />
                             <span>-$ {Math.round((option.originalPrice - option.price) * 100) / 100} de Descuento</span>
                          </div>
                       </div>
                    </motion.div>

                    {/* Comparison Pricing Below Container */}
                    <div className="grid grid-cols-2 gap-4 px-2">
                       <div className="flex flex-col">
                          <span className="text-[7px] font-black text-white/20 uppercase tracking-widest">Precio Original Mes</span>
                          <span className="text-[11px] font-bold text-white/40 line-through">
                            ${product.options[0].originalPrice.toFixed(2)} USD
                          </span>
                       </div>
                       <div className="flex flex-col items-end">
                          <span className="text-[7px] font-black text-white/20 uppercase tracking-widest">Precio Original Año</span>
                          <span className="text-[11px] font-bold text-white/40 line-through">
                            ${(product.options[0].originalPrice * 12).toFixed(2)} USD
                          </span>
                       </div>
                    </div>
                  </div>
                ))}
             </div>
          </div>

          <div className="pt-10 pb-20 mt-auto">
             <button 
              onClick={handlePurchase}
              className="w-full bg-white text-black font-black py-6 rounded-2xl uppercase tracking-[0.2em] text-[10px] hover:bg-ezeh-red hover:text-white transition-all transform shadow-2xl flex items-center justify-center gap-3"
             >
              ADQUIRIR ACCESO AHORA
             </button>
             <div className="flex justify-center items-center gap-6 mt-6 opacity-30">
                <span className="text-[7px] font-black uppercase tracking-widest">Garantía Total</span>
                <span className="text-[7px] font-black uppercase tracking-widest">Activación Al Instante</span>
             </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
