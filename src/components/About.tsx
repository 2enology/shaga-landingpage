/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import SliderCard from "./Slider/SliderCard";
import AboutCard from "./AboutCard";

const About: FC = () => {
  return (
    <div className="w-full flex items-center justify-center mt-[155px] flex-col">
      <div className="w-full max-w-[1340px] px-[15px] flex flex-col gap-[70px] items-center justify-start relative">
        <div className="absolute left-[385px] filter blur-[100px] -z-10 top-[126px]">
          <img src="/imgs/Ellipse69.png" className="object-cover" alt="" />
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-[36px]">
          <AboutCard />
          <AboutCard />
        </div>
        <div className="w-full flex flex-col">
          <div
            className="flex items-center justify-start text-[24px] md:text-[64px] font-bold md:gap-[32px] gap-[10px] lg:ml-[100px]
           "
          >
            <img
              src="/imgs/comma.png"
              alt=""
              className="md:w-[160px] w-[50px]"
            />

            <span className="text-transparent bg-gradient-to-br from-[#ffffff] to-[#859e958a] bg-clip-text ">
              <span className="text-white">What people say </span>
              about us
            </span>
          </div>
          <div className="w-full grid lg:grid-cols-3 grid-cols-1 gap-[40px] mt-[76px]">
            <SliderCard />
          </div>
        </div>
        <div className="w-full flex flex-col">
          <div
            className="flex items-center justify-start text-[24px] md:text-[64px] font-bold md:gap-[32px] gap-[10px] lg:ml-[100px]
           "
          >
            <img
              src="/imgs/comma.png"
              alt=""
              className="md:w-[160px] w-[50px]"
            />

            <span className="text-transparent bg-gradient-to-br from-[#ffffff] to-[#859e958a] bg-clip-text ">
              <span className="text-white">What Game Devs </span>
              say
            </span>
          </div>
          <div className="w-full grid lg:grid-cols-3 grid-cols-1 gap-[40px] mt-[76px]">
            <SliderCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
