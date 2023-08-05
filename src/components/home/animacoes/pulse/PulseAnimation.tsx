import { motion } from 'framer-motion';

interface PulseAnimationProps {
  children: React.ReactNode;
}

const PulseAnimation: React.FC<PulseAnimationProps> = ({ children }) => {
  return (
    <motion.div
      style={{ backgroundColor: 'transparent' }}
      initial={{ scale: 1 }}
      animate={{ scale: [1, 1.008, 1] }} // Define os estágios da animação (normal, ampliado, normal)
      transition={{ duration: 1.5, repeat: Infinity }} // Duração da animação e repetição infinita
    >
      {children}
    </motion.div>
  );
};

export default PulseAnimation;