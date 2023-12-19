/* eslint-disable @next/next/no-img-element */
import { HEADER_LINKS } from "@/config";
import { FC } from "react";

const Header: FC = () => {
  return (
    <div className="py-[23px] w-full flex items-center justify-center">
      <div className="w-full max-w-[1266px] px-[15px] flex items-center justify-between">
        <div className="flex items-center justify-center gap-[20px] cursor-pointer">
          <img alt="/imgs/logo.png" src="/imgs/logo.png" />
          <p className="uppercase text-white text-[25px] logofont">shaga</p>
          <div className="rounded-[17px] border-[1px] border-[#29B080] py-[2px] px-[45px] text-center bg-[#162724]">
            <span className="text-[#29B080] text-[15px] font-semibold">
              Hyperdrive Winners
            </span>
            <p className="font-semibold text-white outline-1 outline-black text-[24px]">
              DePin Track
            </p>
          </div>
        </div>
        <div className="flex gap-[42px] items-center justify-center">
          {HEADER_LINKS.map((item, index) => (
            <li
              className="text-[18px] text-[#929298] list-none hidden md:block cursor-pointer"
              key={index}
            >
              {item.title}
            </li>
          ))}

          <button className="bg-[#29B080] rounded-[10px] text-white text-[18px] px-[21px] py-3">
            Join Waitlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
