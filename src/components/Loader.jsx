/**
 * Loader.jsx
 * A reusable loading spinner component.
 * Used to show loading states throughout the application.
 * Implements a simple HTML/CSS-based loading animation.
 */

import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  // Get loading progress from react-three-fiber
  const { progress } = useProgress();

  return (
    // Html component from drei allows rendering HTML content in a 3D scene
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {/* Loading spinner */}
      <span className='canvas-loader'></span>
      {/* Loading progress text */}
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;
