import Hero from "@/components/Hero";
import React from "react";

const loading = () => {
  return (
    <div className="overflow-hidden  bg-black flex min-h-screen flex-col items-center justify-between ">
      <Hero />
    </div>
  );
};

export default loading;
