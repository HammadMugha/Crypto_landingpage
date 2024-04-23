import Button from "@/components/Button/Button";
import Container from "@/components/Container/Container";
import React from "react";

export default function HeaderThree() {
  return (
    <div className="bg-[url(/signup.png)] py-[60px] bg-contain">
      <Container>
        <div className="flex items-center justify-center flex-col text-center">
          <h2 className="text-[28px] font-semibold text-white mb-5">
            Sign up without any bank account <br /> linking and card
          </h2>
          <Button text={"Newsletter"} style={"text-white bg-primary"}/>
        </div>
      </Container>
    </div>
  );
}
