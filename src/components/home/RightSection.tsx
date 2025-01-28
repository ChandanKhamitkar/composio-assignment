import { dataList } from "@/lib/data";
import InfoCard from "@/components/InfoCard";
import { Inter } from "next/font/google";

const inter = Inter({subsets: ["latin"]});

export default function RightSection() {
    return(
        <div className={`lg:w-[35%] w-[90%] h-full flex justify-center items-center flex-col space-y-4 ${inter.className}`}>
        {
          dataList.map((item, index) => <InfoCard key={index} svgPath={item.svgPath} title={item.title} subtitle={item.subtitle} expanded={item.expanded} maskPath={item.maskPath} />)
        }
      </div>
    );
};
