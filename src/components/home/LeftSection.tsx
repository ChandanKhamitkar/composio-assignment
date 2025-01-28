import { CustomChart } from "@/components/CustomChart";
import { JetBrains_Mono, Inter } from "next/font/google";

const jetBrainsMono = JetBrains_Mono({subsets: ["latin"], weight: ["400"]});
const inter = Inter({subsets: ["latin"]});

export default function LeftSection() {
    return(
        <div className={`lg:w-auto w-[90%] h-full bg-white rounded-xl flex-1 flex flex-col justify-between items-start p-6 box-shadow-custom-1 box-shadow-custom-2 ${inter.className}`}>
        <div className="flex flex-col justify-start items-start space-y-4">

          {/* Why platform label */}
          <p  className={`bg-white w-fit px-2 py-1 rounded text-[var(--text-primary)] text-xs font-normal border border-[#F0F0ED] box-shadow-custom-1 box-shadow-custom-2 ${jetBrainsMono.className}`}>Why platform</p>

          {/* Title */}
          <p className="font-medium sm:text-4xl text-3xl text-black leading-10">
            The internet's most <br />
            <span className="font-semibold text-[#ff5e24]">accurate</span> visitor identifier
          </p>

          {/* Subtitle */}
          <p className="sm:w-8/12 w-full font-normal leading-6 sm:text-base text-sm text-[var(--text-secondary)]">
            <span className="font-semibold">Industry-leading accuracy </span>
            that lasts for months 
            or years, even when cookies are cleared.
          </p>

          {/* Learn More Button */}
          <button className="text-xs text-black bg-[#F8F8F6] py-[9px] px-[15px] rounded-md border border-[#D9D9D6] box-shadow-custom-1 box-shadow-custom-2">
            Learn More
          </button>
        </div>
        <CustomChart />
        <div className={`w-full mt-2 flex justify-between items-center text-[#C1C1BE] text-[10px] font-normal uppercase tracking-wide ${jetBrainsMono.className}`}>
          <p className="text-left">Accuracy dropoff</p>
          <p className="text-right">days after initial identification</p>
        </div>
      </div>
    );
};
