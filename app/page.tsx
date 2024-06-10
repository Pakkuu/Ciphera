import Navbar from "./components/Navbar";
import Image from "next/image";
import { Button } from "@mui/material";
import { SlArrowRight } from "react-icons/sl";
import Link from "next/link";

const Landing = () => {
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
      <div className="flex relative h-[85vh] w-[90%] bg-white bg-opacity-10 shadow-[0_0_15px_rgba(0,0,0,0.05)] backdrop-filter border-[#fffffff6] border-[0.06rem] backdrop-blur-[0.2rem] rounded-3xl m-auto z-10 items-center overflow-hidden">
        <div className="w-[30rem] h-[15rem] relative opacity-80 ml-[200px]">
          <Image
            src="/cyphera2.svg"
            alt="Cyphera Logo"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="flex-col mx-auto leading-[5rem] tracking-widest">
          <div className="text-[4rem] font-extralight opacity-70">
            Your Personal
          </div>
          <div className="text-[4rem] font-extralight opacity-70">
            Data Fortress
          </div>
          <div className="text-[2rem] font-extralight opacity-20 mt-[-1rem]">
            cloud storage - elegantly crafted
          </div>
          <Link href="/authenticate">
            <Button className="font-space-mono rounded-[1rem] bg-[#353535bd] hover:bg-[#35353595] mt-[-2rem]" variant="contained" disableElevation>
              Get Started 
              <SlArrowRight className="ml-[1rem]"/>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
