/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import { SliderComma } from "./Svglist";

interface SliderItemProps {
  left: number | string;
  id: number;
}

const SliderCard: FC<SliderItemProps> = ({ left, id }) => {
  return (
    <div
      className="absolute bg-gradient-to-b from-[#1F1F20] to-[transparent] rounded-[22px] p-[32px] gap-[32px] md:w-[538px] w-full overflow-auto -translate-x-1/2 transition-all duration-200"
      style={{
        left,
      }}
    >
      <div className="flex items-center justify-start gap-[10px]">
        <img src="/imgs/avatar.png" alt="" />
        <div className="flex flex-col gap-[5px]">
          <p className="text-[21px] text-white">Meta </p>
          <span className="text-[15px] text-[#71767B]">@Thomas_meta</span>
        </div>
      </div>
      <div className="flex text-[#B3B3B7] relativetext-[21px] mt-[32px] gap-3">
        <i>
          {" "}
          <SliderComma />
        </i>
        <span>
          These guys at{" "}
          <span className="text-[#1DA1F2] cursor-pointer">@Solarity_VR</span>{" "}
          {`work hard, tinker a lot and never cease to amaze me on how much they
      work. Can't wait for the future.`}
        </span>
      </div>
    </div>
  );
};

export default SliderCard;
