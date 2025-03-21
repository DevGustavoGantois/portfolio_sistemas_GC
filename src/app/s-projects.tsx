import { Pretitle } from "@/components/pretitle";
import { Title } from "@/components/title";
import { Globe } from "lucide-react";

export function HomeProjects() {
    return (
        <section>
            <div className="flex items-center flex-col gap-2">
                <Pretitle icon={<Globe size={28} className="stroke-[#1D0DB1]" />} pretitle="Nosso portfólio" />
                <Title title="Projetos desenvolvidos pelas" mark="GC Technology" />
            </div>
        </section>
    )
}