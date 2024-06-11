"use client";
import Image from "next/image";
import { Button } from "@mui/material";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="mt-[1rem] flex h-[5.7rem] items-center">
      <div className="relative ml-[2rem] h-[5rem] w-[20rem] opacity-70 hover:opacity-90">
        <Link href="/">
          <Image
            src="/cyphera2.svg"
            alt="Cyphera Logo"
            layout="fill"
            objectFit="contain"
          />
        </Link>
      </div>
      <div className="ml-auto mr-[3rem]">
        <div className="flex w-[17rem] justify-evenly">
          <Link href="/upload">
            <Button
              className="text-[1rem] font-bold text-gray-500 hover:text-[#000000]"
              disableElevation
            >
              upload
            </Button>
          </Link>
          <Button
            className="text-[1rem] font-bold text-gray-500 hover:text-[#000000]"
            disableElevation
          >
            files
          </Button>
          <Button
            className="text-[1rem] font-bold text-gray-500 hover:text-[#000000]"
            disableElevation
          >
            Profile
          </Button>
        </div>
      </div>
    </div>
  );
}
