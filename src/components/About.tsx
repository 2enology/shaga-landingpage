/* eslint-disable @next/next/no-img-element */
"use client";
import { FC, useEffect, useState } from "react";
import SliderCard from "./SliderCard";
import AboutCard from "./AboutCard";
import {
  AboutCardFirstIcon,
  AboutSecondIcon,
  Gradient1Icon,
  Gradient2Icon,
} from "./Svglist";
import AboutSlider from "./AboutSlider";

const About: FC = () => {
  return (
    <div className="w-full flex items-center justify-center mt-[155px] flex-col overflow-hidden">
      <div className="w-full md:px-[40px] px-[15px] flex flex-col gap-[70px] items-center justify-start relative max-w-[93rem] overflow-hidden">
        <div className="absolute left-[385px] filter blur-[100px] -z-10 top-[126px]">
          <img src="/imgs/Ellipse69.png" className="object-cover" alt="" />
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-[36px]">
          {AboutCardData.map((data, index) => (
            <AboutCard
              key={index}
              icon={data.icon}
              role={data.role}
              secondTitle={data.secondTitle}
              content={data.content}
            />
          ))}
        </div>
        <div className="flex flex-col w-full">
          <div
            className="flex items-center justify-start text-[24px] md:text-[64px] font-bold md:gap-[32px] gap-[10px] lg:ml-[100px]
           "
          >
            <img
              src="/imgs/comma.png"
              alt=""
              className="md:w-[160px] w-[50px]"
            />

            <span className="text-transparent bg-gradient-to-br from-[#ffffff] to-[#c7c5c5d0] bg-clip-text ">
              <span className="text-white">What people say </span>
              about us
            </span>
          </div>
          <AboutSlider />
        </div>
        <div className="flex flex-col w-full">
          <div
            className="relative flex items-center justify-start text-[24px] md:text-[64px] font-bold md:gap-[32px] gap-[10px] lg:ml-[100px]
           "
          >
            <div className="absolute top-0 right-0">
              <Gradient1Icon />
            </div>
            <div className="top-[43px] right-[29px] absolute">
              <Gradient2Icon />
            </div>
            <img
              src="/imgs/comma.png"
              alt=""
              className="md:w-[160px] w-[50px]"
            />

            <span className="text-transparent bg-gradient-to-br from-[#ffffff] to-[#c7c5c5d0] bg-clip-text ">
              <span className="text-white">What Game Devs </span>
              say
            </span>
          </div>
          <AboutSlider />
        </div>
      </div>
    </div>
  );
};

export default About;

const AboutCardData = [
  {
    icon: <AboutCardFirstIcon />,
    role: "Node Operator",
    secondTitle: "Earn from your PC",
    content:
      "Are you a game dev tired of having to focus more on building a community then building your game? Or a user tired of having to change 15 different platforms to do some P2E? Quests brings the best and easiest User Experience for anybody to earn from your game just by scrolling Twitter, and an easy way for new games to get tested and acquire visibility.",
  },
  {
    icon: <AboutSecondIcon />,
    role: "Gamer",
    secondTitle: "Play Effortlessly",
    content:
      "Are you a game dev tired of having to focus more on building a community then building your game? Or a user tired of having to change 15 different platforms to do some P2E? Quests brings the best and easiest User Experience for anybody to earn from your game just by scrolling Twitter, and an easy way for new games to get tested and acquire visibility.",
  },
];
