import LeftSection from "@/components/home/LeftSection";
import RightSection from "@/components/home/RightSection";


export default function Home() {
  return (
    // Root Container
    <div className="w-screen lg:h-screen h-fit bg-black flex lg:flex-row flex-col justify-center items-center lg:space-x-4 lg:space-y-0 space-y-4 lg:p-14 sm:p-10 py-6">

      {/* Left Section */}
      <LeftSection/>

      {/* Right Section */}
      <RightSection/>
    </div>
  );
}
