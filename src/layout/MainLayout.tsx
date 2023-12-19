/* eslint-disable @next/next/no-img-element */
import { FC, ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AbsoluteBg from "@/components/AbsoluteBg";

interface Props {
  meta?: ReactNode;
  children?: ReactNode;
  className?: string;
  bgSrc?: string;
  bgClass?: string;
  pageLoading?: boolean;
}

const MainLayout: FC<Props> = ({
  children,
  className,
  bgSrc,
  bgClass,
  pageLoading,
}) => {
  return (
    <div className="relative overflow-hidden w-full flex items-start justify-center flex-col">
      <Header />
      <main
        className={`relative overflow-hidden w-full flex items-start justify-center flex-col ${
          className ? className : ""
        }`}
        style={{
          paddingBottom: 480,
        }}
      >
        {children}
      </main>
      <Footer />
      {bgSrc && !pageLoading && (
        <img src={bgSrc} className={bgClass} alt="nft image" />
      )}
      <AbsoluteBg />
    </div>
  );
};

export default MainLayout;
