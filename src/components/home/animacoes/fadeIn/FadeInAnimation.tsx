import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface FadeInWithIntersectionProps {
  children: React.ReactNode;
  delay?: number;
}

const FadeInAnimation: React.FC<FadeInWithIntersectionProps> = ({ children, delay = 0}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,

  });

  return (
    <motion.div
      style={{ backgroundColor: 'transparent' }}
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }} // Altera a opacidade com base na visibilidade
      transition={{ duration: 0.5,delay }} // Duração da animação
    >
      {children}
    </motion.div>
  );
};


export default FadeInAnimation;