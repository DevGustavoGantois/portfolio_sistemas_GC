import { Globe } from "lucide-react";

export function HomeHero() {
    return (
        <section className="max-w-[1240px] mx-auto p-8 lg:p-0">
            <div className="flex flex-col items-center">
                <figure className="p-2 rounded-full border border-white/50 pr-3 mt-32">
                    <div className="flex items-center justify-center gap-2">
                    <Globe size={20} className="stroke-[#1D0DB1]" />
                    <p className="text-sm text-white/50">
                        Crie Sistemas e Robustos
                    </p>
                    </div>
                </figure>
            </div>
        </section>
    )
}