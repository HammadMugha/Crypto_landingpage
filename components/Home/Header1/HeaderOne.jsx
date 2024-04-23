import Button from "@/components/Button/Button";
import Container from "@/components/Container/Container";
import Heading from "@/components/Heading/Heading";
import { headerOne } from "@/utils/data";
import Image from "next/image";
import React from "react";

export default function HeaderOne() {
  return (
    <div className="py-[60px]">
      <Container>
        {/* heading */}
        <Heading
          title={"About Us"}
          para={"Why would You Choose Market Watchmen?"}
        />
        {/* grid */}
        <div className="grid md:grid-cols-2 items-center gap-5">
          {/* left */}
          <div className="col">
            <h3 className="text-[35px] text-white font-bold mb-7">{headerOne.title}</h3>
            <p>
              {headerOne.para}
            </p>
            <Button text={"Start Earning"} style={"text-white bg-darkBlue mt-8"}/>
          </div>
          {/* right */}
          <div className="col relative">
            <img src={headerOne.img} alt="no"/>
          </div>
        </div>
      </Container>
    </div>
  );
}
