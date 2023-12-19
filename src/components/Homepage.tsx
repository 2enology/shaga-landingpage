import { HEADER_LINKS } from "@/config";
import { FC } from "react";
import { Gradient1Icon, Gradient2Icon, StreamNowIcon } from "./Svglist";

const Header: FC = () => {
  return (
    <div className="w-full flex items-center justify-center md:mt-[81px] mt-[40px]">
      <div className="w-full max-w-[1340px] px-[15px] flex items-center justify-between">
        <div className="w-full flex flex-col justify-start items-start">
          <div className="relative max-w-[700px] font-[600] py-[96px] flex flex-col gap-[48px]">
            <div className="top-0 absolute">
              <Gradient1Icon />
            </div>
            <div className="top-[23px] left-[29px] absolute">
              <Gradient2Icon />
            </div>
            <p className="text-white md:text-[88px] text-[40px]">
              Web3{" "}
              <span className="text-transparent bg-gradient-to-tr from-white to-[#36C995] bg-clip-text md:text-[88px] text-[40px]">
                Cloud{" "}
              </span>
              Gaming
            </p>
            {/* <button
              className="py-4 rounded-[22px] border-[1px] border-[#29B080] bg-[#162724] flex gap-[4px] items-center justify-center 
            w-[212px] md:absolute top-[253px] right-[108px] text-[#29B080]"
            >
              <span>#1</span>
              <span>
                Hyperdrive
                <br /> Winners
              </span>
            </button> */}
            <p className="text-white text-[24px] font-[400]">
              Bring exposure to your game, content to your <br /> communities
              and monetize your content directly on!
            </p>
            <div className="w-full flex items-center justify-start gap-[32px]">
              <button className="bg-[#29B080] rounded-[22px] text-white text-[12px] md:text-[20px] py-[13px] md:py-[23px] px-[32px] border-[5px] border-[#070e0ba9] shadow-join">
                Join Waitlist
              </button>
              <button className="bg-[#162724] rounded-[22px] text-[#29B080] text-[12px] md:text-[20px] py-[13px] md:py-[23px] px-[32px] border-[1px] border-[#29B080] gap-[8px] flex items-center justify-center">
                <StreamNowIcon /> Stream Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
