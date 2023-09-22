"use client";
import { useEffect } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { AiOutlineArrowUp, AiOutlineArrowLeft } from "react-icons/ai";
const MouseTrail = ({ fixedX, fixedY }) => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  console.log(fixedX, fixedY);
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Create a motion value to store the angle of rotation for the arrow icon
  const arrowAngle = useMotionValue(0);

  // Use the useTransform hook to calculate the angle based on the mouse coordinates
  // The formula is: angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI
  // where (x1, y1) is the fixed point that the arrow points to, and (x2, y2) is the mouse position
  // You can adjust the fixed point as you like

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 25);
      cursorY.set(e.clientY - 25);
      arrowAngle.set(
        Math.atan2(cursorY.get() - fixedY, cursorX.get() - fixedX) *
          (180 / Math.PI)
      );
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <div
        style={{
          translateX: fixedX,
          translateY: fixedY,
        }}
        className="absolute top-0 left-0 w-5 h-5 bg-red-600 z-50"
      ></div>
      <motion.div
        className="cursor flex justify-center items-center text-xl text-black"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          // Use the motion value to set the rotation of the arrow icon
          rotate: arrowAngle,
          // You can also add some transition effects if you want
          transition: { duration: 0.2 },
        }}
      >
        <AiOutlineArrowLeft />
      </motion.div>
    </>
  );
};

export default MouseTrail;
