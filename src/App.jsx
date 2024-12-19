/**
 * App.jsx
 * The root component of the application.
 * It sets up the routing and main layout structure.
 * Includes all major sections of the portfolio in a specific order.
 */

import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Feedbacks,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      {/* Main container with relative positioning and z-index management */}
      <div className='relative z-0 bg-primary'>
        {/* Hero section with custom background */}
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>

        {/* Main content sections */}
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />

        {/* Contact section with stars background */}
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
