// AboutUs.jsx
import React from 'react';
import { motion, useAnimation } from "framer-motion";
import '../App.css';
import './AboutUs.css';
import aboutVideo from "../assets/about-video.mp4";
import cornerVd from "../assets/cornerVd.mp4"
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Parallax } from 'react-parallax';



const AboutUs = () => {

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
      const [ref, inView] = useInView({
        threshold: 0.5, // to make sure the animation triggers
      });
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

        <div className="video-container">
  <video className="about-video" src={aboutVideo} autoPlay loop muted />
</div>


      <div className="about-content">
      <motion.div
      className="text1"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      {/*  <video className="corner-video" src={carCanva} autoPlay loop muted /> */}
        <motion.div   whileHover={{scale: 1.3, rotate: [0, -10, 10, -10, 0] }}>
                    
       <div className="slime-bubble green">
  <h2 className="about-title">About Us</h2>
</div>
         </motion.div>

         <div className="text-content">
        <p>This is the About Us section content.</p>
        <p>Who we are, when it started.</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
        <p>A simpler page with some animations with owners and car. </p>
        <br></br>
        <br></br>
        </div>
        </motion.div>


        <motion.div
      className="text2"
      ref={ref}
      variants={boxVariant2}
      initial="hidden"
      animate={control}
    >
        <motion.div   whileHover={{scale: 1.3, rotate: [0, -10, 10, -10, 0] }}>
        <div className="slime-bubble violet">
    <h2 className="about-title">Our Mission</h2>
  </div>
  </motion.div>

  <div className="text-content">
        <p>This is the About Us section content.</p>
        <p>Who we are, when it started.</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
        </div>
        </motion.div>

        
        </div>

        <div className="corner-containervd">
  <video className="corner-video" src={cornerVd} autoPlay loop muted />
</div>

    </section>
  );
};

export default AboutUs;


