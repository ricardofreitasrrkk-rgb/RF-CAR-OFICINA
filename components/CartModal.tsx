
import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, Trash2, Plus, Minus, CreditCard } from 'lucide-react';
import { useApp } from '../AppContext';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, clearCart, addNotification } = useApp();

  const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  const handleCheckout = () => {
    if (cart.length === 0) return;
    addNotification('Processando pagamento via Multicaixa Express...', 'info');
    setTimeout(() => {
      addNotification('Pagamento confirmado! O seu pedido está em processamento.', 'success');
      clearCart();
      onClose();
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-slate-900 border-l border-white/10 z-[101] flex flex-col shadow-2xl"
          >
            <div className="p-6 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShoppingBag className="text-blue-500" />
                <h2 className="text-xl font-black uppercase tracking-tight">O Seu Carrinho</h2>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full transition">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-40">
                  <ShoppingBag className="w-16 h-16" />
                  <p className="font-bold uppercase tracking-widest text-xs">O carrinho está vazio</p>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-4 bg-slate-950/50 p-4 rounded-2xl border border-white/5 group">
                    <div className="flex-1">
                      <h4 className="font-bold text-sm mb-1">{item.name}</h4>
                      <p className="text-blue-400 font-black text-xs">{item.priceFormatted}</p>
                      <div className="flex items-center gap-4 mt-3">
                        <div className="flex items-center gap-2 bg-slate-900 rounded-lg px-2 py-1 border border-white/5">
                          <span className="text-[10px] font-black w-4 text-center">{item.quantity}x</span>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-[10px] font-black uppercase text-red-500/60 hover:text-red-500 transition"
                        >
                          Remover
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 bg-slate-950/80 border-t border-white/10 space-y-6">
                <div className="flex justify-between items-end">
                  <p className="text-xs font-black text-slate-500 uppercase tracking-widest">Total Estimado</p>
                  <p className="text-3xl font-black text-white">{total.toLocaleString()} Kz</p>
                </div>
                <button 
                  onClick={handleCheckout}
                  className="w-full py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black uppercase text-xs flex items-center justify-center gap-3 shadow-xl shadow-blue-600/20 transition-all"
                >
                  <CreditCard className="w-5 h-5" /> Finalizar Compra
                </button>
                <p className="text-[10px] text-center text-slate-500 uppercase font-bold tracking-wider">Pagamento Seguro via Gateway RF CAR</p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartModal;
