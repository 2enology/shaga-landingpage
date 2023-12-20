const AboutCard = (props: {
  icon: any;
  role: string;
  secondTitle: string;
  content: string;
}) => {
  return (
    <div className="rounded-[41px] md:p-[53px] p-5 flex items-start justify-center flex-col border-[3px] border-[#29B080] bg-[#1F1F1F] bg-opacity-50">
      <div className="flex items-center justify-center p-[28px] rounded-[22px] border-[1px] bg-transparent border-[#29B080] border-opacity-40">
        {props.icon}
      </div>
      <p className="text-[37px] font-bold mt-[36px] text-transparent bg-gradient-to-br from-[#32c28da9] to-[#12fff73b] bg-clip-text">
        {props.role}
      </p>
      <h1 className="text-white font-bold md:text-[48px] text-[35px]">
        {props.secondTitle}
      </h1>
      <span className="text-[18px] text-[#B3B3B7] logofont">
        {props.content}
      </span>
    </div>
  );
};

export default AboutCard;
