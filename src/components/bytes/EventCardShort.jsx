"use client";

import { useState, useEffect, useRef } from "react";
import OrganiserBadge from "./OrganiserBadge";

const EventCardShort = ({ organizer, title, details, theme }) => {
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
        "--gradientBefore": `${theme[1]}33`,
        "--gradientAfter": `${theme[1]}aa`,
      }}
      className="eventCard w-3/4 md:w-full h-[800px] md:h-[400px]"
    >
      <div className="eventCard-content p-2 relative">
        <OrganiserBadge text={organizer} theme={theme[0]} />
        <div
          style={{
            "--c1": `${theme[0]}`,
            "--c2": `${theme[1]}`,
            "--c3": `${theme[2]}`,
          }}
          className="transText whitespace-nowrap overflow-hidden transBg mt-4 mb-7 font-bold pb-1 text-4xl sm:text-6xl z-10"
        >
          {title}
        </div>
        <div className="tracking-wider text-base sm:text-lg xl:text-xl opacity-50 w-full md:w-3/4">
          {details}
        </div>
        <div
          className={`group mt-2 md:mt-4 xl:mt-8 bg-gradient-to-r from-[${theme[1]}] to-[${theme[0]}] font-bold cursor-pointer text-2xl w-0 h-0 md:w-[150px] md:h-[50px] flex justify-center items-center rounded-3xl`}
        >
          <p>Learn More</p>
        </div>
      </div>
    </div>
  );
};

export default EventCardShort;
