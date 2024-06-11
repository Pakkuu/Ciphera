"use client";
import { FormEvent } from "react";
import { Button } from "@mui/material";
import Link from "next/link";
import { SlArrowRight } from "react-icons/sl";
import { useRouter } from "next/navigation";

export default function Form() {
  const router = useRouter();
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
    const data = await response.json()
    if(data.status === 200){
      router.push("/home");
    }else if(data.status === 400){
      // email already exists
      console.error(data.error);
    }else{
      console.error("internal server error")
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mb-[5rem] flex w-[75%] flex-col gap-[1rem]"
    >
      <input
        name="email"
        className="h-[3rem] rounded-md bg-[#ffffff8c] pl-[1rem] text-black"
        type="email"
        placeholder="email"
      />
      <input
        name="password"
        className="h-[3rem] rounded-md bg-[#ffffff8c] pl-[1rem] text-black"
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
      <div className="ml-auto flex flex-row">
        <span className="mr-[0.4rem] opacity-50">Already have an account?</span>
        <span className="mr-[0.5rem]">
          <div className="group">
            <Link
              href="/sign-in"
              className="flex flex-row text-[#2d8bb4] underline group-hover:text-[#2d8cb4a0]"
            >
              Sign In
              <SlArrowRight className="my-auto ml-[0rem] mt-[0.45rem] border-b-[1.5px] border-b-[#2d8bb4] text-[0.8rem] group-hover:border-b-[#2d8cb4a0]" />
            </Link>
          </div>
        </span>
      </div>
    </form>
  );
}
