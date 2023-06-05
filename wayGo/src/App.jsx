import React from 'react';
import './App.css';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Reviews from './components/Reviews';
import ContactUs from './components/ContactUs';
import entrance from '../src/assets/entrance.mp4';
import Navbar from './components/Navbar';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function App() {

  const boxVariant = {
    visible: { opacity: 1, transform: 'translateX(0)', transition: { duration: 2 } },
    hidden: { opacity: 0, transform: 'translateX(-30%)' }
  };
  
  const slowVariant = {
    visible: { opacity: 1, transform: 'translateX(0)', transition: { duration: 5 } },
    hidden: { opacity: 0, transform: 'translateX(-160%)' }
  };
  
  const reverseVariant = {
    visible: { opacity: 1, transform: 'translateX(0)', transition: { duration: 2 } },
    hidden: { opacity: 0, transform: 'translateX(30%)' }
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
    <div className="main">
      <Navbar />
      <section className="main-section" id="main-section">
        <video className="background-video" src={entrance} autoPlay loop muted />
        ´<div className="content_main">
        <motion.div
      className="content-main"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
          <h1>
            WayGo     
            <motion.span className="small-text"
                  ref={ref}
                  variants={slowVariant}
                  initial="hidden"
                  animate={control}>
              <span>_</span>
              <span>L</span>
              <span>i</span>
              <span>s</span>
              <span>b</span>
              <span>o</span>
              <span>n</span>
            </motion.span>
          </h1>
          </motion.div>
          <motion.div
      className="content-main"
      ref={ref}
      variants={reverseVariant}
      initial="hidden"
      animate={control}
    >
          <h2>Your Tour Starts Here</h2>
          </motion.div>
        </div>
      </section>

      <AboutUs/>
      <Services/>
      <Reviews/>
      <ContactUs/>
    </div>
  );
}

export default App;

