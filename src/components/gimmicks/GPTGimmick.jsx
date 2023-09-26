import Image from "next/image";

const GPTGimmick = ({ image }) => {
  return (
    <div className=" bg-transparent h-full w-full flex flex-col justify-center">
      <Image src={image} height={699} width={465} />
    </div>
  );
};

export default GPTGimmick;
