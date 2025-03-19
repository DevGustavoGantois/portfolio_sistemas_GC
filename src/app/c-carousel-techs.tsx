import Image from "next/image";
import { carouselTecIconsData } from "./v-data";

export function CarouselTechs() {
  return (
    <section className="mt-20">
      <h1 className="text-gray-500 text-center text-sm">
        Tecnologias que utilizamos para desenvolvimento dos nossos sistemas.
      </h1>
      <div className="overflow-hidden p-6 lg:p-12 lg:mt-[50px] lg:mb-12 w-full">
        <div className="slideCarousel flex gap-32 whitespace-nowrap">
          {[...carouselTecIconsData, ...carouselTecIconsData].map((item, index) => (
            <Image key={index} src={item.icon} width={40} height={34} alt="" className="tech-icon" />
          ))}
        </div>
      </div>
    </section>
  );
}
