import { Pretitle } from "@/components/pretitle";
import { Globe } from "lucide-react";
import { TestimonialsClients } from "./global/c-testimonials-clients";

export function HomeTestimonials() {
    return (
        <section>
             <figure className="flex flex-col gap-4 justify-center items-center lg:items-start max-w-[1440px] mx-auto mb-6 lg:mb-40">
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
        <TestimonialsClients />
        </section>
    )
}