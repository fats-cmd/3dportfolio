/**
 * Feedbacks.jsx
 * This component displays testimonials in a card-based layout.
 * Each testimonial includes the person's image, name, designation, and their feedback.
 */

import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

/**
 * FeedbackCard component to display individual testimonials
 * @param {Object} props - Component props
 * @param {number} props.index - Index for animation delay
 * @param {string} props.testimonial - The testimonial text
 * @param {string} props.name - Name of the person giving testimonial
 * @param {string} props.designation - Job title/role of the person
 * @param {string} props.company - Company name
 * @param {string} props.image - URL of the person's image
 */
const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <p className='text-white font-black text-[48px]'>"</p>

    {/* Testimonial Text */}
    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

      {/* Author Information */}
      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {designation} at {company}
          </p>
        </div>

        {/* Author Image */}
        <img
          src={image}
          // alt={`feedback-by-${name}`}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        {/* Section Header */}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>

      {/* Testimonials Grid */}
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard 
            key={testimonial.name}
            index={index}
            {...testimonial}
          />
        ))}
      </div>
    </div>
  );
};

// Wrap component with SectionWrapper HOC and assign "testimonials" as section ID
export default SectionWrapper(Feedbacks, "testimonials");
