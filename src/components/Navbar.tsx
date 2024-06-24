import { useState } from "react";
import { NavLink } from "react-router-dom";
type Props = {};

export default function Navbar({}: Props) {
  const [hamberger, setHamberger] = useState<boolean>(false);

  return (
    <nav className="lg:h-24 text-white flex justify-center items-center pl-8">
      <div className="flex items-center justify-between relative w-[375px] md:w-[768px] lg:w-[1440px]">
        <div>
          <img src="./assets/shared/logo.svg" alt="logo" />
        </div>
        <hr className="lg:border-white/[0.25] lg:w-[550px] lg:absolute lg:left-24 lg:z-10" />
        <button onClick={() => setHamberger(true)} className="md:hidden">
          <img
            src="./assets/shared/icon-hamburger.svg"
            alt="hamberger-icon"
            className="h-[21px] w-[24px]"
          />
        </button>
        <div
          className={`flex bg-white/[0.04] backdrop-blur-md uppercase h-screen absolute right-0 top-0 w-3/4 md:w-[450px] md:h-24 md:flex-row md:justify-center md:static lg:w-[830px] lg:justify-start ${
            !hamberger ? "hidden md:inline-block" : "inline-block"
          }`}
        >
          <button onClick={() => setHamberger(false)} className="md:hidden">
            <img
              src="./assets/shared/icon-close.svg"
              alt="close icon"
              className="w-6 h-6 absolute right-10 top-10 cursor-pointer"
            />
          </button>

          <ul className="flex flex-col gap-10 items-start text-sm ml-8 mt-32 md:flex-row md:h-24 md:items-center md:mt-0 lg:text-base lg:ml-24 ">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => {
                  return isActive
                    ? "md:border-b-[3px] border-white pb-9"
                    : "hover:border-b-[3px] hover:border-[#979797] hover:text-[#979797] hover:pb-9";
                }}
              >
                <span className="mr-4 font-bold md:hidden lg:inline-block">
                  00
                </span>
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/destination"
                className={({ isActive }) => {
                  return isActive
                    ? "md:border-b-[3px] border-white pb-9"
                    : "hover:border-b-[3px] hover:border-[#979797] hover:text-[#979797] hover:pb-9";
                }}
              >
                <span className="mr-4 font-bold md:hidden lg:inline-block">
                  01
                </span>
                Destination
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/crew"
                className={({ isActive }) => {
                  return isActive
                    ? "md:border-b-[3px] border-white pb-9"
                    : "hover:border-b-[3px] hover:border-[#979797] hover:text-[#979797] hover:pb-9";
                }}
              >
                <span className="mr-4 font-bold md:hidden lg:inline-block">
                  02
                </span>
                Crew
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/technology"
                className={({ isActive }) => {
                  return isActive
                    ? "md:border-b-[3px] border-white pb-9"
                    : "hover:border-b-[3px] hover:border-[#979797] hover:text-[#979797] hover:pb-9";
                }}
              >
                <span className="mr-4 font-bold md:hidden lg:inline-block">
                  03
                </span>
                Technology
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
