"use client";
import Image from "next/image";
import { Button, Typography } from "@mui/material";
import Link from "next/link";
import { FaFolderOpen } from "react-icons/fa";
import { IoCloudUpload } from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";
import { redirect, usePathname, useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

export default function Navbar() {
  const currentPath = usePathname();
  const router = useRouter();
  const getButtonStyles = (route: string) => {
    return currentPath === route
      ? "bg-[#eeeeee] backdrop-blur-[8rem] backdrop-filter"
      : "";
  };
  return (
    <div className="flex h-full w-[20rem] flex-col overflow-hidden border-r-[0.06rem] border-[#fffffff6] bg-[#494949] bg-opacity-10 backdrop-blur-[8rem] backdrop-filter">
      <div className="relative mb-[5rem] ml-[1.2rem] mr-auto mt-[1.5rem] h-[5rem] w-[15rem] opacity-80">
        <Link href="/">
          <Image src="/cyphera2.svg" alt="Cyphera Logo" fill />
        </Link>
      </div>
      <div className="mb-[3rem] flex h-[13rem] flex-col items-center justify-evenly">
        <Button
          className={`h-[3.5rem] w-[19rem] rounded-lg ${getButtonStyles("/home")}`}
          onClick={() => router.push("/home")}
        >
          <FaFolderOpen className="text-[1.6rem] text-[#281b9abd]" />
          <Typography
            variant="body1"
            className="ml-[0.8rem] mr-auto text-[1.2rem] text-[#281b9abd]"
            sx={{ textTransform: "none" }}
          >
            Files
          </Typography>
        </Button>

        <Button
          className={`h-[3.5rem] w-[19rem] rounded-lg ${getButtonStyles("/upload")}`}
          onClick={() => router.push("/upload")}
        >
          <IoCloudUpload className="text-[1.6rem] text-[#281b9abd]" />
          <Typography
            variant="body1"
            className="ml-[0.8rem] mr-auto text-[1.2rem] text-[#281b9abd]"
            sx={{ textTransform: "none" }}
          >
            Upload
          </Typography>
        </Button>

        <Button
          className="h-[3.5rem] w-[19rem] rounded-lg"
          onClick={() => {
            signOut();
          }}
        >
          <TbLogout2 className="text-[1.6rem] text-[#281b9abd]" />
          <Typography
            variant="body1"
            className="ml-[0.8rem] mr-auto text-[1.2rem] text-[#281b9abd]"
            sx={{ textTransform: "none" }}
          >
            Logout
          </Typography>
        </Button>
      </div>
    </div>
  );
}
