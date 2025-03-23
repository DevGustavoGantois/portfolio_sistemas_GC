import { Pretitle } from "@/components/pretitle";
import { Title } from "@/components/title";
import { Globe } from "lucide-react";
import { ProjectsDisplay } from "./global/c-projects-display";

export function HomeProjects() {
    return (
        <section className="p-8 lg:p-0" id="portfolio">
            <div className="flex items-center flex-col gap-2 mt-20 lg:mt-[200px]">
                <Pretitle icon={<Globe size={28} className="stroke-[#1D0DB1]" />} pretitle="Nosso portfólio" />
                <Title title="Projetos desenvolvidos pelas" mark="GC Technology" />
            </div>
            <main className="mt-20">
                <ProjectsDisplay />
            </main>
        </section>
    )
}