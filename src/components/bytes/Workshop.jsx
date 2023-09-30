"use client";

import { useState, useEffect, useRef } from "react";
import OrganiserBadge from "./OrganiserBadge";
import Link from "next/link";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import Image from "next/image";
const Workshop = ({ organizer, theme, details, url }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleOnMove = (e) => {
    // Get card element dimensions
    const rect = cardRef.current.getBoundingClientRect();
    // Get mouse or touch position relative to card element
    const middleX = rect.width / 2;
    const middleY = rect.height / 2;

    const x = -1 * ((e.clientX - (rect.left + middleX)) / middleX) * 4;
    const y = -1 * ((e.clientY - (rect.top + middleY)) / middleY) * 4;

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
        "--rotateX": `${rotation.y}deg`,
        "--gradientBefore": `${theme[0]}33`,
        "--gradientAfter": `${theme[0]}aa`,
      }}
      className="eventCard col-span-1 md:col-span-2 w-3/4 md:w-full h-[800px] md:h-[400px] "
    >
      <div className="eventCard-content flex flex-col-reverse md:flex-row">
        <div
          style={{
            "--rotateY": `${-rotation.x * 3}deg`,
            "--rotateX": `${rotation.y * 3}deg`,
          }}
          className="eventGimmick w-full mt-4 md:mt-0 md:w-1/2 h-full md:h-full "
        >
          <Link
            href={url}
            className=" bg-transparent h-full w-full flex flex-col justify-center"
          >
            <Image
              src="/assets/banner/gamedev_banner.svg"
              height={470}
              width={470}
            />
          </Link>
        </div>
        <div className="w-full h-2/3 md:h-full   md:w-1/2 flex flex-col justify-between">
          <div className="">
            <OrganiserBadge text={organizer} theme={theme[1]} />
            <div
              style={{
                "--c1": `${theme[0]}`,
                "--c2": `${theme[1]}`,
                "--c3": `${theme[2]}`,
              }}
              className="transText transBg  mt-4 mb-4 font-bold text-2xl md:text-4xl "
            >
              LevelUp: <i>Intro to Game Dev</i>
            </div>
            <div className="tracking-wider opacity-50 text-sm xl:text-base">
              Your gateway to the world of game development! Hosted by
              GaneDevUtopia, on 13th October from 2-5 PM is perfect for aspiring
              game creators. Try your hand at practical exercises, & receive
              participation certificates. Plus, stand a chance to win cool
              LevelUp T-shirts. Grab your laptops and unlock your game
              development potential!
            </div>
            <div className="w-full bg-white/5 text-green-600 font-bold mt-2 p-2 rounded-2xl">
              <Typewriter
                className=" opacity-50"
                options={{
                  delay: 30,
                  cursor: "|",
                }}
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(1000)
                    .typeString(
                      "Timings: 2 PM to 5PM <br> Date: 13th October, 2023"
                    )

                    .start();
                }}
              />
            </div>
          </div>
          <div className="flex md:flex-row flex-col justify-between items-center">
            {/* <Link href="/events/Workshop" target="_blank">
              <motion.div
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                style={{
                  backgroundColor: `${theme[0]}`,
                }}
                className="w-[200px] h-[50px] mt-8 md:mt-0 mb-4  text-2xl  rounded-xl flex justify-center  items-center cursor-pointer"
              >
                Learn More
              </motion.div>
            </Link> */}
            {/* <Link href="https://www.geeksforgeeks.org/" target="_blank">
              <Image
                className="z-50 mb-4 ml-2 md:mr-10"
                src="/assets/logo/gfg_logo.svg"
                height={25}
                width={250}
              />
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workshop;
