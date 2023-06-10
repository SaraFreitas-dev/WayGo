import React from 'react';
import './Services.css';
import '../App.css';
import bgServices from '../assets/servicesBg.jpg';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { Parallax } from 'react-parallax';

const Services = () => {
  const control1 = useAnimation();
  const control2 = useAnimation();
  const control3 = useAnimation();
  const control4 = useAnimation();

  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();
  const [ref4, inView4] = useInView();

  useEffect(() => {
    if (inView1) {
      control1.start('visible');
    } else {
      control1.start('hidden');
    }
  }, [control1, inView1]);

  useEffect(() => {
    if (inView2) {
      control2.start('visible');
    } else {
      control2.start('hidden');
    }
  }, [control2, inView2]);

  useEffect(() => {
    if (inView3) {
      control3.start('visible');
    } else {
      control3.start('hidden');
    }
  }, [control3, inView3]);

  useEffect(() => {
    if (inView4) {
      control4.start('visible');
    } else {
      control4.start('hidden');
    }
  }, [control4, inView4]);


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
              ref={ref1}
              whileHover={{ scale: 1.3, fontSize: 1.2 }}
              variants={goLeftVariant}
              initial="hidden"
              animate={control1}
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
              ref={ref2}
              whileHover={{ scale: 1.3, zIndex: 10 }}
              variants={goRightVariant}
              initial="hidden"
              animate={control2}
            >
              <p>2
                What Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
              </p>
            </motion.div>

            <motion.div
              id="3"
              className="glassmorphim"
              ref={ref3}
              whileHover={{ scale: 1.3, zIndex: 10 }}
              variants={goLeftVariant}
              initial="hidden"
              animate={control3}
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
              ref={ref4}
              whileHover={{ scale: 1.3, zIndex: 10 }}
              variants={goRightVariant}
              initial="hidden"
              animate={control4}
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

