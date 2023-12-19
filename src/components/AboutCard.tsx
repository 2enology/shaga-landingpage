import { FC } from "react";
import { AboutCardFirstIcon, AboutIcon } from "./Svglist";

const AboutCard: FC = () => {
  return (
    <div className="bg-transparent rounded-[41px] md:p-[53px] p-5 flex items-start justify-center flex-col border-[3px] border-[#29B080] bg-[#1F1F1F] bg-opacity-50">
      <div className="flex items-center justify-center p-[28px] rounded-[22px] border-[1px] bg-transparent border-[#29B080] border-opacity-40">
        <AboutCardFirstIcon />
      </div>
      <p className="text-[37px] font-bold mt-[36px] text-transparent bg-gradient-to-br from-[#32c28da9] to-[#12fff73b] bg-clip-text">
        Node Operator
      </p>
      <h1 className="text-white font-bold md:text-[48px] text-[40px]">
        Earn from your PC
      </h1>
      <span className="text-[18px] text-[#B3B3B7]">
        Are you a game dev tired of having to focus more on building a community
        then building your game? Or a user tired of having to change 15
        different platforms to do some P2E? Quests brings the best and easiest
        User Experience for anybody to earn from your game just by scrolling
        Twitter, and an easy way for new games to get tested and acquire
        visibility.
      </span>
    </div>
  );
};

export default AboutCard;
