import Link from "next/link";
import { TbSquareRotatedFilled } from "react-icons/tb";
import Image from "next/image";
const Navbar = () => {
  return (
    <nav className=" w-screen absolute z-50 backdrop-blur-sm">
      <div className="navbar  text-white w-[80vw] h-24 flex justify-around m-auto items-center ">
        <a
          href="/events"
          className="hidden lg:block font-extrabold text-lg opacity-50 cursor-pointer hover:opacity-100"
        >
          EVENTS
        </a>

        <TbSquareRotatedFilled className="hidden lg:block opacity-50" />

        <a
          href="/#about"
          className="hidden lg:block font-extrabold text-lg opacity-50 cursor-pointer hover:opacity-100"
        >
          ABOUT
        </a>

        <TbSquareRotatedFilled className="hidden lg:block opacity-50" />
        <Link href="/">
          <Image src="/assets/logoText.png" height={300} width={300} />
        </Link>
        <TbSquareRotatedFilled className="hidden lg:block opacity-50" />

        <a
          href="/#speakers"
          className="hidden lg:block font-extrabold text-lg opacity-50 cursor-pointer hover:opacity-100"
        >
          SPEAKERS
        </a>

        <TbSquareRotatedFilled className="hidden lg:block opacity-50" />

        <a
          href="/#contact"
          className="hidden lg:block font-extrabold text-lg opacity-50 cursor-pointer hover:opacity-100"
        >
          CONTACT
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
