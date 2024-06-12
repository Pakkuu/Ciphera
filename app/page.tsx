import Image from "next/image";
import { Button } from "@mui/material";
import { SlArrowRight } from "react-icons/sl";
import Link from "next/link";

const Landing = () => {
  return (
    <div className="relative flex min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#ffffff30] to-[#6938be57]">
      <div className="absolute right-[-15rem] top-[-40rem] h-[150rem] w-[150rem] opacity-10">
        <Image
          src="/bg.svg"
          alt="Cyphera Logo"
          fill
        />
      </div>
      <div className="z-10 m-auto h-[85vh] w-[90%] items-center overflow-hidden rounded-3xl border-[0.06rem] border-[#fffffff6] bg-white bg-opacity-10 shadow-[0_0_15px_rgba(0,0,0,0.05)] backdrop-blur-[0.2rem] backdrop-filter sm:flex-col lg:relative lg:flex lg:flex-row lg:justify-evenly">
        <div className="relative h-[15rem] w-[30rem] opacity-80 sm:mx-auto sm:mt-[5.5rem] lg:mx-0 lg:mt-0">
          <Image
            src="/cyphera2.svg"
            alt="Cyphera Logo"
            fill
          />
        </div>
        <div className="mt-4 flex-col tracking-widest sm:text-center lg:mt-0">
          <div className="sm:text-[3rem] lg:text-[4rem] font-extralight opacity-70">
            Your Personal
          </div>
          <div className="sm:text-[3rem] lg:text-[4rem] font-extralight opacity-70">
            Data Fortress
          </div>
          <div className="sm:text-[1.1rem] lg:text-[1.3rem] font-extralight opacity-20">
            cloud storage - elegantly crafted
          </div>
          <Link href="/register">
            <Button
              className="mt-[1rem] rounded-[1rem] bg-[#353535bd] font-thin hover:bg-[#35353595]"
              variant="contained"
              disableElevation
            >
              Get Started
              <SlArrowRight className="ml-[1rem]" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
