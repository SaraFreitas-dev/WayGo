import React from 'react';
import "./Services.css";
import '../App.css';
import lisbonMotion from "../assets/lisbonMotion.gif"
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Services = () => {
    const boxVariant = {
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
        hidden: { opacity: 0, scale: 0 }
      };

        const control = useAnimation();
        const [ref, inView] = useInView();
      
        useEffect(() => {
          if (inView) {
            control.start("visible");
          } else {
            control.start("hidden");
          }
        }, [control, inView]);



  return (
    <section className="Services" id="services">
         <motion.div
      className="Services"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
        <div className="motion-content">
            <motion.div whileHover={{scale:1.3}}>
         <img className='motion' src={lisbonMotion}/>
         </motion.div>
         </div>

      <div className="services-content">
      <motion.div whileHover={{scale:1.3}}>
        <p>A small stripe image of inside of car with Mauro</p>
        <br></br>
        <h3>Our Services</h3>
        <p>Types of services given by wayGo</p>
        <p>Simple texts explaining each</p>
        <p>show cars available img, with hover animation</p>
        </motion.div>
      </div>
</motion.div>
    </section>
  )
}

export default Services;
