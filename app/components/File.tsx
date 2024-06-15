import { IoDownload } from "react-icons/io5";
import { FaTrashCan } from "react-icons/fa6";

export default function File() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  return (
    <div className="flex flex-col">
      {arr.map((element, index) => (
        <div key={index} className="group flex bg-[#ffffff63] border-[#ffffff] border-[0.07rem] rounded-md h-[4rem] mt-[0.5rem] items-center">
          <span className="ml-[1rem] opacity-70">file.txt</span>
          <div className="flex ml-auto mr-[1rem] w-[3.3rem] justify-between text-[#ffffff00] group-hover:text-[#c1c1c1]">
            <IoDownload className="text-[1.5rem] hover:text-[#a3a3a3] hover:cursor-pointer"/>
            <FaTrashCan className="text-[1.2rem] mt-[0.21rem] hover:text-[#a3a3a3] hover:cursor-pointer"/>
          </div>
        </div>
      ))}
    </div>
  );
}
