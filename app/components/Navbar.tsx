'use client';
import Image from "next/image";
import { Button } from '@mui/material';
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="h-[5.7rem] flex items-center mt-[1rem]">
      <div className="w-[20rem] h-[5rem] relative ml-[2rem] opacity-70 hover:opacity-90">
        <Link href="/">
          <Image
            src="/ciphera2.svg"
            alt="Ciphera Logo"
            layout="fill"
            objectFit="contain"
          />
        </Link>
      </div>
      <div className="ml-auto mr-[3rem]">
        <div className="flex w-[17rem] justify-evenly">
          <Link href="/upload">
            <Button className="hover:text-[#000000] text-gray-500 font-bold text-[1rem]" disableElevation>upload</Button>
          </Link>
          <Button className="hover:text-[#000000] text-gray-500 font-bold text-[1rem]" disableElevation>files</Button>
          <Button className="hover:text-[#000000] text-gray-500 font-bold text-[1rem]" disableElevation>Profile</Button>
        </div>
      </div>
    </div>
  );
}