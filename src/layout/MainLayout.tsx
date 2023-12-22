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

const MainLayout: FC<Props> = ({ children, className }) => {
  return (
    <div className="relative flex flex-col items-start justify-center w-full overflow-hidden">
      <Header />
      <main
        className={`relative overflow-hidden w-full flex items-start justify-center flex-col ${
          className ? className : ""
        }`}
      >
        {children}
      </main>
      <Footer />
      <AbsoluteBg />
    </div>
  );
};

export default MainLayout;
