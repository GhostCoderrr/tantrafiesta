"use client";
import { useState, useEffect, useRef } from "react";

//trail hook?
const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  const updateMousePosition = (ev) => {
    setMousePosition({ x: ev.clientX, y: ev.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return mousePosition;
};

const MouseTrack = () => {
  // A state variable to store the window dimensions
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // A function to update the window dimensions
  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  // A useEffect hook to add and remove the resize event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  ///mouse trail
  const canvasRef = useRef(null);
  const { x, y } = useMousePosition();
  const h = window.innerHeight;
  const w = window.innerWidth;
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    // Clear the previous drawing
    context.clearRect(0, 0, canvas.width, canvas.height);
    // Get the center of the canvas
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    // Draw a line from the mouse to the center
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(centerX, centerY);
    context.strokeStyle = "white";
    context.lineWidth = 1;
    context.stroke();
  }, [x, y]);

  //mousetrail end

  return (
    <canvas
      className="absolute  top-0 left-0"
      height={windowSize.height}
      width={windowSize.width}
      ref={canvasRef}
    ></canvas>
  );
};

export default MouseTrack;
