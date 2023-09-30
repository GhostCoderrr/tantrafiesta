import Link from "next/link";
import Image from "next/image";
const page = () => {
  return (
    <div className="h-screen w-screen grid grid-cols-1 md:grid-cols-2 items-center">
      <div className="text-6xl font-bold w-full grid place-items-center pt-24 md:pt-0">
        SPONSORS
      </div>
      <div className="h-full flex flex-col  md:pt-28 pb-5 justify-between items-center md:items-start">
        <Link href="https://www.ntpc.co.in/">
          <Image src="/assets/logo/ntpc_logo.png" height={50} width={150} />
        </Link>
        <Link href="https://www.codingninjas.com/">
          <Image src="/assets/logo/ninjas_logo.png" height={50} width={300} />
        </Link>

        <Link href="https://www.geeksforgeeks.org/">
          <Image
            src="/assets/logo/gfg_logo_extended.svg"
            height={40}
            width={350}
          />
        </Link>
        <Link href="https://tsecond.us/">
          <Image src="/assets/logo/tsecond_logo.svg" height={50} width={200} />
        </Link>
        <Link href="https://www.koed.in/">
          <Image src="/assets/logo/koed_logo.svg" height={50} width={80} />
        </Link>

        <Link href="https://www.wolfram.com/">
          <Image src="/assets/logo/wolfram_logo.svg" height={100} width={250} />
        </Link>
      </div>
    </div>
  );
};

export default page;
