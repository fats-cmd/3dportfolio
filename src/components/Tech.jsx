/**
 * Tech.jsx
 * This component displays a grid of technology icons/balls using Three.js for 3D effects.
 * Each ball represents a technology/tool in the developer's stack.
 */

import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    // Grid container for technology balls
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          {/* 3D Ball canvas for each technology */}
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

// Wrap component with SectionWrapper HOC and assign "tools" as section ID
export default SectionWrapper(Tech, "tools");
