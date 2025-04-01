import Link from "next/link";

export function Footer() {
    return (
        <footer className="max-w-[1240px] mx-auto p-8 lg:p-0 mt-40">
            <nav className="flex flex-col lg:flex-row gap-8 items-center lg:items-start justify-around p-8 lg:p-0">
                <div className="flex lg:items-start items-center justify-start flex-col gap-2">
                    <h1 className="text-4xl text-[#1D0DB1]">GC Technology</h1>
                    <p className="text-gray-500 text-center lg:text-start max-w-[428px]">
                    Desenvolvemos soluções e sistemas digitais de alta performance, 
                    totalmente escaláveis e orientados à inovação.
                     Nosso compromisso é criar 
                    tecnologias que impulsionam negócios, 
                    elevam a eficiência e fazem a diferença no mercado de software.
                    </p>
                </div>
                <ul className="flex flex-col items-center lg:items-start h-full  justify-start gap-2">
                    <h1 className="text-white text-2xl font-medium mb-3">Home</h1>
                    <li className="text-white/50 transition-all duration-700 hover:text-white hover:-translate-y-1">
                        <Link href="#Home">
                        Home
                        </Link>
                    </li>
                    <li className="text-white/50 transition-all duration-700 hover:text-white hover:-translate-y-1">
                        <Link href="#services">
                        Serviços
                        </Link>
                    </li>
                    <li className="text-white/50 transition-all duration-700 hover:text-white hover:-translate-y-1">
                        <Link href="#solutions">
                        Soluções
                        </Link>
                    </li>
                    <li className="text-white/50 transition-all duration-700 hover:text-white hover:-translate-y-1">
                        <Link href="#portfolio">
                        Portfolio
                        </Link>
                    </li>
                    <li className="text-white/50 transition-all duration-700 hover:text-white hover:-translate-y-1">
                        <Link href="#testimonials">
                        Depoimentos
                        </Link>
                    </li>
                    <li className="text-white/50 transition-all duration-700 hover:text-white hover:-translate-y-1">
                        <Link href="#aboutUs">
                        Sobre nós
                        </Link>
                    </li>
                    <li className="text-white/50 transition-all duration-700 hover:text-white hover:-translate-y-1">
                        <Link href="#contact">
                        Contato
                        </Link>
                    </li>
                </ul>
                <ul className="flex flex-col items-center lg:items-start justify-center gap-2">
                    <h1 className="text-white text-2xl font-medium mb-3">Soluções</h1>
                    <li className="text-white/50 transition-all duration-700 hover:text-white hover:-translate-y-1">
                        <Link href="">
                        Criação de SaaS
                        </Link>
                    </li>
                    <li className="text-white/50 transition-all duration-700 hover:text-white hover:-translate-y-1">
                        <Link href="">
                        Websites
                        </Link>
                    </li>
                    <li className="text-white/50 transition-all duration-700 hover:text-white hover:-translate-y-1">
                        <Link href="">
                        Design UI/UX
                        </Link>
                    </li>
                    <li className="text-white/50 transition-all duration-700 hover:text-white hover:-translate-y-1">
                        <Link href="">
                        Automações
                        </Link>
                    </li>
                    <li className="text-white/50 transition-all duration-700 hover:text-white hover:-translate-y-1">
                        <Link href="">
                        Design Criativo
                        </Link>
                    </li>
                    <li className="text-white/50 transition-all duration-700 hover:text-white hover:-translate-y-1">
                        <Link href="">
                        Desenvolvimento de APIs
                        </Link>
                    </li>
                    <li className="text-white/50 transition-all duration-700 hover:text-white hover:-translate-y-1">
                        <Link href="">
                        Micro Sass
                        </Link>
                    </li>
                </ul>
                <ul className=" flex flex-col items-center lg:items-start justify-center gap-2">
                    <h1 className="text-white text-2xl font-medium mb-3">Social</h1>
                    <li className="text-white/50 transition-all duration-700 hover:text-white hover:-translate-y-1">
                        <Link href="https://www.instagram.com/devgustavogantois_/" target="_blank">
                        Instagram
                        </Link>
                    </li>
                    <li className="text-white/50 transition-all duration-700 hover:text-white hover:-translate-y-1">
                        <Link href="https://wa.me/5571999588246?text=Olá%2C%20espero%20que%20voc%C3%AA%20esteja%20bem.%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20os%20servi%C3%A7os%20de%20voc%C3%AA%28s%29.%20Aguardo%20o%20seu%20retorno%2E" target="_blank">
                        Whatsapp
                        </Link>
                    </li>
                    <li className="text-white/50 transition-all duration-700 hover:text-white hover:-translate-y-1">
                        <Link href="https://www.linkedin.com/in/gustavo-gantois-2839b5168/" target="_blank">
                        Linkedin (Gustavo)
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="border-t-1 border-white/20 mt-10 mb-6">
                <div className="flex flex-col lg:flex-row text-center lg:text-start gap-2 items-center justify-between mt-6">
                    <p className="text-white text-sm lg:text-base">@2025 Todos os Direitos Reservados. <span className="font-medium"> GC Technology</span></p>
                    <Link className="text-white text-sm lg:text-base transition-all duration-700 hover:scale-[1.1]" href="https://www.instagram.com/devgustavogantois_/" target="_blank">
                    Desenvolvido por @devgustavogantois_
                    </Link>
                </div>
            </div>
        </footer>
    )
}