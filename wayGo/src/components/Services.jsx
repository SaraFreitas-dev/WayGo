import React from 'react';
import './Services.css';
import '../App.css';
import bgServices from '../assets/servicesBg.jpg';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { Parallax } from 'react-parallax';

const Services = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [control, inView]);

  const [ref2, inView2] = useInView();

  useEffect(() => {
    if (inView2) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [control, inView2]);


  const goLeftVariant = {
    hidden: { opacity: 0, x: '-100%' },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const goRightVariant = {
    hidden: { opacity: 0, x: '100%' },
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 1 } },
  };

  return (
    <section className="Services" id="services">
      <Parallax className="bg" bgImage={bgServices} strength={300} blur={{min: -5, max: 5}}>
        <div className="services-content">
          <div className="grid-container">
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
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
              </p>
            </motion.div>

            <motion.div
              id="2"
              className="glassmorphim"
              ref={ref}
              whileHover={{ scale: 1.3, zIndex: 10 }}
              variants={goRightVariant}
              initial="hidden"
              animate={control}
            >
              <p>
                What Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
              </p>
            </motion.div>

            <motion.div
              id="3"
              className="glassmorphim"
              ref={ref2}
              whileHover={{ scale: 1.3, zIndex: 10 }}
              variants={goLeftVariant}
              initial="hidden"
              animate={control}
            >
              <p>
                This is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                it to make a type specimen book.
              </p>
            </motion.div>

            <motion.div
              id="4"
              className="glassmorphim"
              ref={ref2}
              whileHover={{ scale: 1.3, zIndex: 10 }}
              variants={goRightVariant}
              initial="hidden"
              animate={control}
            >
              <p>
                Something is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
              </p>
            </motion.div>
          </div>
        </div>
      </Parallax>
    </section>
  );
};

export default Services;

