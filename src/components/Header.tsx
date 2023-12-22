"use client";
/* eslint-disable @next/next/no-img-element */
import { HEADER_LINKS } from "@/config";
import { FC, useState } from "react";

import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const Header: FC = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <>
      <div className="py-[23px] w-full flex items-center justify-center">
        <div className="w-full max-w-[93rem]  px-[15px] md:px-[40px] flex items-center justify-between">
          <div className="flex items-center justify-center md:gap-[20px] gap-3 cursor-pointer">
            <img alt="/imgs/logo.png" src="/imgs/logo.png" />
            <p className="uppercase text-white md:text-[25px] text-[20px] logofont">
              shaga
            </p>
            <div className="rounded-[17px] border-[1px] border-[#29B080] py-[2px] px-[45px] text-center bg-[#162724] lg:block hidden">
              <span className="text-[#29B080] text-[15px] font-semibold">
                Hyperdrive Winners
              </span>
              <p className="font-semibold text-white outline-1 outline-black text-[24px]">
                DePin Track
              </p>
            </div>
          </div>
          <div className="lg:gap-[42px] gap-[30px] items-center justify-center flex">
            {HEADER_LINKS.map((item, index) => (
              <li
                className="text-[18px] text-[#929298] list-none hidden lg:block cursor-pointer"
                key={index}
              >
                {item.title}
              </li>
            ))}

            <button className="bg-[#29B080] rounded-[10px] text-white text-[18px] px-[21px] py-3 hidden lg:block">
              Join Waitlist
            </button>
          </div>
          <div
            className="flex justify-center cursor-pointer item-center lg:hidden z-[9999]"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            {showMobileMenu ? (
              <IoMdClose color="white" size="30" />
            ) : (
              <CiMenuFries color="white" size="30" />
            )}
          </div>
        </div>
      </div>
      {showMobileMenu && (
        <div className="fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-20 backdrop-blur-md z-[9998] items-center justify-center flex flex-col gap-10 lg:hidden">
          {HEADER_LINKS.map((item, index) => (
            <li
              className="text-[30px] text-white list-none cursor-pointer"
              key={index}
            >
              {item.title}
            </li>
          ))}
          <div className="rounded-[17px] border-[1px] border-[#29B080] py-[2px] px-[45px] text-center bg-[#162724]">
            <span className="text-[#29B080] text-[15px] font-semibold">
              Hyperdrive Winners
            </span>
            <p className="font-semibold text-white outline-1 outline-black text-[24px]">
              DePin Track
            </p>
          </div>

          <button className="bg-[#29B080] rounded-[10px] text-white text-[18px] px-[21px] py-3">
            Join Waitlist
          </button>
        </div>
      )}
    </>
  );
};

export default Header;
