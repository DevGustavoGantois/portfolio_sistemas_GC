import { Button } from "@/components/ui/button";
import Link from "next/link";

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
                        <Link href="#">
                        Portfolio
                        </Link>
                    </li>
                    <li className="text-white/50 transition-all duration-700 hover:text-white hover:-translate-y-2">
                        <Link href="#">
                        Sobre nós
                        </Link>
                    </li>
                    <li className="text-white/50 transition-all duration-700 hover:text-white hover:-translate-y-2">
                        <Link href="#">
                        Contato
                        </Link>
                    </li>
                </ul>
                <Button className="p-6" variant="default" asChild>
                    <Link href="" target="_blank">
                    Faça seu orçamento!
                    </Link>
                </Button>
            </nav>
            <div className="flex lg:hidden">

            </div>
        </header>
    )
}