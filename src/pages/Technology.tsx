import { useState } from "react";
import Navbar from "../components/Navbar";
import data from "../data/data.json";

type Props = {};

export default function technology({}: Props) {
  const [technology, setTechnology] = useState<string>("Launch vehicle");

  return (
    <div className=" min-h-screen bg-cover bg-no-repeat bg-technology-mobile md:bg-technology-tablet lg:bg-technology-desktop py-10">
      <Navbar />
      <main className="text-white w-[375px] md:w-[768px] lg:w-[1440px] mx-auto lg:mt-28 lg:pl-40 ">
        {data.technology
          .filter((el) => el.name.toLowerCase() === technology.toLowerCase())
          .map((el) => (
            <div className="flex flex-col justify-between items-center px-2 mt-10 lg:mt-0 lg:flex-row">
              <div className="flex flex-col mr-2">
                <div>
                  <h1 className=" uppercase font-bold tracking-wider pb-8 md:text-[20px] lg:pb-32 lg:text-xl ">
                    <span className=" text-white/[0.25]">03</span> sapce launch
                    101
                  </h1>
                  <div className="lg:hidden">
                    <img
                      src={el.images.landscape}
                      alt={`${el.name} img`}
                      className="w-full"
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center lg:flex-row">
                  <div className="flex gap-8 mt-10 lg:mr-12 lg:flex-col">
                    <button
                      className={` rounded-full w-[40px] h-[40px] md:w-[60px] md:h-[60px] md:text-[24px] lg:w-[80px] lg:h-[80px] lg:text-xl ${
                        technology === "Launch vehicle"
                          ? "cursor-default bg-white text-black "
                          : "border border-gray-500 hover:border-white"
                      } py-2`}
                      onClick={() => setTechnology("Launch vehicle")}
                    >
                      1
                    </button>
                    <button
                      className={` rounded-full w-[40px] h-[40px] md:w-[60px] md:h-[60px] md:text-[24px] lg:w-[80px] lg:h-[80px] lg:text-xl ${
                        technology === "Spaceport"
                          ? "cursor-default bg-white text-black"
                          : "border border-gray-500 hover:border-white"
                      } py-2`}
                      onClick={() => setTechnology("Spaceport")}
                    >
                      2
                    </button>
                    <button
                      className={` rounded-full w-[40px] h-[40px] md:w-[60px] md:h-[60px] md:text-[24px] lg:w-[80px] lg:h-[80px] lg:text-xl ${
                        technology === "Space capsule"
                          ? "cursor-default bg-white text-black "
                          : "border border-gray-500 hover:border-white"
                      } py-2`}
                      onClick={() => setTechnology("Space capsule")}
                    >
                      3
                    </button>
                  </div>
                  <div className="flex flex-col text-center lg:text-start lg:w-[500px] ">
                    <div>
                      <h2 className="text-sm uppercase text-light-bluish mt-8 mb-4 md:text-base lg:text-lg ">
                        The Terminoldgy...
                      </h2>
                      <h1 className=" text-[24px] uppercase lg:mb-8 md:text-[40px] lg:text-3xl">
                        {el.name}
                      </h1>
                      <p className="text-[15px] text-light-bluish  md:text-base md:w-[458px] lg:text-[20px] lg:w-[430px]">
                        {el.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-12 hidden lg:inline-block">
                <img
                  src={el.images.portrait}
                  alt={`${el.name} img`}
                  className="w-full"
                />
              </div>
            </div>
          ))}
      </main>
    </div>
  );
}
