"use client";

import { useState, useEffect, useRef } from "react";
import OrganiserBadge from "./OrganiserBadge";
import { VscChromeMinimize, VscChromeClose } from "react-icons/vsc";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
const GenAThon = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [min, setMin] = useState(false);
  const cardRef = useRef(null);
  const [tab, setTab] = useState(0);

  const activeButtonStyle = {
    opacity: 1,
  };
  //function to remove cursor
  const hideCursor = () => {
    const cursor = document.querySelector(".custom_cursor");
    console.log(cursor);
    cursor.style.opacity = 0;
  };
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
        "--gradientBefore": `#ffffff1f`,
        "--gradientAfter": `#ffffffaa`,
      }}
      className="eventCard col-span-1 md:col-span-2 w-3/4 md:w-full h-[800px] md:h-[400px]"
    >
      <div className="eventCard-content flex flex-col-reverse items-center md:flex-row-reverse">
        <div
          style={{
            "--rotateY": `${-rotation.x * 3}deg`,
            "--rotateX": `${rotation.y * 3}deg`,
          }}
          className="eventGimmick w-full mt-4 md:mt-0 md:w-1/2 pl-2 h-full md:h-full "
        >
          <div className=" bg-transparent absolute right-10 h-full  flex flex-col justify-center">
            <Image
              src="/assets/banner/genathon_banner.svg"
              height={390}
              width={390}
            />
          </div>
        </div>
        <div className="w-full mt-4 md:mt-0 md:w-1/2 pl-2 h-full flex flex-col justify-between">
          <div>
            <OrganiserBadge text="Elevate" theme="#7b1fa2" />
            <div
              style={{
                "--c1": "#7b1fa2",
                "--c2": "#673ab7",
                "--c3": "#f48fb1",
              }}
              className="transText transBg mt-4 mb-8 font-bold text-4xl md:text-6xl "
            >
              Gen-A-Thon
            </div>
            <div className="tracking-wider text-xl opacity-50">
              Elevate your skills and imagination at Gen-A-Thon: an exciting AI,
              ML, Web Development, and App Development Hackathon!
            </div>
          </div>
          <Link
            href="https://unstop.com/hackathons/gen-a-thon-tantrafiesta-23-iiit-nagpur-760544"
            target="_blank"
          >
            <motion.div
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="w-[200px] h-[50px] mb-4  text-2xl  rounded-xl flex justify-center  items-center bg-[#7b1fa2] cursor-pointer"
            >
              Register Now
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GenAThon;
