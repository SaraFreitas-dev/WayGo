import React from 'react';
import "./Services.css";
import '../App.css';
import bgServices from "../assets/bgServices.mp4";
;import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";


const Services = () => {
        const control = useAnimation();
        const [ref, inView] = useInView();
      
        useEffect(() => {
          if (inView) {
            control.start("visible");
          } else {
            control.start("hidden");
          }
        }, [control, inView]);

        const goLeftVariant = {
          hidden: { opacity: 0, x: "-100%"},
          visible: { opacity: 1, x: 0, transition: { duration:1}
          }
        };
        
        const goRightVariant = {
          hidden: {opacity: 0,x: "100%" },
          visible: {opacity: 1, x: 0, transition: { duration: 1, delay:1 } }
        };
        

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

     <motion.div
  id="1"
  className="glassmorphim"
  ref={ref}
  whileHover={{ scale: 1.3, zIndex: 10 }}
  variants={goLeftVariant}
  initial="hidden"
  animate={control}
>
  <p>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the
    1500s, when an unknown printer took a galley of type and scrambled it to
    make a type specimen book.
  </p>
</motion.div>

<motion.div
  id="2"
  className="glassmorphim"
  whileHover={{ scale: 1.3, zIndex: 10 }}
  variants={goRightVariant}
  initial="hidden"
  animate={control}
  transition={{ delay: 1 }}
>
  <p>
    What Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the
    1500s, when an unknown printer took a galley of type and scrambled it to
    make a type specimen book.
  </p>
</motion.div>

<motion.div
  id="3"
  className="glassmorphim"
  whileHover={{ scale: 1.3, zIndex: 10 }}
  variants={goLeftVariant}
  initial="hidden"
  animate={control}
>
  <p>
    This is simply dummy text of the printing and typesetting industry. Lorem
    Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it to make a
    type specimen book.
  </p>
</motion.div>

     <motion.div id="4" 
     className='glassmorphim' 
     whileHover={{ scale: 1.3 }}
     variants={goRightVariant}
    initial="hidden"
    animate={control}
     >
          <p>something is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
     </motion.div>
            </div>
    </div>
  </section>
);

}

export default Services;
