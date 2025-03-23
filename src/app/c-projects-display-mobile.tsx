import Image from "next/image";
import { ProjectsDisplayData } from "./v-data";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ProjectsDisplayMobile() {
    return (
        <div className="flex items-center justify-center flex-wrap gap-6">
                {ProjectsDisplayData.map((item, index) => (
                    <div
                        key={index}
                        className="p-6 bg-gradient-to-r from-[#000000] via-[#03001A] to-[#050505] border border-white/15 rounded-2xl lg:p-10  "
                    >
                        <div className="flex flex-col gap-6">
                            <div className="w-full h-auto">
                                <Image 
                                    src={item.img} 
                                    width={600} 
                                    height={400} 
                                    alt="Projeto"
                                    className="w-full h-full"
                                />
                            </div>
                            
                            <div className="flex flex-col gap-4">
                                <p className="text-gray-500 text-center text-sm lg:text-xl font-semibold mb-4">
                                    {item.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {item.techs.map((tech, index) => (
                                        <span 
                                            key={index} 
                                            className="border border-white/20 px-4 py-2 rounded-full text-white/60 text-xs lg:text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="mt-4">
                                    <Button className="w-full font-semibold" variant="tertiary">
                                        <Link href={item.link || "#"} target="_blank">
                                            {item.btnText}
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
    )
}