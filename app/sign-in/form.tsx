"use client";
import { FormEvent } from "react";
import { Button } from "@mui/material";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Form() {
  const router = useRouter();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const result = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get('password'),
      redirect: false
    });
    if (result?.ok) {
      router.push("/home");
    } else {
      console.error("Incorrect Password!");
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
        className="mb-[2.5rem] h-[3rem] rounded-md bg-[#353535bd] font-space-mono hover:bg-[#35353595]"
        variant="contained"
        disableElevation
        type="submit"
      >
        Sign In
      </Button>
    </form>
  );
}
