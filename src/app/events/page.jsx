import EventsGrid from "@/components/bytes/EventsGrid";
import EventsGridExtended from "@/components/bytes/EventsGridExtended";

const page = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <div className="mt-24">
        <EventsGridExtended />
      </div>
    </div>
  );
};

export default page;
