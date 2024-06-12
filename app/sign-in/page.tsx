import Form from "./form";
import Image from "next/image";
import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export default async function LogInPage() {
  return (
    <div className="relative flex min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#ffffff30] to-[#6938be57]">
      <div className="absolute right-[-15rem] top-[-40rem] h-[150rem] w-[150rem] opacity-10">
        <Image src="/bg.svg" alt="background" fill />
      </div>
      <div className="z-10 m-auto h-[75vh] w-[30rem] flex-col content-center overflow-hidden overflow-y-auto rounded-3xl border-[0.06rem] border-[#fffffff6] bg-white bg-opacity-10 shadow-[0_0_15px_rgba(0,0,0,0.05)] backdrop-blur-[0.2rem] backdrop-filter">
        <div className="relative mx-auto mb-[5rem] h-[8rem] w-[23rem] opacity-80">
          <Link href="/" className="hover:opacity-80">
            <Image src="/cyphera2.svg" alt="Cyphera Logo" fill />
          </Link>
        </div>
        <Form />
      </div>
    </div>
  );
}
