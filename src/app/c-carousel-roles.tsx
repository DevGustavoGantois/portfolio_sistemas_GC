import Image from "next/image";
import { carouselRolesData } from "./v-data";

export function CarouselRoles() {
    return (
        <div className="overflow-hidden p-6 lg:p-8 lg:mt-[50px] lg:mb-12 w-full">
                <div className="slideCarousel flex gap-32 whitespace-nowrap">
                  {[...carouselRolesData, ...carouselRolesData].map((item, index) => (
                    <Image key={index} src={item.role} width={340} height={34} alt="" className="tech-icon" />
                  ))}
                </div>
              </div>
    )
}