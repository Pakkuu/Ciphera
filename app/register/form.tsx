"use client";
import { useState, FormEvent } from "react";
import { Button, TextField, Typography, CircularProgress } from "@mui/material";
import Link from "next/link";
import { SlArrowRight } from "react-icons/sl";
import { useRouter } from "next/navigation";
import { isEmail } from "validator";

export default function Form() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    if (!email || !password) {
      setLoading(false);
      setError("Both fields are required.");
      return;
    } else if (!isEmail(email.toString())) {
      setLoading(false);
      setError("Please enter a valid email.");
      return;
    }

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      setLoading(false);

      if (response.ok) {
        router.push("/home");
      } else if (data.status === 400) {
        setError(data.error || "Email already exists.");
      } else {
        setError("Internal server error");
      }
    } catch (err) {
      setLoading(false);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mb-[5rem] flex w-[75%] flex-col gap-[1rem]"
    >
      <TextField
        name="email"
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        className="mb-[-1rem]"
      />
      <TextField
        name="password"
        label="Password"
        variant="outlined"
        fullWidth
        type="password"
        margin="normal"
      />
      {error && (
        <Typography color="error" variant="body2">
          {error}
        </Typography>
      )}
      <Button
        className="h-[3rem] rounded-md bg-[#281b9abd] font-space-mono hover:bg-[#35353595]"
        variant="contained"
        disableElevation
        type="submit"
        disabled={loading}
      >
        {loading ? <CircularProgress size={24} /> : "REGISTER"}
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
