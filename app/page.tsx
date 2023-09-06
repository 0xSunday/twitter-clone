import LeftSidebar from "@/components/LeftSidebar";
import MiddleSection from "@/components/MiddleSection";
import RightSection from "@/components/RightSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-1 justify-center mx-auto items-center sm:max-w-7xl w-full">
      <LeftSidebar />
      <MiddleSection />
      <RightSection />
    </div>
  );
}
