"use client";
import { IoDownload } from "react-icons/io5";
import { FaTrashCan } from "react-icons/fa6";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { useEffect } from "react";
import CryptoJS from "crypto-js";

export default function File() {
  const { data: session } = useSession();
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const getFileNames = async () => {
      const email = session?.user?.email;
      if (email) {
        try {
          const res = await fetch(
            `http://localhost:4000/files?email=${encodeURIComponent(email)}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            },
          );
          if (res.ok) {
            const response = await res.json();
            setFiles(response.fileNames);
          } else {
            console.log("Failed to fetch files");
          }
        } catch (error) {
          console.log(`${error}`);
        }
      }
    };

    getFileNames();
  }, [session?.user?.email]);

  const downloadFile = async (fileName: string) => {
    const email = session?.user?.email;
    if (email) {
      try {
        const res = await fetch(
          `http://localhost:4000/files/download?email=${encodeURIComponent(email)}&fileName=${encodeURIComponent(fileName)}`,
          {
            method: "GET",
          },
        );
        if (res.ok) {
          const encryptedData = await res.text();
          const decryptedData = CryptoJS.AES.decrypt(encryptedData, "7606f9bf05d3f25dd41ffa2e073cfb6b5ae9a7ea6daa00217f6e48cb3b7e201a");
          const base64Data = decryptedData.toString(CryptoJS.enc.Base64);
          
          const contentType = res.headers.get('content-type');
          const blob = new Blob([base64ToArrayBuffer(base64Data)], { type: contentType || 'application/octet-stream' });
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', fileName);
          document.body.appendChild(link);
          link.click();
          link.remove();
        } else {
          console.log("Failed to download file");
        }
      } catch (error) {
        console.log(`${error}`);
      }
    }
  };
  
  function base64ToArrayBuffer(base64: string): ArrayBuffer {
    const binaryString = window.atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
  }

  return (
    <div className="flex flex-col">
      {files.slice(1).map((fileName, index) => (
        <div
          key={index}
          className="group mt-[0.5rem] flex h-[6rem] items-center rounded-[1rem] border-[0.07rem] border-[#ffffff] bg-[#ffffff63] hover:mt-[0.7rem] hover:scale-[102%] transition-all duration-200"
        >
          <span className="ml-[3rem] opacity-70 text-[1.25rem] tracking-wide font-medium">{fileName}</span>
          <div className="ml-auto mr-[2rem] flex w-[4.5rem] justify-between text-[#ffffff00] group-hover:text-[#c1c1c1]">
            <IoDownload 
              onClick={() => downloadFile(fileName)}
              className="text-[2.2rem] hover:cursor-pointer hover:text-[#a3a3a3] active:text-[#a3a3a396] active:scale-[92%]" />
            <FaTrashCan
              className="mt-[0.38rem] text-[1.7rem] hover:cursor-pointer hover:text-[#a3a3a3] active:text-[#a3a3a396] active:scale-[92%]"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
