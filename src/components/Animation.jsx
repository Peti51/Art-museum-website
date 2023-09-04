import React from "react";
import { motion } from 'framer-motion';

const animation = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, x: -100, transition: { duration: 0.5, ease: "easeIn" } },
}

export const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}
      variants={animation}
      initial='initial'
      animate='animate'
      exit='exit'>
      {children}
    </motion.div>
  )
}