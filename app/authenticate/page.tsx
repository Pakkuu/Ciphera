import Image from "next/image";
import Link from "next/link";

export default function Authenticate() {
  return (
    <div className="min-h-screen w-full flex bg-gradient-to-br from-[#ffffff30] to-[#6938be57] relative overflow-hidden">
      <div className="absolute top-[-45rem] right-[-15rem] w-[150rem] h-[150rem] opacity-10">
        <Image
          src="/bg.svg"
          alt="Cyphera Logo"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="flex relative h-[85vh] w-[30%] bg-white bg-opacity-10 shadow-[0_0_15px_rgba(0,0,0,0.05)] backdrop-filter border-[#fffffff6] border-[0.06rem] backdrop-blur-[0.2rem] rounded-3xl m-auto z-10 items-center overflow-hidden">
        <div className="w-[10rem] h-[10rem] relative opacity-80 mx-auto mb-auto mt-[2rem]">
          <Link href="/" className="hover:opacity-80">
            <Image
              src="/cyphera1.svg"
              alt="Cyphera Logo"
              layout="fill"
              objectFit="contain"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}