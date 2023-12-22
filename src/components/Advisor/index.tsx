import { FC } from "react";
import TeamCard from "./TeamCard";

const Advisor: FC = () => {
  return (
    <div className="w-full flex items-center justify-center mt-[81px]">
      <div className="w-full max-w-[93rem]  px-[15px] flex items-center justify-center">
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="text-white md:text-[64px] text-[30px] font-bold">
            Angel and Advisors
          </h1>
          <div className="w-full grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-[34px] mt-[64px]">
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advisor;
