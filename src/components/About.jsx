"use client";
import { HiArrowRight } from "react-icons/hi";
import Tag from "./bytes/Tag";
import { useState, useEffect, useRef } from "react";
import { FiCode } from "react-icons/fi";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "framer-motion";
import Link from "next/link";
const About = () => {
  const divRef = useRef(null);
  const isInView = useInView(divRef);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width to state
      var marginEdit = (250 / 1200) * window.innerWidth - 125;

      setHeight(marginEdit);
    }

    // Check if window is defined
    if (typeof window !== "undefined") {
      // Set initial height
      setHeight((250 / 1200) * window.innerWidth - 125);

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }

    // // Add event listener
    // window.addEventListener("resize", handleResize);

    // // Remove event listener on cleanup
    // return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      ref={divRef}
      id="about"
      className="flex lg:w-[75vw] mb-24"
      style={{ marginTop: `-${height}px` }}
    >
      <div className="w-[8%] text-3xl flex justify-center relative ">
        <div
          className="flex flex-col  items-center absolute h-full "
          style={{
            transform: `translate(0,${height + 5}px)`,
          }}
        >
          <div className="relative text-blue-200">
            <FiCode className="hidden md:block" />
            <div className="absolute top-[-16px] left-0 -z-10 h-[64px] w-full bg-blue-500 blur-[30px]"></div>
          </div>
          <motion.div
            style={{
              background: `linear-gradient(#d2a8ff, #a371f7 10%, #0C14CB 50%,  #188ABA)`,
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
                duration: 2,
                ease: "easeOut",
              },
            }}
            exit={{ height: "0%" }}
            className="w-[3px] h-[100%] rounded-xl"
          ></motion.div>
        </div>
      </div>
      <div className="w-full">
        {/* <div className="mb-8 opacity-90 w-[150px]  lg:w-[200px]">
          <Image src="/assets/logo/sbi_logo.svg" width={200} height={200} />
        </div> */}
        <Tag text="About" />
        <div className="text-5xl sm:text-7xl font-semibold mt-16 mb-10">
          TantraFiesta
        </div>
        <div className="tracking-wider font-light text-xl sm:text-2xl  w-[80%] opacity-50 mb-16">
          is the flagship annual technical extravaganza proudly presented by the
          Indian Institute of Information Technology, Nagpur (IIITN). With a
          rich tradition of promoting research, problem-solving skills, and
          fostering a sense of community among tech enthusiasts, TantraFiesta
          has evolved into a premier event on the tech calendar.
        </div>

        <div>
          <Link
            href="/sponsors"
            className=" tracking-widest py-2 px-4 font-light   w-[100px] text-center rounded-full border border-[#A418BA] bg-[#A418BA] text-white hover:bg-transparent hover:text-[#A418BA]"
          >
            Sponsors
          </Link>
          <div className="flex flex-col lg:flex-row  justify-start mt-3 items-start lg:items-center w-1/2">
            <div className="grid w-[80vw] md:w-[50vw] xl:grid-cols-6  grid-cols-3 place-items-center auto-cols-max items-center ">
              <Link href="https://www.ntpc.co.in/">
                <Image
                  className="w-[75px]"
                  src="/assets/logo/ntpc_logo.png"
                  height={50}
                  width={75}
                />
              </Link>
              <Link href="https://www.codingninjas.com/">
                <Image
                  className="w-[120px]"
                  src="/assets/logo/ninjas_logo.png"
                  height={50}
                  width={200}
                />
              </Link>

              <Link href="https://www.geeksforgeeks.org/">
                <Image
                  className="w-[50px]"
                  src="/assets/logo/gfg_logo.svg"
                  height={40}
                  width={50}
                />
              </Link>
              <Link href="https://tsecond.us/">
                <Image
                  className="w-[100px]"
                  src="/assets/logo/tsecond_logo.svg"
                  height={50}
                  width={100}
                />
              </Link>
              <Link href="https://www.koed.in/">
                <Image
                  className="w-[50px]"
                  src="/assets/logo/koed_logo.svg"
                  height={50}
                  width={50}
                />
              </Link>

              <Link href="https://www.wolfram.com/">
                <Image
                  className="w-[150px]"
                  src="/assets/logo/wolfram_logo.svg"
                  height={100}
                  width={150}
                />
              </Link>
            </div>
            {/* <div className="w-full  min-w-[300px] flex justify-start mt-3 items-center">
             
            </div>
            <div className="w-full min-w-[300px] flex justify-start mt-3 items-center">
              
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
