import React from 'react'
import "./Reviews.css";
import '../App.css';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Reviews = () => {

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
    <section className="Reviews" id="reviews">
    <div className="reviews-content">
    <motion.div
      className="Reviews"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      <h3>Reviews</h3>
      <p>Add slide animation of reviews in tripAdviser</p>
      </motion.div>
    </div>
   
  </section>
  )
}
export default Reviews;
