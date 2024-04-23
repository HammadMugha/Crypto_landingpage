import React from "react";
import Container from "../Container/Container";
import { menuLinks } from "@/utils/data";
import Link from "next/link";
import Button from "../Button/Button";

export default function Navbar() {
  return (
    <div className="py-6">
      <Container>
        <div className="flex items-center justify-between">
          {/* logo */}
          <h2 className="text-4xl font-bold text-white">Coinbase</h2>
          {/* links */}
          <ul className="flex gap-6">
            {menuLinks.map((link, i) => (
              <Link key={i} href={link.path} className="text-[14px] text-white">
                {link.name}
              </Link>
            ))}
          </ul>
          {/* buttons */}
          <div className="gap-3 hidden md:flex">
          <Button text={"Sign In"} style={"bg-dark text-white"} />
          <Button text={"Sign Up"} style={"bg-darkBlue text-white"} />
          </div>
        </div>
      </Container>
    </div>
  );
}
