import SpeakerCard from "./bytes/SpeakerCard";

const SpeakersGrid = () => {
  return (
    <div className="grid gap-1 place-content-center lg:grid-cols-2 2xl:grid-cols-3 mt-16">
      <SpeakerCard
        name="Dr. Bhim Singh"
        details="SERB National Science Chair & Emeritus Professor, IIT Delhi"
        image=""
      />
      <SpeakerCard
        name="Sreenivas Voruganti"
        details="Team Leader Google SDN, Banglore"
        image=""
      />
      <SpeakerCard
        name="Arsh Goyal"
        details="Educational YouTuber, Senior SWE at Samsung India"
        image=""
      />
      <SpeakerCard
        name="Sandeep Jain"
        details="Founder and CEO at Geeks For Geeks"
        image="/assets/sandeep-jain.webp"
      />
    </div>
  );
};

export default SpeakersGrid;
