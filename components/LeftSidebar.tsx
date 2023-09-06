import Image from "next/image";
import React from "react";

const LeftSidebar = () => {
  return (
    <div className=" hidden md:flex w-[16.5rem] mx-3 pt-10 pb-4 text-black  border-r-2 h-[100vh]  justify-between flex-col">
      <div>
        <Image
          className="w-12"
          src="/logo.webp"
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
};

export default LeftSidebar;
