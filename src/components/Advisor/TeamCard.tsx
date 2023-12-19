import { FC } from "react";

const TeamCard: FC = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-[14px] text-center w-full">
      <div className="w-[165px] h-[165px] rounded-full bg-[#1F1F20]" />
      <p className="text-white font-semibold text-[30px]">Anatoly Yakovenko</p>
      <p className="text-white font-normal text-[25px]">Co-Founder of Solana</p>
    </div>
  );
};

export default TeamCard;
