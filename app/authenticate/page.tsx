import Image from "next/image";
import Link from "next/link";

export default function Authenticate() {
  return (
    <div className="relative flex min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#ffffff30] to-[#6938be57]">
      <div className="absolute right-[-15rem] top-[-45rem] h-[150rem] w-[150rem] opacity-10">
        <Image
          src="/bg.svg"
          alt="Cyphera Logo"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="relative z-10 m-auto flex h-[85vh] w-[30%] items-center overflow-hidden rounded-3xl border-[0.06rem] border-[#fffffff6] bg-white bg-opacity-10 shadow-[0_0_15px_rgba(0,0,0,0.05)] backdrop-blur-[0.2rem] backdrop-filter">
        <div className="relative mx-auto mb-auto mt-[2rem] h-[10rem] w-[10rem] opacity-80">
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
