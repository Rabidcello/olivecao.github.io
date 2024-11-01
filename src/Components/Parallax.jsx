import React from 'react';
import { motion } from 'framer-motion';
import Oliver from './images/690412.jpg'

const Parallax = () => {
  return (
    <section className="parallax">
      <motion.div className="parallax-text"
        animate = {{y:[-100, 0]}}
        transition={{duration:2}}
      >Oliver Cao</motion.div>
      {/*<div className = "parallaxImage" style = {{backgroundImage:{Oliver}, backgroundPosition:'bottom', backgroundSize:'cover'}} ></div>*/}
    </section>
  );
};

export default Parallax;
