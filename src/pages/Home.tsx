import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

type Props = {};

export default function Home({}: Props) {
  return (
    <div className=" min-h-screen bg-cover bg-no-repeat bg-home-mobile md:bg-home-tablet lg:bg-home-desktop py-10">
      <Navbar />
      <main className="flex flex-col mx-auto items-center mt-20 w-[375px] md:w-[768px] lg:w-[1440px] lg:flex-row lg:justify-between lg:items-end lg:px-40 md:mt-28 lg:mt-80">
        <div className="text-white text-center lg:text-start lg:w-[450px]">
          <h3 className="text-base md:text-[20px] lg:text-xl text-light-bluish mb-8">
            SO, YOU WANT TO TRAVEL TO
          </h3>
          <h1 className="text-4xl md:text-9xl mb-10">SPACE</h1>
          <p className="text-light-bluish text-lg md:text-base md:w-[444px]">
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </div>
        <Link to="/destination">
          <div className="w-[150px] h-[150px] mt-20 bg-white rounded-full flex items-center justify-center cursor-pointer hover:shadow-[0_0_0_88px_rgba(255,255,255,0.1)] md:w-[242px] md:h-[242px] md:mt-24 lg:w-[274px] lg:h-[274px] ">
            <h2 className=" text-2xl">EXPLORE</h2>
          </div>
        </Link>
      </main>
    </div>
  );
}
