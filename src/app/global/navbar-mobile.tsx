import { Button } from "@/components/ui/button";
import { DialogTitle } from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

export function NavbarMobile() {
    return (
        <nav>
            <Sheet>
                <SheetTrigger>
                    <Menu size={32} className="text-[#1D0DB1]"  />
                </SheetTrigger>
                <SheetContent side="top" className="h-[100vh]">
                <ul className="flex flex-col items-center justify-center gap-8 mt-20">
                    <div className="mb-10">
                     <DialogTitle className="bg-clip-text text-4xl h-[80px] text-transparent bg-gradient-to-r from-[#FFFF] to-[#9999]"><span className="text-[#1D0DB1]">GC </span> Technology</DialogTitle>
                    </div>
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
                <div className="flex justify-center items-center mt-4">
                <Button className="p-6 w-[250px]" variant="default" asChild>
                    <Link href="https://wa.me/5571999588246?text=Olá%2C%20espero%20que%20voc%C3%AA%20esteja%20bem.%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20os%20servi%C3%A7os%20de%20voc%C3%AA%28s%29.%20Aguardo%20o%20seu%20retorno%2E" target="_blank">
                    Faça seu orçamento!
                    </Link>
                </Button>
                </div>
                </SheetContent>
            </Sheet>
        </nav>
    )
}