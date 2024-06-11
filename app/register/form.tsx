"use client";
import { FormEvent } from "react";
import { Button } from "@mui/material";
import Link from "next/link";
import { SlArrowRight } from "react-icons/sl";

export default function Form() {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    });
    console.log({ response });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mb-[5rem] flex w-[75%] flex-col gap-[1rem]"
    >
      <input
        name="email"
        className="pl-[1rem] h-[3rem] rounded-md border border-white bg-[#ffffff8c] text-black"
        type="email"
        placeholder="email"
      />
      <input
        name="password"
        className="pl-[1rem] h-[3rem] rounded-md border border-white bg-[#ffffff8c] text-black"
        type="password"
        placeholder="password"
      />
      <Button
        className="h-[3rem] rounded-md bg-[#281b9abd] font-space-mono hover:bg-[#35353595]"
        variant="contained"
        disableElevation
        type="submit"
      >
        REGISTER
      </Button>
      <div className="flex flex-row ml-auto">
        <span className="mr-[0.4rem] opacity-50">
          Already have an account?
        </span>
        <span className="mr-[0.5rem]">
          <div className="group">
            <Link href="/sign-in" className="flex flex-row text-[#2d8bb4] group-hover:text-[#2d8cb4a0] underline">
              Sign In
              <SlArrowRight className="ml-[0rem] my-auto text-[0.8rem] border-b-[1.5px] border-b-[#2d8bb4] mt-[0.45rem] group-hover:border-b-[#2d8cb4a0]" />
            </Link>
          </div>
        </span>
      </div>
    </form>
  );
}
