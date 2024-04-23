import Button from "@/components/Button/Button";
import Container from "@/components/Container/Container";
import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <div className="py-[50px]">
      <Container>
        <div className="grid md:grid-cols-2 gap-5">
          {/* left */}
          <div className="col flex flex-col items-start gap-4">
            <div className="flex items-center gap-3">
              <img src="/download.png" alt="no" />
              <span className="text-blue text-[18px] font-semibold">
                Investment made easy
              </span>
            </div>
            <h1 className="text-white font-bold text-[60px]">
              The Easiest Way to Track Multiple Currencies
            </h1>
            <p className="">
              Market Watchman allow you tu monitor your balances, trade without,
              limits and earn rewards for specific coins.
            </p>
            <div className="flex gap-3">
              <Button text={"Try Now"} style={"bg-dark text-white"} />
              <Button text={"How it works?"} style={"bg-darkBlue text-white"} />
            </div>
          </div>
          {/* right */}
          <div className="col relative">
            <Image src={"/banner.png"} fill/>
          </div>
        </div>
      </Container>
    </div>
  );
}
