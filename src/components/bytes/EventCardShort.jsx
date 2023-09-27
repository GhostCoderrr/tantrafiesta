"use client";

import { useState, useEffect, useRef } from "react";
import OrganiserBadge from "./OrganiserBadge";
import Image from "next/image";
const EventCardShort = ({
  organizer,
  title,
  details,
  theme,
  logo,
  textColor,
}) => {
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
      className="eventCard w-3/4 md:w-full h-[400px]"
    >
      <Image
        className=" z-50 absolute h-10 w-10 md:h-20 md:w-20 top-2 right-2"
        src={logo}
        height={80}
        width={80}
      />
      <div className="eventCard-content p-2 relative">
        <OrganiserBadge text={organizer} theme={theme[0]} />
        <div
          style={{
            "--c1": `${theme[0]}`,
            "--c2": `${theme[1]}`,
            "--c3": `${theme[2]}`,
          }}
          className="transText transBg whitespace-nowrap overflow-hidden mt-4 mb-7 font-bold pb-1 text-4xl sm:text-6xl z-10"
        >
          {title}
        </div>
        <div className="tracking-wider text-base sm:text-lg xl:text-xl opacity-50 w-full md:w-3/4">
          {details}
        </div>
        <div
          style={{
            backgroundColor: `${theme[1]}`,
            color: `${textColor ? textColor : "white"}`,
          }}
          className="group mt-8 font-bold cursor-pointer text-2xl w-[150px] h-[50px] flex justify-center items-center rounded-3xl"
        >
          <p>Learn More</p>
        </div>
      </div>
    </div>
  );
};

export default EventCardShort;
