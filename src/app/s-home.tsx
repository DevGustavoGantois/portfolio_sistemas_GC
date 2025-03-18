import { Globe } from "lucide-react";
import { HomeHeroData } from "./v-data";
import { Spotlight } from "@/components/ui/spotlight-new";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HomeHero() {
    return (
        <section className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center relative overflow-hidden">
        <main className="max-w-[1240px] mx-auto p-8 lg:p-0" id="home">  
            <div className="-z-10">
            <Spotlight />
            </div>
            <div className="flex flex-col items-center">
                <figure className="p-2 rounded-full border border-white/50 pr-3 mt-32">
                    <div className="flex items-center justify-center gap-2">
                    <Globe size={20} className="stroke-[#1D0DB1]" />
                    <p className="text-base text-white/50">
                        Crie Sistemas e Robustos
                    </p>
                    </div>
                </figure>
                <div className="flex flex-col gap-2">
                    <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFFFFF] to-[#999999] text-4xl lg:text-6xl max-w-[1147px] font-medium text-center mt-2">
                    Desenvolva seu sistema com um código limpo, escalável e de <span className="text-[#1D0DB1]"> alta performance</span>.
                    </h1>
                        {HomeHeroData.map((item, index) => {
                            return (
                                <div key={index} className="flex items-center justify-center flex-col gap-2 mt-2">
                                    <p className="text-gray-400 text-center max-w-[850px] text-sm lg:text-base">
                                        {item.description}
                                    </p>
                                    <div className="flex items-center gap-2 mt-4">
                                        <Button className="p-6 pr-10 pl-10 mx-auto" variant="secondary" asChild>
                                            <Link href="" target="_blank">
                                              {item.btnText}
                                            </Link>
                                        </Button>
                                        <Button className="p-6 pr-10 pl-10 mx-auto" variant="default" asChild>
                                            <Link href="#portfolio" target="_blank">
                                                {item.btnSeconday}
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            )
                        })}
                </div>
            </div>
        </main>
        </section>
    )
}