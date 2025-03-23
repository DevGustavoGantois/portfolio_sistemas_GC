import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { items } from "./v-data";
import { Pretitle } from "@/components/pretitle";
import { Globe } from "lucide-react";
import { Title } from "@/components/title";

export function HomeServices() {
    return (
        <section className="max-w-[1440px] mx-auto p-8 lg:p-0 mt-20 lg:mt-[100px]" id="services">
            <div className="flex items-center justify-center flex-col gap-4" data-aos="flip-up">
                <Pretitle icon={<Globe width={28} className="stroke-[#1D0DB1]" />} pretitle="Nossos Serviços" />
                <Title title="Serviços que temos a oferecer na" mark="GC Technology" />
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