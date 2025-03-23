import { Pretitle } from "@/components/pretitle";
import { Title } from "@/components/title";
import { Globe } from "lucide-react";
import { ProjectsDisplayDesktop } from "./c-projects-display-desktop";
import { ProjectsDisplayMobile } from "./c-projects-display-mobile";

export function HomeProjects() {
    return (
        <section className="p-8 lg:p-0" id="portfolio">
            <div className="flex items-center flex-col gap-2 mt-20 lg:mt-[200px]" data-aos="fade-up">
                <Pretitle icon={<Globe size={28} className="stroke-[#1D0DB1]" />} pretitle="Nosso portfólio" />
                <Title title="Projetos desenvolvidos pelas" mark="GC Technology" />
            </div>
            <main className="mt-20 hidden lg:flex">
                <ProjectsDisplayDesktop />
            </main>
            <main className="mt-20 flex items-center justify-center lg:hidden">
                <ProjectsDisplayMobile />
            </main>
        </section>
    )
}