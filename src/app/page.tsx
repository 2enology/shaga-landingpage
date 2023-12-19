import About from "@/components/About";
import Advisor from "@/components/Advisor";
import Homepage from "@/components/Homepage";
import InfiniteSlider from "@/components/InfiniteSlider";
import MainLayout from "@/layout/MainLayout";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <MainLayout>
        <Homepage />
        <InfiniteSlider />
        <About />
        <Advisor />
      </MainLayout>
    </>
  );
}
