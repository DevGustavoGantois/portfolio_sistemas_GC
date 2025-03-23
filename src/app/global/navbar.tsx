import { Button } from "@/components/ui/button";
import Link from "next/link";
import { NavbarMobile } from "./navbar-mobile";

export function Navbar() {
    return (
        <header className="max-w-[1240px] mx-auto p-8 lg:p-0 lg:mt-4 border-b border-white/15">
            <nav className="hidden lg:flex items-center justify-around mb-[20px]">
                <ul className="flex items-center lg:gap-[32px]">
                    <li className="text-white/50 transition-all duration-700 hover:text-white hover:-translate-y-2">
                        <Link href="#home">
                        Home
                        </Link>
                    </li>
                    <li className="text-white/50 transition-all duration-700 hover:text-white hover:-translate-y-2">
                        <Link href="#services">
                        Serviços
                        </Link>
                    </li>
                    <li className="text-white/50 transition-all duration-700 hover:text-white hover:-translate-y-2">
                        <Link href="#solutions">
                        Soluções
                        </Link>
                    </li>
                    <li className="text-white/50 transition-all duration-700 hover:text-white hover:-translate-y-2">
                        <Link href="#portfolio">
                        Portfolio
                        </Link>
                    </li>
                    <li className="text-white/50 transition-all duration-700 hover:text-white hover:-translate-y-2">
                        <Link href="#testimonials">
                        Depoimentos
                        </Link>
                    </li>
                    <li className="text-white/50 transition-all duration-700 hover:text-white hover:-translate-y-2">
                        <Link href="#aboutUs">
                        Sobre nós
                        </Link>
                    </li>
                    <li className="text-white/50 transition-all duration-700 hover:text-white hover:-translate-y-2">
                        <Link href="#contact">
                        Contato
                        </Link>
                    </li>
                </ul>
                <Button className="p-6" variant="default" asChild>
                    <Link href="https://wa.me/5571999588246?text=Olá%2C%20espero%20que%20voc%C3%AA%20esteja%20bem.%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20os%20servi%C3%A7os%20de%20voc%C3%AA%28s%29.%20Aguardo%20o%20seu%20retorno%2E" target="_blank">
                    Faça seu orçamento!
                    </Link>
                </Button>
            </nav>
            <div className="flex lg:hidden">
                <NavbarMobile />
            </div>
        </header>
    )
}