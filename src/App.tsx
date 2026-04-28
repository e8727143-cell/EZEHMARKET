import { useState, useMemo } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { PRODUCTS } from './data';
import { Product } from './types';
import ProductCard from './components/ProductCard';
import ProductDetail from './components/ProductDetail';
import SearchBar from './components/SearchBar';

export default function App() {
  const [search, setSearch] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { scrollYProgress } = useScroll();
  
  // Fondo con movimiento suave
  const bgTranslateY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.15, 0.25, 0.15]);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      const matchesSearch = product.title.toLowerCase().includes(search.toLowerCase()) ||
                          product.description.toLowerCase().includes(search.toLowerCase());
      return matchesSearch;
    });
  }, [search]);

  return (
    <div className={`relative min-h-screen bg-ezeh-black text-ezeh-white selection:bg-ezeh-red/30 overflow-x-hidden ${selectedProduct ? 'h-screen overflow-hidden' : ''}`}>
      
      {/* FONDO DINAMICO (Reflejo que se mueve) */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div 
          style={{ y: bgTranslateY, opacity: bgOpacity }}
          className="absolute -top-[10%] -left-[10%] w-[120%] h-[120%] flex flex-col items-center justify-around"
        >
          <div className="w-[800px] h-[800px] bg-ezeh-red rounded-full blur-[180px] mix-blend-screen opacity-40" />
          <div className="w-[600px] h-[600px] bg-ezeh-gold rounded-full blur-[150px] mix-blend-screen opacity-20 self-end mr-20" />
        </motion.div>
      </div>

      {/* Header Section */}
      <header className="sticky top-0 z-50 bg-ezeh-black/40 backdrop-blur-md pt-4 pb-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <h1 className="font-display text-4xl md:text-6xl font-black tracking-tighter text-ezeh-white drop-shadow-[0_5px_15px_rgba(211,47,47,0.4)]">
              EZEH<span className="text-ezeh-red"> MARKET</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="w-full"
          >
            <SearchBar value={search} onChange={setSearch} />
          </motion.div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 py-6 perspective-1000">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 md:gap-x-12 md:gap-y-4">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product: Product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onInterest={setSelectedProduct}
                />
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-20 text-center gap-4"
          >
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center border border-white/10 italic text-ezeh-gold text-2xl font-display">?</div>
            <p className="text-xl font-display text-ezeh-white">No hay resultados</p>
            <button 
              onClick={() => setSearch('')}
              className="mt-4 text-ezeh-red font-bold text-sm uppercase tracking-widest"
            >
              Ver todo
            </button>
          </motion.div>
        )}

        <div className="mt-10 mb-24 flex flex-col items-center">
          <motion.a
            href={`https://wa.me/59895188864?text=${encodeURIComponent("Buenas Ezeh, me gustaría saber si tienes disponible: ")}`}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full max-w-xs bg-white text-black font-black py-4 rounded-xl uppercase tracking-[0.2em] text-[9px] hover:bg-ezeh-red hover:text-white transition-all text-center shadow-xl flex items-center justify-center"
          >
            Quiero una IA en específico
          </motion.a>
          <div className="mt-8 flex flex-col items-center gap-2 text-center">
            <span className="text-[10px] md:text-sm font-black uppercase tracking-[0.3em] text-white">Garantia total por EZEH</span>
            <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-white/80">Soporte horario (GMT-3) de 08:00 AM a 23:00 PM</span>
          </div>
        </div>
      </main>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <ProductDetail 
            product={selectedProduct} 
            onClose={() => setSelectedProduct(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}
