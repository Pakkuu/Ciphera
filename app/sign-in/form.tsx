"use client";
import { useState, FormEvent } from "react";
import { Button, TextField, Typography, CircularProgress } from "@mui/material";
import { signIn } from "next-auth/react";
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
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

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
      const response = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (!response?.error) {
        router.push("/home");
        router.refresh();
      } else {
        setError("Incorrect Email or Password");
      }
    } catch (error) {
      console.error("Authentication error:", error);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mb-[7.5rem] flex w-[75%] flex-col gap-[1rem]"
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
        className="h-[3rem] rounded-md bg-[#281b9abd] font-thin hover:bg-[#35353595]"
        variant="contained"
        disableElevation
        type="submit"
        disabled={loading}
      >
        {loading ? <CircularProgress size={24} /> : "Sign In"}
      </Button>
    </form>
  );
}
