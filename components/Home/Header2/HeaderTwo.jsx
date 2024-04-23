import Container from "@/components/Container/Container";
import Heading from "@/components/Heading/Heading";
import { headerOne, headerTwo } from "@/utils/data";
import Image from "next/image";
import React from "react";
import Card from "../Card/Card";

export default function HeaderTwo() {
  return (
    <div className="py-[60px]">
      <Container>
        {/* heading */}
        <Heading
          title={"Start your trading with us"}
          para={
            "Market Watchmen has a variety of features that make it the best place to start trading"
          }
        />
        {/* grid */}
        <div className="grid md:grid-cols-3 items-center gap-5">
          {headerTwo.map((item, i) => (
            <Card item={item} key={i} />
          ))}
        </div>
      </Container>
    </div>
  );
}
