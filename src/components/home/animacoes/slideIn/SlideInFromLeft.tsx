import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './SlideIn.module.css';

interface SlideInFromLeftProps {
  children: React.ReactNode;
  delay?: number;
}

const SlideInFromLeft: React.FC<SlideInFromLeftProps> = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const animationVariants = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 100,
        delay, // Aplica o atraso definido pela propriedade
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

export default SlideInFromLeft;
