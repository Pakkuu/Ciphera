import Image from "next/image";
import Navbar from "../components/Navbar";
import { getServerSession } from "next-auth";
import File from "../components/File";


export default async function HomePage() {
  return (
    <div className="relative flex min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#ffffff30] to-[#6938be57]">
      <div className="absolute right-[-15rem] top-[-40rem] h-[150rem] w-[150rem] opacity-10">
        <Image src="/bg.svg" alt="background" fill />
      </div>
      <div className="z-10 m-auto flex h-[85vh] w-[90%] overflow-hidden overflow-y-auto rounded-3xl border-[0.06rem] border-[#fffffff6] bg-white bg-opacity-10 shadow-[0_0_15px_rgba(0,0,0,0.05)] backdrop-blur-[0.2rem] backdrop-filter">
        <Navbar />
        <div className="mx-auto my-auto h-[85%] w-[70%] overflow-y-auto px-[2rem]">
          <File />
        </div>
      </div>
    </div>
  );
}
