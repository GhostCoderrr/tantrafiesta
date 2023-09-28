"use client";

import Header from "@/components/eventBytes/Header";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import EventData from "@/components/eventBytes/EventData";
import Contact from "@/components/Contact";
const page = () => {
  const title = "Blender Blitz";
  const organizer = "Dimensions";
  const theme = ["#90e0ef", "#00b4d8", "#0077b6"];
  const rewards = "1000<br>123000<br>loser";
  const data = [
    ["Registration Ends", " 05 October"],
    ["Submission Round Starts", "10 September"],
    ["Submission Round Ends", "05 October"],
  ];

  const url =
    "https://unstop.com/competitions/blender-blitz-tantrafiesta-23-iiit-nagpur-761674";
  const details =
    "Step into the mesmerizing world of CG Animation and let your creativity soar! In this thrilling online contest, you have the opportunity to craft stunning CG environments using provided rules and the vast resources of Unreal/Blender libraries. It's a canvas for you to showcase your artistic skills like never before.";
  const paragraph =
    "Are you ready to unleash your creative potential? Join us in creating abstract isometric 3D models like never before. Blender Blitz is all about fostering creativity, pushing the boundaries of 3D modeling, and exploring the enchanting world of abstract isometric design. We invite you to embark on a quest that takes you beyond the ordinary realm of object modeling. Let your imagination run wild in the realm of CG Animation!";
  return (
    <div className="flex min-h-screen w-screen flex-col items-center justify-between bg-black text-white">
      <div className=" w-[80vw] mt-28 flex flex-col items-center">
        <Header
          theme={theme}
          title={title}
          organizer={organizer}
          details={details}
          url={url}
        >
          <motion.div
            animate={{
              y: [-10, 10, -10],

              transition: {
                repeat: Infinity,
                ease: "linear",
                duration: 3,
              },
            }}
            className=" bg-transparent h-full w-full flex flex-col justify-center"
          >
            <Image
              src="/assets/banner/cf_banner.svg"
              height={400}
              width={400}
            />
          </motion.div>
        </Header>
        <EventData
          paragraph={paragraph}
          data={data}
          theme={theme}
          rewards={rewards}
        />

        <Contact />
      </div>
    </div>
  );
};

export default page;
