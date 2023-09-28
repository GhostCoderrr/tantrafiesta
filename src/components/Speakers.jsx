"use client";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import Tag from "./bytes/Tag";
import { LuHeartHandshake } from "react-icons/lu";
import SpeakersGrid from "./SpeakersGrid";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaRegStar } from "react-icons/fa";
const Speakers = () => {
  const divRef = useRef(null);
  const isInView = useInView(divRef);
  return (
    <div
      id="speakers"
      ref={divRef}
      className="flex z-10 w-screen lg:w-[75vw] mt-4 "
    >
      <div className="w-[8%] text-3xl flex justify-center relative ">
        <div className="flex flex-col  items-center absolute h-full">
          <div className="relative text-pink-200">
            <LuHeartHandshake className="mt-4 mb-8" />
            <div className="absolute top-0 left-0 -z-10 h-[64px] w-full bg-pink-500 blur-[30px]"></div>
          </div>
          <motion.div
            style={{
              background: `linear-gradient( #0F971C,#76B00E,#DCC900,#DB0000)`,
            }}
            initial={{ height: "0%" }}
            animate={
              isInView
                ? { height: "100%", opacity: [0.4, 1] }
                : { opacity: [0.4, 1] }
            }
            transition={{
              opacity: {
                repeat: Infinity,
                repeatType: "reverse",
                duration: 2,
              },
              height: {
                duration: 3,
                ease: "easeOut",
              },
            }}
            exit={{ height: "0%" }}
            className="w-[3px] h-full  rounded-xl mb-2"
          ></motion.div>
          <div className="relative text-yellow-300">
            <FaRegStar className="mt-4" />
            <div className="absolute top-0 left-0 -z-10 h-[64px] w-full bg-yellow-500 blur-[30px]"></div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Tag text="Speakers" icon={<HiArrowRight />} />

        <SpeakersGrid />
      </div>
    </div>
  );
};

export default Speakers;
