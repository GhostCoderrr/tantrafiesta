"use client";

import { motion } from "framer-motion";

const Tag = ({ text, icon }) => {
  const mainVaraints = {
    hover: {
      scale: 1.1,
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
  };

  const arrowVaraints = {
    hover: {
      x: [-10, 10],
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
  };
  return (
    <motion.div
      whileHover="hover"
      whileTap={{ scale: 0.9 }}
      variants={mainVaraints}
      className="z-10 w-[150px] h-[45px] lg:min-w-[200px] cursor-pointer rounded-full border-[#A418BA] border-2 lg:h-[60px] text-[#A418BA] hover:bg-[#A418BA] hover:text-white hover:border-white text-xl lg:text-3xl flex justify-center items-center "
    >
      {text}
      <motion.span variants={arrowVaraints} className=" ml-6">
        {icon}{" "}
      </motion.span>
    </motion.div>
  );
};

export default Tag;
