import { useEffect, useState } from "react";
import SliderCard from "./SliderCard";

const AboutSlider = () => {
  const initialStylesDesktop = [
    {
      width: 538,
      height: 232,
      left: "50%",
      zIndex: 1,
    },
    {
      width: 538,
      height: 232,
      left: "calc(50% + 538px + 120px)",
      zIndex: 2,
    },
    {
      width: 538,
      height: 232,
      left: "calc(50% + 538px + 120px + 538px + 120px)",
      zIndex: 3,
    },
    {
      width: 538,
      height: 232,
      left: "calc(50% - 538px - 120px)",
      zIndex: 4,
    },
  ];

  const [styles, setStyles] = useState(initialStylesDesktop);
  const [activeId, setActiveId] = useState(0);

  useEffect(() => {
    const result = initialStylesDesktop
      .slice(activeId)
      .concat(initialStylesDesktop.slice(0, activeId));
    setStyles(result);
    // eslint-disable-next-line
  }, [activeId]);

  return (
    <div className="w-full">
      <div className="">
        {styles.map((item, key) => (
          <SliderCard left={item.left} id={key + 1} key={key} />
        ))}
      </div>
      <div className="flex items-center justify-center pt-[302px] gap-[18px]">
        <div
          className="border rounded-full w-[14px] h-[14px] border-[#29B080] cursor-pointer"
          onClick={() => setActiveId(0)}
          style={{
            background: activeId === 0 ? "#29B080" : "transparent",
          }}
        />
        <div
          className="border rounded-full w-[14px] h-[14px] border-[#29B080] cursor-pointer"
          onClick={() => setActiveId(1)}
          style={{
            background: activeId === 1 ? "#29B080" : "transparent",
          }}
        />
        <div
          className="border rounded-full w-[14px] h-[14px] border-[#29B080] cursor-pointer"
          onClick={() => setActiveId(2)}
          style={{
            background: activeId === 2 ? "#29B080" : "transparent",
          }}
        />
        <div
          className="border rounded-full w-[14px] h-[14px] border-[#29B080] cursor-pointer"
          onClick={() => setActiveId(3)}
          style={{
            background: activeId === 3 ? "#29B080" : "transparent",
          }}
        />
      </div>
    </div>
  );
};

export default AboutSlider;
