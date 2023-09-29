import SpeakerCard from "./bytes/SpeakerCard";

const SpeakersGrid = () => {
  return (
    <div className="grid gap-1 place-content-center lg:grid-cols-2 2xl:grid-cols-3 mt-16">
      <SpeakerCard name="Reveling Soon" details="" image="" />
      <SpeakerCard name="Reveling Soon" details="" image="" />
      <SpeakerCard name="Reveling Soon" details="" image="" />
      <SpeakerCard name="Reveling Soon" details="" image="" />
    </div>
  );
};

export default SpeakersGrid;
