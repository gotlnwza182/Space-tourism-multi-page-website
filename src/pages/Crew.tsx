import { useState } from "react";
import Navbar from "../components/Navbar";
import data from "../data/data.json";
type Props = {};

export default function Crew({}: Props) {
  const [crew, setCrew] = useState<string>("Douglas Hurley");
  return (
    <div className=" min-h-screen bg-cover bg-no-repeat bg-crew-mobile md:bg-crew-tablet lg:bg-crew-desktop py-10">
      <Navbar />
      <main className="text-white text-center w-[375px] md:w-[768px] lg:w-[1440px] mx-auto lg:mt-28 lg:px-40 ">
        {data.crew
          .filter((el) => el.name.toLowerCase() === crew.toLowerCase())
          .map((el) => (
            <div className="flex flex-col justify-between items-center px-2 lg:flex-row">
              <div className="flex flex-col justify-center md:w-[768px] lg:w-[700px]">
                <div>
                  <h1 className="uppercase font-bold tracking-wider py-12 md:text-start lg:pb-36 lg:text-xl ">
                    <span className=" text-white/[0.25]">02</span> Meet Your
                    Crew
                  </h1>
                </div>
                {/* image for small screen */}
                <div className="flex justify-center items-center md:hidden">
                  <img
                    src={el.images.webp}
                    alt={`${el.name} img`}
                    className="h-[222px]"
                  />
                </div>
                <hr className="border-[#979797] md:hidden" />

                <div className="hidden md:inline-block">
                  <div className="flex flex-col justify-center items-center">
                    <h2 className="text-[24px] lg:text-2xl uppercase text-[#979797] mb-4">
                      {el.role}
                    </h2>
                    <h1 className=" text-[40px] lg:text-3xl uppercase lg:mb-8">
                      {el.name}
                    </h1>
                    <p className=" text-light-bluish md:w-[458px] md:mt-4 lg:text-[20px] lg:mb-12 lg:w-[448px] lg:h-[151px]">
                      {el.bio}
                    </p>
                  </div>
                </div>

                <div className="flex justify-center items-center gap-8 mt-8 h-[10px] lg:mt-10">
                  <button
                    className={` rounded-full w-[10px] h-[10px] lg:w-[15px] lg:h-[15px] ${
                      crew === "Douglas Hurley"
                        ? "cursor-default bg-white"
                        : "bg-white/[0.18] hover:bg-white/[0.5]"
                    } py-2`}
                    onClick={() => setCrew("Douglas Hurley")}
                  ></button>
                  <button
                    className={` rounded-full w-[10px] h-[10px] lg:w-[15px] lg:h-[15px] ${
                      crew === "Mark Shuttleworth"
                        ? "cursor-default bg-white"
                        : "bg-white/[0.18] hover:bg-white/[0.5]"
                    } py-2`}
                    onClick={() => setCrew("Mark Shuttleworth")}
                  ></button>
                  <button
                    className={` rounded-full w-[10px] h-[10px] lg:w-[15px] lg:h-[15px] ${
                      crew === "Victor Glover"
                        ? "cursor-default bg-white"
                        : "bg-white/[0.18] hover:bg-white/[0.5]"
                    } py-2`}
                    onClick={() => setCrew("Victor Glover")}
                  ></button>
                  <button
                    className={` rounded-full w-[10px] h-[10px] lg:w-[15px] lg:h-[15px] ${
                      crew === "Anousheh Ansari"
                        ? "cursor-default bg-white"
                        : "bg-white/[0.18] hover:bg-white/[0.5]"
                    } py-2`}
                    onClick={() => setCrew("Anousheh Ansari")}
                  ></button>
                </div>

                <div className="mt-8 md:hidden">
                  <h2 className="lg:text-2xl uppercase text-[#979797] mb-4">
                    {el.role}
                  </h2>
                  <h1 className=" text-[24px] lg:text-3xl uppercase lg:mb-8">
                    {el.name}
                  </h1>
                  <p className="lg:text-[20px] text-light-bluish  lg:mb-12 lg:w-[448px] lg:h-[151px]">
                    {el.bio}
                  </p>
                </div>
              </div>
              {/* image for medium and large screen */}
              <div className="mt-10 hidden md:inline-block">
                <img
                  src={el.images.webp}
                  alt={`${el.name} img`}
                  className="h-[572px] lg:h-[620px]"
                />
              </div>
            </div>
          ))}
      </main>
    </div>
  );
}
