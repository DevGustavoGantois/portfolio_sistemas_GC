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
                        <Link href="#Services">
                        Serviços
                        </Link>
                    </li>
                    <li className="text-white/50 transition-all duration-700 hover:text-white hover:-translate-y-1">
                        <Link href="#Solutions">
                        Soluções
                        </Link>
                    </li>
                    <li className="text-white/50 transition-all duration-700 hover:text-white hover:-translate-y-1">
                        <Link href="#Portfolio">
                        Portfolio
                        </Link>
                    </li>
                    <li className="text-white/50 transition-all duration-700 hover:text-white hover:-translate-y-1">
                        <Link href="#Testimonials">
                        Depoimentos
                        </Link>
                    </li>
                    <li className="text-white/50 transition-all duration-700 hover:text-white hover:-translate-y-1">
                        <Link href="#AboutUs">
                        Sobre nós
                        </Link>
                    </li>
                    <li className="text-white/50 transition-all duration-700 hover:text-white hover:-translate-y-1">
                        <Link href="#Contact">
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
                        <Link href="" target="_blank">
                        Instagram
                        </Link>
                    </li>
                    <li className="text-white/50 transition-all duration-700 hover:text-white hover:-translate-y-1">
                        <Link href="" target="_blank">
                        Whatsapp
                        </Link>
                    </li>
                    <li className="text-white/50 transition-all duration-700 hover:text-white hover:-translate-y-1">
                        <Link href="" target="_blank">
                        Linkedin
                        </Link>
                    </li>
                    <li className="text-white/50 transition-all duration-700 hover:text-white hover:-translate-y-1">
                        <Link href="" target="_blank">
                        Facebook
                        </Link>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}