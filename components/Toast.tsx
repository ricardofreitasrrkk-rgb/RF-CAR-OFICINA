
import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react';
import { useApp } from '../AppContext';

const Toast: React.FC = () => {
  const { notifications, removeNotification } = useApp();

  return (
    <div className="fixed top-24 right-8 z-[1000] flex flex-col gap-3 pointer-events-none">
      <AnimatePresence>
        {notifications.map((n) => (
          <motion.div
            key={n.id}
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
            className={`pointer-events-auto flex items-center gap-4 px-6 py-4 rounded-2xl shadow-2xl border backdrop-blur-xl min-w-[300px] ${
              n.type === 'success' ? 'bg-green-500/10 border-green-500/20 text-green-500' :
              n.type === 'error' ? 'bg-red-500/10 border-red-500/20 text-red-500' :
              'bg-blue-500/10 border-blue-500/20 text-blue-500'
            }`}
          >
            {n.type === 'success' && <CheckCircle className="w-5 h-5" />}
            {n.type === 'error' && <AlertCircle className="w-5 h-5" />}
            {n.type === 'info' && <Info className="w-5 h-5" />}
            
            <span className="flex-1 font-bold text-sm">{n.message}</span>
            
            <button 
              onClick={() => removeNotification(n.id)}
              className="p-1 hover:bg-white/10 rounded-full transition"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Toast;
