/**
 * About.jsx
 * This component renders the About section of the portfolio.
 * It includes a brief introduction and service cards displaying different areas of expertise.
 * The component uses Framer Motion for animations and react-parallax-tilt for card effects.
 */

import React from "react";
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

/**
 * ServiceCard component displays individual service/skill cards with tilt effect
 * @param {Object} props - Component props
 * @param {number} props.index - Index for staggered animation
 * @param {string} props.title - Service title
 * @param {string} props.icon - Service icon URL
 */
const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      {/* Section Header with Animation */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      {/* About Text with Fade-in Animation */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a Frontend software developer skilled in JavaScript and frameworks like React, 
        Node.js, and Three.js. I excel at building scalable, user-friendly solutions 
        that solve real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      {/* Services Grid */}
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

// Wrap with SectionWrapper HOC for consistent section styling and navigation
export default SectionWrapper(About, "about");
