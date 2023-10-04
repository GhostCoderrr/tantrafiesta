import SpeakerCard from "./bytes/SpeakerCard";

const SpeakersGrid = () => {
  return (
    <div className="grid gap-1 place-content-center lg:grid-cols-2  mt-16">
      <SpeakerCard
        name="Devinder Maheshwari"
        details="Founder at Beebom"
        image="/assets/speakers/devinder_maheshwari.jpg"
        link="https://www.linkedin.com/in/devindermaheshwari/"
      />
      <SpeakerCard
        name="Siddharth Dungarwal"
        details="Founder Snitch.co.in"
        image="/assets/speakers/siddharth_dungarwal.jpg"
        link="https://www.linkedin.com/in/siddharthrdungarwal"
      />
    </div>
  );
};

export default SpeakersGrid;
