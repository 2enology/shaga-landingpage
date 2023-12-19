/* eslint-disable @next/next/no-img-element */
import { HEADER_LINKS } from "@/config";
import { FC } from "react";

const Header: FC = () => {
  return (
    <div className="py-[23px] w-full flex items-center justify-center">
      <div className="w-full max-w-[1340px] px-[15px] flex items-center justify-between">
        <div className="flex items-center justify-center gap-[14px] cursor-pointer">
          <img alt="/imgs/logo.png" src="/imgs/logo.png" />
          <p className="uppercase text-white text-[25px]">shaga</p>
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
            Get extension
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
