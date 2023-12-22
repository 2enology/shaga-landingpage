import About from "@/components/About";
import Advisor from "@/components/Advisor";
import Homepage from "@/components/Homepage";
import InfiniteSlider from "@/components/InfiniteSlider";
import MainLayout from "@/layout/MainLayout";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <MainLayout>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
          ></meta>
          <link
            href="https://fonts.googleapis.com/css?family=Outfit"
            rel="stylesheet"
          ></link>
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat"
            rel="stylesheet"
          ></link>
          <link rel="shortcut icon" href="/favicon.png"></link>
          <title>SGN</title>
        </Head>
        <Homepage />
        <InfiniteSlider />
        <About />
        <Advisor />
      </MainLayout>
    </>
  );
}
