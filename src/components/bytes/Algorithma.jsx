"use client";

import { useState, useEffect, useRef } from "react";
import OrganiserBadge from "./OrganiserBadge";
import { VscChromeMinimize, VscChromeClose } from "react-icons/vsc";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import Link from "next/link";
const Algorithmia = ({ theme }) => {
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
        "--gradientBefore": `${theme[0]}1f`,
        "--gradientAfter": `${theme[0]}aa`,
      }}
      className="eventCard col-span-1 md:col-span-2 w-3/4 md:w-full h-[800px] md:h-[400px]"
    >
      <div className="eventCard-content flex flex-col-reverse items-center md:flex-row">
        <div className="w-full mt-4 md:mt-0 md:w-1/2 pl-2 h-full flex flex-col justify-between">
          <div>
            <OrganiserBadge text="DotSlash" theme={theme[0]} />
            <div
              style={{
                "--c1": `${theme[0]}`,
                "--c2": `${theme[1]}`,
                "--c3": `${theme[2]}`,
              }}
              className="transText transBg mt-4 mb-8 font-bold text-4xl md:text-6xl "
            >
              Algorithmia
            </div>
            <div className="tracking-wider text-xl opacity-50">
              An ICPC-type contest that offers a platform for every coding geek
              out there, to hone their coding skills and compete with the rising
              coders.
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
              style={{
                backgroundColor: `${theme[0]}`,
              }}
              className="w-[200px] h-[50px] mb-4  text-2xl  rounded-xl flex justify-center  items-center cursor-pointer"
            >
              Register Now
            </motion.div>
          </Link>
        </div>
        <motion.div
          // drag={true}
          // dragConstraints={{ top: 100, bottom: 100, left: 100, right: 100 }}
          // dragSnapToOrigin={true}
          className="codeBlock w-full md:w-1/2  h-full relative flex flex-col justify-center items-center"
        >
          <div className="nav w-full border bg-[#101010] border-white/20 h-[10%] flex justify-between items-center px-2">
            <div className="list text-xs sm:text-sm flex justify-around w-3/4 sm:w-1/2 z-10">
              <button
                type="button"
                onClick={() => setTab(0)}
                style={tab === 0 ? activeButtonStyle : null}
                className="opacity-50"
              >
                Problems
              </button>
              <button
                type="button"
                onClick={() => setTab(1)}
                style={tab === 1 ? activeButtonStyle : null}
                className="opacity-50"
              >
                Terminal
              </button>
              <button
                type="button"
                onClick={() => setTab(2)}
                style={tab === 2 ? activeButtonStyle : null}
                className="opacity-50"
              >
                Output
              </button>
            </div>
            <div className="flex w-[40px] justify-between">
              <VscChromeMinimize
                onClick={() => setMin(!min)}
                className="opacity-50 hover:scale-110 cursor-pointer"
              />
              <VscChromeClose
                onClick={() => setMin(!min)}
                className="text-red-500 hover:scale-110 cursor-pointer"
              />
            </div>
          </div>

          {!min && (
            <div className="code w-full border-b border-x border-white/20 bg-[#151515] h-[90%] relative">
              {tab == 0 && (
                <div className="absolute leading-loose text-sm p-2 top-0 left-0 h-full w-full">
                  <Typewriter
                    options={{
                      delay: 15,
                      cursor: ".",
                      cursorClassName: "custom_cursor",
                    }}
                    onInit={(typewriter) => {
                      typewriter
                        .pause(2500)
                        .typeString(
                          "<span style='opacity:0.3;font-size:10px;'>[13.10.23]</span> <span style='font-weight: bold;color:#79c0ff;'>Themes:</span><br><span style='opacity:0.3;font-size:10px;'>[13.10.23]</span>   <span style='color:#ff7b72;'>- 1.</span> HealthTech Innovation<br><span style='opacity:0.3;font-size:10px;'>[13.10.23]</span>   <span style='color:#ffa657;'>- 2.</span> Smart City Solutions<br><span style='opacity:0.3;font-size:10px;'>[13.10.23]</span> <span style='font-weight: bold;color:#79c0ff;'>Tracks:</span><br><span style='opacity:0.3;font-size:10px;'>[13.10.23]</span>   <span style='color:#ff7b72;'>- 1.</span> AI-Driven Web Development<br><span style='opacity:0.3;font-size:10px;'>[13.10.23]</span>   <span style='color:#ffa657;'>- 2.</span> ML-Enhanced App Development"
                        )
                        .callFunction(() => hideCursor())
                        .start();
                    }}
                  />
                </div>
              )}
              {tab == 1 && (
                <div className="absolute leading-loose text-sm p-2 top-0 left-0 h-full w-full overflow-y-auto no-scrollbar">
                  <Typewriter
                    options={{
                      delay: 15,
                      cursor: ".",
                      cursorClassName: "custom_cursor",
                    }}
                    onInit={(typewriter) => {
                      typewriter

                        .typeString(
                          "<span style='opacity:0.3;font-size:10px;'>[13.10.23]</span> <span style='font-weight: bold;color:#7ee787;'>Registration Date:</span><br><span style='opacity:0.3;font-size:10px;'>[13.10.23]</span>   <span style='color:#ff7b72;'>- From</span> <span style='color:#ffa657;'>08-09-2023</span> <span style='color:#ff7b72;'>To</span> <span style='color:#ffa657;'>- 24-09-2023</span><br><span style='opacity:0.3;font-size:10px;'>[13.10.23]</span> <span style='font-weight: bold;color:#7ee787;'>Round 1:</span><br><span style='opacity:0.3;font-size:10px;'>[13.10.23]</span>   <span style='color:#79c0ff;'>- 24 September, 2023 (4:00 PM - 5:00 PM)</span><br><span style='opacity:0.3;font-size:10px;'>[13.10.23]</span> <span style='font-weight: bold;color:#7ee787;'>Round 1 Result:</span><br><span style='opacity:0.3;font-size:10px;'>[13.10.23]</span>   <span style='color:#79c0ff;'>- 24 September, 2023 (7:00 PM)</span><br><span style='opacity:0.3;font-size:10px;'>[13.10.23]</span> <span style='font-weight: bold;color:#7ee787;'>Round 2:</span><br><span style='opacity:0.3;font-size:10px;'>[13.10.23]</span>   <span style='color:#79c0ff;'>- 24 September, 2023 (11:59 PM)</span> <span style='color:#ffa657;'>(Problem Statements will be given)</span><br><span style='opacity:0.3;font-size:10px;'>[13.10.23]</span> <span style='font-weight: bold;color:#7ee787;'>Round 2 Submission:</span><br><span style='opacity:0.3;font-size:10px;'>[13.10.23]</span>   <span style='color:#79c0ff;'>- 28th September, 2023</span><br><span style='opacity:0.3;font-size:10px;'>[13.10.23]</span> <span style='font-weight: bold;color:#7ee787;'>Round 2 Result:</span><br><span style='opacity:0.3;font-size:10px;'>[13.10.23]</span>   <span style='color:#79c0ff;'>- 30th September, 2023</span><br><span style='opacity:0.3;font-size:10px;'>[13.10.23]</span> <span style='font-weight: bold;color:#ff7b72;'>Grand Finale:</span><br><span style='opacity:0.3;font-size:10px;'>[13.10.23]</span>   <span style='color:#ffa657;'>- 13th October, 2023</span> <span style='color:#ff7b72;'>and</span> <span style='color:#ffa657;'>14th October, 2023</span><br>"
                        )
                        .callFunction(() => hideCursor())
                        .start();
                    }}
                  />
                </div>
              )}
              {tab == 2 && (
                <div className="absolute leading-loose text-sm p-2 top-0 left-0 h-full w-full">
                  <Typewriter
                    options={{
                      delay: 15,
                      cursor: ".",
                      cursorClassName: "custom_cursor",
                    }}
                    onInit={(typewriter) => {
                      typewriter

                        .typeString(
                          "<span style='opacity:0.3;font-size:10px;'>[14.10.23]</span> <span style='font-weight: bold;color:#7ee787;'>Prizes :</span><br><span style='opacity:0.3;font-size:10px;'>[14.10.23]</span>   <span style='color:#79c0ff;'>--   #1  </span><span style='color:#ff7b72;'>Rs. 30,000</span><br><span style='opacity:0.3;font-size:10px;'>[14.10.23]</span><br><span style='opacity:0.3;font-size:10px;'>[14.10.23]</span>"
                        )
                        .pauseFor(2000)
                        .typeString(
                          " <span style='color:#ffa657;'>-- Certificates of participation for all attendees</span>"
                        )
                        .callFunction(() => hideCursor())
                        .start();
                    }}
                  />
                </div>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Algorithmia;
