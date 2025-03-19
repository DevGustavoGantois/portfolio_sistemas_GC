import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { items } from "./v-data";
import { Pretitle } from "@/components/ui/pretitle";
import { Globe } from "lucide-react";

export function HomeServices() {
    return (
        <section className="max-w-[1440px] mx-auto p-8 lg:p-0 mt-20 lg:mt-[100px]">
            <div className="flex items-center justify-center flex-col gap-4">
                <Pretitle icon={<Globe width={28} className="stroke-[#1D0DB1]" />} pretitle="Nossos Serviços" />
                <h1 className="bg-clip-text text-transparent text-4xl lg:text-6xl bg-gradient-to-r from-[#FFFFFF] to-[#999999] font-medium max-w-[816px] text-center">
                Serviços que temos para oferecer na <span className="text-[#1D0DB1]"> GC Technology </span>
                </h1>
            </div>
            <div className="mt-20">
            <BentoGrid className="max-w-6xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          img={item.img}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
            </div>
        </section>
    )
}