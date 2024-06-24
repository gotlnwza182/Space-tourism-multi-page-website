import { useState } from "react";
import Navbar from "../components/Navbar";
import data from "../data/data.json";
type Props = {};

export default function destination({}: Props) {
  const [des, setDes] = useState<string>("Moon");

  return (
    <div className=" min-h-screen bg-cover bg-no-repeat bg-destination-mobile md:bg-destination-tablet lg:bg-destination-desktop py-10">
      <Navbar />
      <main className="text-white text-center w-[375px] mt-16 md:w-[768px] lg:text-start lg:w-[1440px] mx-auto lg:mt-28 lg:px-40">
        <div>
          <h1 className=" uppercase font-bold tracking-wider pb-8 md:text-start md:text-lg lg:text-xl">
            <span className=" text-white/[0.25]">01</span> Pick your destination
          </h1>
        </div>
        {data.destinations
          .filter((el) => el.name.toLowerCase() === des.toLowerCase())
          .map((el) => (
            <div className="flex flex-col justify-between items-center px-6 lg:flex-row">
              <div className="pb-4">
                <img
                  src={el.images.png}
                  alt={`${el.name} img`}
                  className="w-[170px] h-[170px] md:w-[300px] md:h-[300px] lg:w-[445px] lg:h-[445px]"
                />
              </div>
              <div className="lg:w-[445px]">
                <div className="flex justify-center gap-8 mb-4 md:my-8 lg:mb-10 lg:justify-normal">
                  <button
                    className={`uppercase text-light-bluish ${
                      des === "Moon"
                        ? "cursor-default border-b-[3px] border-white rounded-sm text-white"
                        : "hover:border-b-[3px] hover:border-white/[0.5]"
                    } py-2`}
                    onClick={() => setDes("Moon")}
                  >
                    Moon
                  </button>
                  <button
                    className={`uppercase text-light-bluish ${
                      des === "Mars"
                        ? "cursor-default border-b-[3px] border-white rounded-sm text-white"
                        : "hover:border-b-[3px] hover:border-white/[0.5]"
                    } py-2`}
                    onClick={() => setDes("Mars")}
                  >
                    Mars
                  </button>
                  <button
                    className={`uppercase  text-light-bluish ${
                      des === "Europa"
                        ? "cursor-default border-b-[3px] border-white rounded-sm text-white"
                        : "hover:border-b-[3px] hover:border-white/[0.5]"
                    } py-2`}
                    onClick={() => setDes("Europa")}
                  >
                    Europa
                  </button>
                  <button
                    className={`uppercase text-light-bluish ${
                      des === "Titan"
                        ? "cursor-default border-b-[3px] border-white rounded-sm text-white"
                        : "hover:border-b-[3px] hover:border-white/[0.5]"
                    } py-2`}
                    onClick={() => setDes("Titan")}
                  >
                    Titan
                  </button>
                </div>
                <div>
                  <h1 className=" text-3xl uppercase lg:text-4xl lg:mb-8">
                    {el.name}
                  </h1>
                  <p className="text-lg md:w-[573px] lg:text-[20px] lg:mb-12">
                    {el.description}
                  </p>
                  <hr className="border-[#383B4B] my-8" />
                </div>
                <div className="flex flex-col justify-start items-center md:justify-center md:gap-20 md:flex-row lg:mt-6">
                  <div className="mb-8 md:mb-0 xl:mr-16">
                    <h4 className="text-md text-light-bluish">AVG. DISTANCE</h4>
                    <h3 className="text-xl uppercase mt-2">{el.distance}</h3>
                  </div>
                  <div>
                    <h4 className="text-md text-light-bluish">
                      EST. TRAVEL TIME
                    </h4>
                    <h3 className="text-xl uppercase mt-2">{el.travel}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </main>
    </div>
  );
}
