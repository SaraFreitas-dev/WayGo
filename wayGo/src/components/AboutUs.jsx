// AboutUs.jsx
import React from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import '../App.css';
import './AboutUs.css';
import aboutVideo from "../assets/about-video.mp4";
import carCanva from "../assets/carCanva.mp4";
import interiorCar from "../assets/interiorCar.mp4"


const AboutUs = () => {

    const boxVariant = {
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
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
      <div className="opac">
      <video className="interiorCar" src={interiorCar} autoPlay loop muted />
      </div>
      <motion.div
      className="AboutUs"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
        

        <div className="video-container">
  <video className="about-video" src={aboutVideo} autoPlay loop muted />
</div>


      <div className="about-content">
      {/*  <video className="corner-video" src={carCanva} autoPlay loop muted /> */}
        <motion.div   whileHover={{scale: 1.3, rotate: [0, -10, 10, -10, 0] }}>
                    
       <div className="slime-bubble green">
  <h2 className="about-title">About Us</h2>
</div>
         </motion.div>


        <p>This is the About Us section content.</p>
        <p>Who we are, when it started.</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
        <p>A simpler page with some animations with owners and car. </p>
        <br></br>
        <br></br>

        <motion.div   whileHover={{scale: 1.3, rotate: [0, -10, 10, -10, 0] }}>
        <div className="slime-bubble violet">
    <h2 className="about-title">Our Mission</h2>
  </div>
  </motion.div>

        <p>This is the About Us section content.</p>
        <p>Who we are, when it started.</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
        </div>

</motion.div>
    </section>
  );
};

export default AboutUs;


