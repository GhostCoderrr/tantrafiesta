"use client";

import Header from "@/components/eventBytes/Header";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import EventData from "@/components/eventBytes/EventData";
import Contact from "@/components/Contact";
const page = () => {
  const title = "Gen-A-Thon";
  const organizer = "DotSlash";
  const theme = ["#90e0ef", "#00b4d8", "#0077b6"];
  const rewards = "1000<br>123000<br>loser";
  const data = [
    ["Registration", "10 septe"],
    ["round 1", " 23 oct"],
    ["round2", "4 oct"],
    ["result", " 1 dec"],
  ];
  const url =
    "https://unstop.com/hackathons/gen-a-thon-tantrafiesta-23-iiit-nagpur-760544";
  const details =
    "Hey geeks, here we are to take you to the next level of competitive programming. Presenting you the most awaited CodeFiesta 2023.";
  const paragraph =
    "Hey geeks, here we are to take you to the next level of competitive programming. Presenting you the most awaited CodeFiesta 2023.Hey geeks, here we are to take you to the next level of competitive programming. Presenting you the most awaited CodeFiesta 2023.Hey geeks, here we are to take you to the next level of competitive programming. Presenting you the most awaited CodeFiesta 2023.";
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
