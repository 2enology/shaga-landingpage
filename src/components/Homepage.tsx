/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import { Gradient1Icon, Gradient2Icon, StreamNowIcon } from "./Svglist";

const Header: FC = () => {
  return (
    <div className="w-full flex items-center justify-center md:mt-[10px] mt-[40px] relative">
      <div className="w-full max-w-[93rem]  px-[15px] md:px-[40px] flex items-center justify-between relative">
        <div className="flex flex-col-reverse items-center justify-between w-full lg:flex-row">
          <div className="relative max-w-[700px] font-[600] py-[96px] flex flex-col gap-[48px]">
            <div className="absolute top-0">
              <Gradient1Icon />
            </div>
            <div className="top-[23px] left-[29px] absolute">
              <Gradient2Icon />
            </div>
            <p className="text-white md:text-[58px] lg:text-[88px] text-[35px]">
              Web3{" "}
              <span className="text-transparent bg-gradient-to-tr from-white to-[#36C995] bg-clip-text md:text-[58px] lg:text-[88px] text-[40px]">
                Cloud{" "}
              </span>
              Gaming
            </p>
            <p className="text-white text-[24px] font-[400]">
              Bring exposure to your game, content to your <br /> communities
              and monetize your content directly on!
            </p>
            <div className="w-full flex items-center justify-start gap-[32px]">
              <button className="bg-[#29B080] rounded-[22px] text-white text-[12px] md:text-[20px] py-[13px] md:py-[23px] px-[32px] border-[5px] border-[#070e0bcc] shadow-join">
                Join Waitlist
              </button>
              <button className="bg-[#162724] rounded-[22px] text-[#29B080] text-[12px] md:text-[20px] py-[13px] md:py-[23px] px-[32px] border-[1px] border-[#29B080] gap-[8px] flex items-center justify-center">
                <StreamNowIcon /> Stream Now
              </button>
            </div>
          </div>
          <div className="relative flex items-center justify-end h-full -z-10">
            <img src="/imgs/home.png" className="object-cover w-full" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
