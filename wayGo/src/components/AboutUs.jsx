// AboutUs.jsx
import React from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import '../App.css';
import './AboutUs.css';
import car from '../assets/car.png';
import aboutTitle from '../assets/aboutTitle.gif';

const AboutUs = () => {

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
    <section
      className="AboutUs"
      id="about-us">
      <div className="about-content">
      <motion.div
      className="about-content"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
        <motion.div   whileHover={{scale: 1.1, rotate: [0, -5, 5, -5, 0] }}>
                    <img className="imgAbout" src={aboutTitle} autoPlay loop muted />
                    </motion.div>
        <h3>About Us</h3>
        <p>This is the About Us section content.</p>
        <p>Who we are, when it started.</p>
        <p>Our mission</p>
        <p>A simpler page with some animations with owners and car</p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;


