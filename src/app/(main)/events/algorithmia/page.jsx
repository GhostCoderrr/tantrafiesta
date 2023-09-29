"use client";

import Header from "@/components/eventBytes/Header";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import EventData from "@/components/eventBytes/EventData";
import Contact from "@/components/Contact";
const page = () => {
  const title = "Algorithmia";
  const organizer = "DotSlash";
  const theme = ["#ffbe0b", "#fb5607", "#fcbf49"];
  const rewards =
    "Total Prize Pool: ₹35,000<br>1st: ₹1000<br>2nd: ₹750<br>3rd: ₹500<br>4th-10th: ₹250<br>11th-50th ₹100<br>First Contest: ₹200<br>Participation: ₹100";
  const data = [
    ["Preliminary Round:", "September 29, 2023"],
    ["Final Round:", "October 13, 2023"],
    ["Entry Fee", "₹600"],
  ];
  const url =
    "https://www.codingninjas.com/studio/events/algorithmia-2023-iiit-nagpur?utm_source=Growth-CS&utm_medium=CS&utm_campaign=CodingEvent_Algorithmia_IIIT_Nagpur";
  const details =
    "Dive into the world of competitive coding with Algorithmia, an exhilarating ICPC-style competition designed for teams. Get ready to put your teamwork, creativity, and coding speed to the ultimate test!";
  const paragraph =
    "Get ready to embark on an epic journey into the world of algorithms and programming. Welcome to Algorithmia, a prestigious ICPC-style coding competition, where teams of three students compete against each other to solve complex algorithmic problems. It's a true test of teamwork, creativity, and coding speed. Algorithmia is your chance to push the boundaries of coding excellence, so mark your calendars and prepare for a coding challenge like no other!";
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
          <Image
            className="absolute -scale-x-100 left-0 bottom-0  -z-50 opacity-90"
            src="/assets/banner/algorithmia_banner.png"
            height={450}
            width={450}
          />
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
