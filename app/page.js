import Banner from "@/components/Home/Banner/Banner";
import HeaderOne from "@/components/Home/Header1/HeaderOne";
import HeaderTwo from "@/components/Home/Header2/HeaderTwo";
import HeaderThree from "@/components/Home/Header3/HeaderThree";
import Table from "@/components/Home/Table/Table";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Banner />
    <Table />
    <HeaderOne />
    <HeaderTwo />
    <HeaderThree />
    </>
  );
}
