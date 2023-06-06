import React from 'react';
import "./Services.css";
import '../App.css';
import lisbonMotion from "../assets/lisbonMotion.gif";
import bgServices from "../assets/bgServices.mp4";
;import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Services = () => {
    const boxVariant = {
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
        hidden: { opacity: 0, scale: 0 }
      };

            /*Second half of section with delay */
            const boxVariant2 = {
              visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: 0.5 } },
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
    <video className="background-bg" src={bgServices} autoPlay loop muted />
    {/*<motion.div
      className="motion-content"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
 >
    </motion.div>*/}

    <div className="services-content">
  
     <div class="grid-container">
     <motion.div className='glassmorphim' whileHover={{ scale: 1.3 , zIndex:10}}>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
     </motion.div>
     <motion.div className='glassmorphim' whileHover={{ scale: 1.3 , zIndex:10}}>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
     </motion.div>
        <motion.div className='glassmorphim' whileHover={{ scale: 1.3 , zIndex:10}}>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
     </motion.div>
     <motion.div className='glassmorphim' whileHover={{ scale: 1.3 }}>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
     </motion.div>
            </div>
    </div>
  </section>
);

}

export default Services;
