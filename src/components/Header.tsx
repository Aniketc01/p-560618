import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="flex justify-between items-center bg-white px-[120px] py-[60px] max-md:px-[60px] max-md:py-[30px] max-sm:p-5">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/16c7e68255b2d7aec7bb07d2d0fb6bb7c7fbdb5d"
        alt="TitleMine Logo"
        className="w-[102px] h-11 max-sm:w-20 max-sm:h-[35px]"
      />
      <nav className="flex items-center gap-10 max-md:hidden">
        <Link
          to="/"
          className="text-base text-[#202124] cursor-pointer px-0 py-2.5"
        >
          Home
        </Link>
        <Link
          to="/what-we-do"
          className="text-base text-[#202124] cursor-pointer px-0 py-2.5"
        >
          What We Do
        </Link>
        <Link
          to="/early-access"
          className="text-base text-[#202124] cursor-pointer px-0 py-2.5"
        >
          Early Access Program
        </Link>
        <Link
          to="/contact"
          className="text-base text-[#202124] cursor-pointer px-0 py-2.5"
        >
          Contact Us
        </Link>
        <Button
          variant="secondary"
          className="text-sm text-[#202124] w-[168px] text-center shadow-[0_4px_14px_rgba(92,46,46,0.25)] cursor-pointer bg-[rgba(229,229,229,0.81)] px-0 py-[11px] rounded-[5px]"
        >
          Log in
        </Button>
      </nav>
    </header>
  );
};
