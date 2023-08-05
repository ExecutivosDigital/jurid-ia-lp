import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './SlideIn.module.css';

interface SlideInFromBottomProps {
  children: React.ReactNode;
  delay?: number;
}

const SlideInFromBottom: React.FC<SlideInFromBottomProps> = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const animationVariants = {
    hidden: {
      y: 100, // Inicialmente fora da tela abaixo
      opacity: 0,
    },
    visible: {
      y: 0, // Posição final na coordenada y
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 100,
        delay,
      },
    },
  };

  return (
    <motion.div
      className={styles.slideInFromLeft}
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={animationVariants}
    >
      {children}
    </motion.div>
  );
};

export default SlideInFromBottom;
