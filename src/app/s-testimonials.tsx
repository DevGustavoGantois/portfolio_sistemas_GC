import { Pretitle } from "@/components/pretitle";
import { Globe } from "lucide-react";
import { TestimonialsClients } from "./c-testimonials-clients";


export function HomeTestimonials() {
    return (
        <section className="p-8 lg:p-0">
             <figure className="flex flex-col gap-4 justify-center items-center lg:items-start max-w-[1440px] mx-auto lg:mb-40 lg:mt-[211px]" data-aos="fade-up">
          <Pretitle
            icon={<Globe className="stroke-[#1D0DB1]" size={28} />}
            pretitle="Nossas Soluções"
          />
          <article  id="testimonials">
            <h1 className="bg-clip-text text-transparent text-4xl lg:text-6xl bg-gradient-to-r from-[#FFFFFF] to-[#999999] font-medium max-w-[816px] text-center lg:text-start">
              Depoimentos dos nossos clientes da{" "}
              <span className="text-[#1D0DB1]"> GC Technology</span>
            </h1>
          </article>
        </figure>
        <TestimonialsClients />
        </section>
    )
}