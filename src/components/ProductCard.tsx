import { motion } from 'motion/react';
import { Star, ShoppingCart } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onInterest: (product: Product) => void;
  key?: string;
}

export default function ProductCard({ product, onInterest }: ProductCardProps) {
  const maxDiscount = product.options && product.options.length > 0
    ? Math.max(...product.options.map(opt => Math.round((1 - (opt.price / opt.originalPrice)) * 100)))
    : 0;

  return (
    <div className="relative group mb-6 md:mb-10 px-2" id={`product-tilt-${product.id}`}>
      <motion.div
        layout
        initial={{ opacity: 0, rotateX: 10, y: 20 }}
        whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
        whileHover={{ 
          rotateX: 5, 
          rotateY: -2,
          scale: 1.05,
          z: 30,
          transition: { duration: 0.1 }
        }}
        viewport={{ once: true }}
        className="bg-ezeh-black border border-ezeh-white/20 rounded-xl overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.6)] preserve-3d relative flex flex-col"
      >
        {/* Shine Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none group-hover:opacity-40 transition-opacity z-20" />

        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden shrink-0">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
          
          {/* Discount Badge */}
          {maxDiscount > 0 && (
            <div className="absolute top-2 left-2 z-30">
              <span className="bg-ezeh-red text-white text-[8px] md:text-[10px] font-black px-2 py-1 rounded-sm uppercase tracking-tighter shadow-lg">
                Hasta {maxDiscount}% OFF
              </span>
            </div>
          )}
        </div>

        {/* Info Content - Moved Below Image */}
        <div className="p-3 md:p-4 bg-ezeh-black flex flex-col gap-2 border-t border-white/5">
          <div className="flex flex-col gap-1 overflow-hidden">
            <h3 className="font-display text-sm md:text-lg font-bold text-ezeh-white leading-none whitespace-nowrap truncate">
              {product.title}
            </h3>
            <div className="flex justify-between items-center mt-1">
              <span className="text-ezeh-gold font-bold text-base md:text-xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                ${product.price}
              </span>
              <div className="flex items-center text-ezeh-gold gap-0.5 bg-white/5 px-1.5 py-0.5 rounded-md">
                <Star className="w-2.5 h-2.5 fill-ezeh-gold" />
                <span className="text-[9px] font-bold">{product.rating}</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Button OUTSIDE the container */}
      <motion.button
        onClick={() => onInterest(product)}
        whileTap={{ scale: 0.95 }}
        className="w-full mt-3 bg-ezeh-white text-ezeh-black font-black text-[10px] md:text-xs py-3 rounded-lg uppercase tracking-widest shadow-[0_4px_15px_rgba(255,255,255,0.1)] active:shadow-none active:translate-y-[2px] transition-all"
        id={`interest-btn-${product.id}`}
      >
        ME INTERESA
      </motion.button>
    </div>
  );
}
