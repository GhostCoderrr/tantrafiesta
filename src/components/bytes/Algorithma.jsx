"use client";

import { useState, useEffect, useRef } from "react";
import OrganiserBadge from "./OrganiserBadge";
import { motion } from "framer-motion";
const Algorithma = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleOnMove = (e) => {
    // Get card element dimensions
    const rect = cardRef.current.getBoundingClientRect();
    // Get mouse or touch position relative to card element
    const middleX = rect.width / 2;
    const middleY = rect.height / 2;

    const x = -1 * ((e.clientX - (rect.left + middleX)) / middleX) * 3;
    const y = -1 * ((e.clientY - (rect.top + middleY)) / middleY) * 3;

    // Update position state

    setRotation({ x, y });
  };

  // Define a function that resets the rotation state to zero
  const handleOnLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  useEffect(() => {
    // Get card element reference
    const card = cardRef.current;
    // Add event listeners for mousemove, touchmove, and mouseleave events
    card.addEventListener("mousemove", handleOnMove);
    card.addEventListener("touchmove", (e) => handleOnMove(e.touches[0]));
    card.addEventListener("mouseleave", handleOnLeave);
    // Return a cleanup function that removes event listeners
    return () => {
      card.removeEventListener("mousemove", handleOnMove);
      card.removeEventListener("touchmove", (e) => handleOnMove(e.touches[0]));
      card.removeEventListener("mouseleave", handleOnLeave);
    };
  }, []);
  return (
    <div
      ref={cardRef}
      style={{
        "--rotateY": `${rotation.x}deg`,
        "--rotateX": `${-rotation.y}deg`,
        "--gradientBefore": `#ffbe0b33`,
        "--gradientAfter": `#ffbe0baa`,
      }}
      className="eventCard w-3/4 md:w-full h-[800px] md:h-[400px]"
    >
      <div className="eventCard-content p-2 relative">
        <OrganiserBadge text="DotSlash" theme="#fb5607" />
        <div
          style={{
            "--c1": "#ffbe0b",
            "--c2": "#fb5607",
            "--c3": "#fcbf49",
          }}
          className="transText transBg mt-4 mb-7 font-bold pb-1 text-4xl sm:text-6xl z-10"
        >
          Algorithmia
        </div>
        <div className="tracking-wider text-base sm:text-lg xl:text-xl opacity-50 w-full md:w-3/4">
          An ICPC-type contest that offers a platform for every coding geek out
          there, to hone their coding skills and compete with the rising coders.
        </div>
        <div className="group mt-2 md:mt-4 xl:mt-8 bg-gradient-to-r from-[#fb5607] to-[#fab700] font-bold cursor-pointer text-2xl w-0 h-0 md:w-[150px] md:h-[50px] flex justify-center items-center rounded-3xl">
          <p className="hidden md:block">See More</p>
          <div className=" block md:group-hover:block text-base sm:text-lg   rounded-xl font-normal  md:hidden bottom-20 sm:bottom-10 md:top-0 left-0 absolute h-1/2 md:h-full p-4  w-full backdrop-blur-xl">
            <div className="flex opacity-50 ">
              <div className="mb-4">
                <p className="text-xs">Registration Fee:</p>
                <div className="ml-6">
                  Rs.600 per team (Onsite)
                  <br />
                  Free (Online)
                </div>
              </div>
              <div className="mb-4 ml-16">
                <p className="text-xs">Team Members:</p>
                <div className="ml-6">2 to 3</div>
              </div>
            </div>
            <div className="mb-4 opacity-50">
              <p className="text-xs">Round 1: Preliminary Round(Online)</p>
              <div className="ml-6">
                Top 10 teams from online round will be called for final onsite
                round
              </div>
            </div>
            <div className="mb-4 opacity-50">
              <p className="text-xs">Round 2 Final round (Onsite):</p>
              <div className="ml-6">
                Finalists will meet for a final Showdown
              </div>
            </div>
            <div className="mb-4 ">
              <p className="text-xs text-red-700 font-black tracking-widest">
                Prizes:
              </p>
              <div
                style={{
                  "--c1": "#ffbe0b",
                  "--c2": "#fb5607",
                  "--c3": "#fcbf49",
                }}
                className="transText transBg text-2xl ml-6 text-red-600 font-bold"
              >
                Rs. 40,000
              </div>
            </div>
            <motion.a
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="mt-4 bg-gradient-to-r from-[#fb5607] to-[#fab700] font-bold cursor-pointer text-xl sm:text-2xl w-[120px] h-[40px] sm:w-[150px] sm:h-[50px] flex justify-center items-center rounded-3xl"
            >
              Claim Now!
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Algorithma;
