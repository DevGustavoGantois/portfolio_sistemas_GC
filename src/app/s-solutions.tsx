import { Pretitle } from "@/components/pretitle";
import { Globe } from "lucide-react";
import Image from "next/image";
import { accordionSolutionsData } from "./v-data";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function HomeSolutions() {
  return (
    <section id="solutions" className="mt-20 lg:mt-[100px]">
      <div className="max-w-[1240px] mx-auto p-8 lg:p-0">
        <figure className="flex flex-col gap-4 justify-center items-center lg:items-start" data-aos="fade-down">
          <Pretitle
            icon={<Globe className="stroke-[#1D0DB1]" size={28} />}
            pretitle="Nossas Soluções"
          />
          <article>
            <h1 className="bg-clip-text text-transparent text-4xl lg:text-6xl bg-gradient-to-r from-[#FFFFFF] to-[#999999] font-medium max-w-[816px] text-center lg:text-start">
              Soluções que temos a oferecer na{" "}
              <span className="text-[#1D0DB1]"> GC Technology</span>
            </h1>
          </article>
        </figure>
      </div>
      <main className="w-full border-1 border-blue-500/20 bg-black rounded-3xl p-2 mt-12">
      <div className="mx-auto max-w-[1240px] flex items-center justify-center">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between p-8 lg:p-0">
          <article>
             {accordionSolutionsData.map((item, index) => {
                return (
                    <Accordion type="single" collapsible key={index}>
                      <AccordionItem className="w-full" value="1">
                        <AccordionTrigger className="text-transparent bg-gradient-to-r from-[#FFFFFF] to-[#999999] bg-clip-text">{item.title}</AccordionTrigger>
                        <AccordionContent className="text-white/50 max-w-[500px] h-full w-full">
                          {item.description}  
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                )
             })}
          </article>
          <figure>
            <Image src="/DashboardSolutionsImg.svg" width={700} height={730} alt="" className="max-w-full h-auto" />
          </figure>
        </div>
      </div>
     </main>    
    </section>
  );
}
