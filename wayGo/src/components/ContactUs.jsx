import React from 'react';
import './ContactUs.css';
import '../App.css';
import bgContacts from '../assets/man.avif';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { Parallax } from 'react-parallax';

export const ContactUs = () => {
  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 },
  };

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [control, inView]);

  return (
    <section className="ContactUs" id="contact-us">
      <Parallax className='bg' bgImage={bgContacts} strength={600} blur={{min: 5, max: -5}}>
        <div className="contactUs-content">
          <motion.div
            className="contactUs-content"
            ref={ref}
            variants={boxVariant}
            initial="hidden"
            animate={control}
          >
            <h3>ContactUs</h3>
            <p>E-mail form</p>
            <p>Input to choose types of service user wants</p>
            <p>Left side image / goes up on phone</p>
          </motion.div>
        </div>
      </Parallax>
    </section>
  );
}; 

export default ContactUs;


    
    
   