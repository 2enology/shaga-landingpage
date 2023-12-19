/* eslint-disable @next/next/no-img-element */
import { FC } from "react";

const AbsoluteBg: FC = () => {
  return (
    <div className="hidden w-full lg:block">
      <div className="w-[265px] h-[265px] bg-[#1BA874] absolute top-[-107px] left-[-17px] filter blur-[200px]" />{" "}
      <div className="absolute top-[122px] right-[-102px] -z-10">
        <img src="/imgs/home.png" className="object-cover" alt="" />
      </div>
      {/* <div className="absolute top-[122px] right-[-132px] -z-10 filter blur-[30px]">
        <img src="/imgs/Ellipse69.png" className="object-cover" alt="" />
      </div> */}
      <div className="absolute top-[580px] right-[-459px] -z-10">
        <img src="/imgs/Ellipse17.png" className="object-cover" alt="" />
      </div>
      {/* <div className="absolute top-[390px] right-[8px] -z-10">
        <img src="/imgs/phone.png" className="object-cover" />
      </div>
      <div className="absolute top-[191px] right-[460px]">
        <img src="/imgs/diamond.png" className="object-cover" />
      </div>
      <div className="absolute top-[277px] right-[74px]">
        <img src="/imgs/solanaIcon.png" className="object-cover" />
      </div>
      <div className="absolute top-[214px] right-0">
        <img src="/imgs/ellipse.png" className="object-cover" />
      </div>
      <div className="absolute top-[544px] right-[110px]">
        <img src="/imgs/nftIcon.png" className="object-cover" />
      </div>
      <div className="absolute top-[470px] right-[0px] -z-[11px]">
        <VectorPhone />
      </div>
      <div className="absolute top-[340px] right-[-350px] -z-[11px]">
        <VectorEclipse />
      </div> */}
    </div>
  );
};

export default AbsoluteBg;
