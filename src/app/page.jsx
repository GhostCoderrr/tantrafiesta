import Hero from "@/components/Hero";
import About from "@/components/About";
import Events from "@/components/Events";
import FindMore from "@/components/FindMore";
import EventsGrid from "@/components/bytes/EventsGrid";
import Speakers from "@/components/Speakers";

import Venue from "@/components/Venue";
import Contact from "@/components/Contact";
import MouseTrail from "@/components/MouseTrail";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black text-white">
      <Hero />
      <About />
      <Events />

      <EventsGrid />
      <FindMore />
      <Speakers />
      <Venue />
      <Contact />
    </main>
  );
}
