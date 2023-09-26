"use client";
import { motion } from "framer-motion";
import { GoBriefcase } from "react-icons/go";
import React, { useEffect, useRef } from "react";
import EventCardShort from "./EventCardShort";
import EventCardLong from "./EventCardLong";
import GenAThon from "./GenAThon";
import Overdrive from "./Overdrive";
import Algorithma from "./Algorithma";
import { useInView } from "framer-motion";
import EventCardTall from "./EventCardTall";
import GPT5 from "./GPT5";
import CodeFiesta from "./CodeFiesta";
import RoboRumble from "./RoboRumble";

const EventsGridExtended = () => {
  const cardsRef = useRef(null);
  const divRef = useRef(null);
  const isInView = useInView(divRef);
  useEffect(() => {
    // Get cards element reference
    const cards = cardsRef.current;

    // Define mousemove handler function
    const handleOnMove = (e) => {
      // Loop through card elements
      for (const card of cards.children) {
        // Get card element dimensions
        const rect = card.getBoundingClientRect();
        // Get mouse position relative to card element
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        // Set CSS variables for mouse position
        card.style.setProperty("--x", `${x}px`);
        card.style.setProperty("--y", `${y}px`);
      }
    };
    // Add event listener for mousemove events
    cards.addEventListener("mousemove", handleOnMove);
    // Return a cleanup function that removes event listener
    return () => {
      cards.removeEventListener("mousemove", handleOnMove);
    };
  }, []);

  return (
    <div ref={divRef} className="flex w-screen lg:w-[75vw]  mt-4 relative">
      <div className="w-[8%] text-3xl flex justify-center relative">
        <div className="flex flex-col  items-center absolute h-full">
          <div className="relative text-green-200">
            <GoBriefcase className="mt-4 mb-8 z-10" />
            <div className="absolute top-0 left-0 -z-10 h-[64px] w-full bg-green-500 blur-[30px]"></div>
          </div>
          <motion.div
            style={{
              background: `linear-gradient( #188ABA 25%, #0D3A11)`,
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
            className="w-[3px] h-full rounded-xl"
          ></motion.div>
        </div>
      </div>
      <div className="w-full ">
        <div
          id="eventCards"
          ref={cardsRef}
          className=" w-full  grid place-items-center md:place-items-start grid-cols-1 grid-rows-13 md:grid-cols-2 md:grid-rows-10 gap-4"
        >
          <Algorithma theme={["#0F971C", "#0F8019", "#0D3A11"]} />

          <Overdrive />
          <EventCardShort
            organizer="Dimensions"
            title="Blender Blitz"
            details="Robo Rumble is an adrenaline-pumping experience of robo cars rumbling down the track. Join in on the sheer excitement of Robo Rumble at TantraFiesta."
            theme={["#0F971C", "#0F8019", "#0D3A11"]}
            logo="/assets/logo/dimensions_logo.svg"
          />

          <EventCardShort
            organizer="IoTics"
            title="Byte Craft"
            details="Robo Rumble is an adrenaline-pumping experience of robo cars rumbling down the track. Join in on the sheer excitement of Robo Rumble at TantraFiesta.
"
            theme={["#0F971C", "#0F8019", "#0D3A11"]}
            logo="/assets/logo/iotics_logo.svg"
          />
          <CodeFiesta theme={["#0F971C", "#0F8019", "#0D3A11"]} />
          <RoboRumble theme={["#0F971C", "#0F8019", "#0D3A11"]} />

          <EventCardShort
            organizer="Orator"
            title="Rendezvous"
            details="Robo Rumble is an adrenaline-pumping experience of robo cars rumbling down the track. Join in on the sheer excitement of Robo Rumble at TantraFiesta.
"
            theme={["#ffbe0b", "#fb5607", "#fcbf49"]}
            logo="/assets/logo/orator_logo.svg"
          />
          <EventCardTall
            organizer="CRISPR"
            title="Enigma Xplore"
            details="Robo Rumble is an adrenaline-pumping experience of robo cars rumbling down the track. Join in on the sheer excitement of Robo Rumble at TantraFiesta.
"
            banner="/assets/banner/ctf_banner.svg"
            theme={["#FD4556", "#BD3944", "#D62964"]}
          />

          <EventCardTall
            organizer="Strokes"
            title="Designathon"
            details="Robo Rumble is an adrenaline-pumping experience of robo cars rumbling down the track. Join in on the sheer excitement of Robo Rumble at TantraFiesta.
"
            banner="/assets/banner/designathon_banner.svg"
            theme={["#0F971C", "#0F8019", "#0D3A11"]}
          />
          <EventCardShort
            organizer="TF Management"
            title="Shatranj-Up"
            details="Robo Rumble is an adrenaline-pumping experience of robo cars rumbling down the track. Join in on the sheer excitement of Robo Rumble at TantraFiesta.
"
            theme={["#0F971C", "#0F8019", "#0D3A11"]}
            logo="/assets/logo/tf_logo.svg"
          />
          <GPT5 theme={["#7b1fa2", "#673ab7", "#f48fb1"]} />

          <EventCardShort
            organizer="TF Management"
            title="Spell Bee"
            details="Robo Rumble is an adrenaline-pumping experience of robo cars rumbling down the track. Join in on the sheer excitement of Robo Rumble at TantraFiesta.
"
            theme={["#ffbe0b", "#fb5607", "#fcbf49"]}
            logo="/assets/logo/tf_logo.svg"
          />
          <EventCardTall
            organizer="Dimensions"
            title="Sentient Strife"
            details="Robo Rumble is an adrenaline-pumping experience of robo cars rumbling down the track. Join in on the sheer excitement of Robo Rumble at TantraFiesta.
"
            banner="/assets/banner/game_jam_banner.svg"
            theme={["#0F971C", "#0F8019", "#0D3A11"]}
          />
          <EventCardShort
            organizer="TF Management"
            title="BattleFrenzy"
            details="Robo Rumble is an adrenaline-pumping experience of robo cars rumbling down the track. Join in on the sheer excitement of Robo Rumble at TantraFiesta.
"
            theme={["#FD4556", "#BD3944", "#D62964"]}
            logo="/assets/logo/tf_logo.svg"
          />
          <GenAThon />
        </div>
      </div>
    </div>
  );
};

export default EventsGridExtended;
