import Link from "next/link";
import { TbSquareRotatedFilled } from "react-icons/tb";

const Navbar = () => {
  return (
    <nav className="hidden lg:block w-screen absolute z-50">
      <div className="navbar  text-white w-[80vw] h-24 flex justify-around m-auto items-center ">
        <a
          href="/events"
          className="font-extrabold text-lg opacity-50 cursor-pointer hover:opacity-100"
        >
          EVENTS
        </a>

        <TbSquareRotatedFilled className="opacity-50" />

        <a
          href="/#about"
          className="font-extrabold text-lg opacity-50 cursor-pointer hover:opacity-100"
        >
          ABOUT
        </a>

        <TbSquareRotatedFilled className="opacity-50" />
        <Link href="/">
          <div className=" font-black text-4xl cursor-pointer">
            <span className=" text-purple-800">T</span>antra
            <span className=" text-purple-800">F</span>iesta
          </div>
        </Link>
        <TbSquareRotatedFilled className="opacity-50" />

        <a
          href="/#speakers"
          className="font-extrabold text-lg opacity-50 cursor-pointer hover:opacity-100"
        >
          SPEAKERS
        </a>

        <TbSquareRotatedFilled className="opacity-50" />

        <a
          href="/#contact"
          className="font-extrabold text-lg opacity-50 cursor-pointer hover:opacity-100"
        >
          CONTACT
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
