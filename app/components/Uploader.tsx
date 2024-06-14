"use client";
import { useRef, useState } from "react";
import CryptoJS from "crypto-js";
import { BsUpload } from "react-icons/bs";
import { Button, Typography, CircularProgress } from "@mui/material";

export default function Uploader() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(false);
    setError("")
    const file = e.target.files?.[0];
    setSelectedFile(file || null);
  };

  const handleFileUpload = async () => {
    if (selectedFile) {
      try {
        setLoading(true);
        const encryptedFile = await encryptFile(selectedFile);
        await uploadFile(encryptedFile);
        setSelectedFile(null);
      } catch (error) {
        if (error instanceof Error) {
          setTimeout(() => {
            setError(error.message);
          }, 2000);
        } else {
          setTimeout(() => {
            setError("An unknown error occurred.");
          }, 2000);
        }
        setSelectedFile(null);
      } finally {
        setLoading(false);
        setError("")
      }
    }
  };

  const encryptFile = async (file: File): Promise<Blob> => {
    try {
      const reader = new FileReader();
      const fileData = await new Promise<string>((resolve, reject) => {
        reader.onload = () => {
          resolve(reader.result as string);
        };
        reader.onerror = (error) => {
          reject(error);
        };
        reader.readAsDataURL(file);
      });

      const key =
        "7606f9bf05d3f25dd41ffa2e073cfb6b5ae9a7ea6daa00217f6e48cb3b7e201a";
      const encryptedData = CryptoJS.AES.encrypt(fileData, key).toString();
      const encryptedFile = new Blob([encryptedData], { type: file.type });
      return encryptedFile;
    } catch (error) {
      throw new Error("ERROR: File Failed Encryption. File Size is Too Large.");
    }
  };

  const uploadFile = async (file: Blob) => {
    console.log("Encrypted file:", file);
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 2000);
    return { message: "File uploaded successfully" };
  };

  return (
    <div className="mx-auto my-auto">
      <div className="relative">
        <input
          type="file"
          ref={fileInputRef}
          id="file-input"
          className="absolute h-0 w-0 opacity-0"
          onChange={handleFileChange}
        />
        <label
          htmlFor="file-input"
          className={`flex h-[12rem] w-auto cursor-pointer items-end justify-center rounded-3xl border-[0.06rem] border-[#fffffff6] bg-white bg-opacity-10 px-[7rem] py-[2rem] text-[#2c2c2cce] shadow-[0_0_15px_rgba(0,0,0,0.05)] backdrop-blur-[0.2rem] backdrop-filter hover:shadow-[0_0_15px_rgba(0,0,0,0.099)]`}
        >
          <BsUpload
            className={`absolute top-12 text-[3rem] ${
              selectedFile ? "text-[#281b9abd]" : ""
            }`}
          />
          <span
            className={`text-[1.8rem] font-thin ${
              selectedFile ? "font-light text-[#281b9abd]" : ""
            }`}
          >
            {selectedFile ? selectedFile.name : "Browse files to upload"}
          </span>
        </label>
      </div>
      {error && (
        <Typography
          color="error"
          variant="body2"
          className="ml-[0.5rem] mt-[0.5rem]"
        >
          {error}
        </Typography>
      )}
      {success && (
        <Typography
          color="green"
          variant="body2"
          className="ml-[0.5rem] mt-[0.5rem]"
        >
          File Uploaded Successfuly!
        </Typography>
      )}
      {selectedFile && (
        <div className="flex justify-center">
          <Button
            className="mt-[1rem] h-[3rem] w-[7rem] rounded-md bg-[#281b9abd] hover:bg-[#281b9a7d]"
            variant="contained"
            disableElevation
            type="submit"
            onClick={handleFileUpload}
            disabled={loading}
          >
            <Typography sx={{ textTransform: "none" }} className="font-thin">
              {loading ? (
                <CircularProgress size={24} className="text-white" />
              ) : (
                "Upload"
              )}
            </Typography>
          </Button>
        </div>
      )}
    </div>
  );
}
