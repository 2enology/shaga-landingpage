/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import { CONNECT_LINKS, FOOTER_COMPANY_LINKS, LEARN_LINKS } from "@/config";

const Footer: FC = () => {
  return (
    <div className="py-[23px] w-full flex items-center justify-center flex-col mt-[122px] logofont">
      <img src="/imgs/footerTopBar.png" className="w-full" alt="" />
      <div className="w-full max-w-[93rem]  px-[15px] lg:flex items-center justify-between mt-[122px]">
        <div className="flex flex-col lg:items-start items-center lg:justify-start gap-[41px] w-full">
          <div className="flex items-center justify-center gap-[14px]">
            <img alt="/imgs/logo.png" src="/imgs/logo.png" />
            <p className="uppercase text-white text-[25px] logofont">SHAGA</p>
          </div>
          <p className="text-white text-[20px] logofont">
            Join our mailing list for more updates!
          </p>
          <div className="md:w-[454px] w-full rounded-[15px] border-[1px] border-[#29B080] px-[16px] py-[12px] relative">
            <input
              className="outline-none bg-transparent placeholder-[#29B080] text-white logofont"
              placeholder="Email"
            />
            <button className="text-white absolute -top-[1px] -right-2 bg-[#29B080] px-[16px] py-[12px] rounded-[15px] border-[1px] border-[#29B080] logofont">
              Submit
            </button>
          </div>
        </div>
        <div className="flex md:gap-[110px] gap-[30px] mt-10 lg:mt-0 w-full items-start justify-center">
          <div className="flex flex-col gap-[28px]">
            <h1 className="text-[21px] font-semibold text-white logofont">
              Company
            </h1>
            <div className="flex flex-col gap-[20px]">
              {FOOTER_COMPANY_LINKS.map((item, index) => (
                <li
                  className="list-none text-white text-[16px] logofont"
                  key={index}
                >
                  {item.title}
                </li>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-[28px]">
            <h1 className="text-[21px] font-semibold text-white logofont">
              Learn
            </h1>
            <div className="flex flex-col gap-[20px]">
              {LEARN_LINKS.map((item, index) => (
                <li
                  className="list-none text-white text-[16px] logofont"
                  key={index}
                >
                  {item.title}
                </li>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-[28px]">
            <h1 className="text-[21px] font-semibold text-white logofont">
              Connect{" "}
            </h1>
            <div className="flex flex-col gap-[20px] items-start justify-start">
              {CONNECT_LINKS.map((item, index) => (
                <li
                  className="list-none text-white text-[16px] flex items-center justify-center gap-2 logofont"
                  key={index}
                >
                  {item.icon}
                  {item.title}
                </li>
              ))}
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-[14px] text-[#7E7E7E] mt-[67px] footerfont">
        {`© 2023 Shaga`}
      </p>
    </div>
  );
};

export default Footer;
