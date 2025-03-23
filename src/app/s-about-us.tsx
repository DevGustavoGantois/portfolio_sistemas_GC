import { Pretitle } from "@/components/pretitle";
import { Title } from "@/components/title";
import { Globe } from "lucide-react";
import { aboutCaique, aboutGustavo } from "./v-data";
import Image from "next/image";

export function HomeAboutUs() {
    return (
        <section className="max-w-[1440px] p-8 lg:p-0 mx-auto -mt-40 lg:mt-[100px]" id="aboutUs">
            <div className="flex flex-col items-center justify-center gap-3">
                <Pretitle icon={<Globe size={28} className="stroke-[#1D0DB1]" />} pretitle="Conheça um pouco" />
                <Title title="Sobre" mark="nós" />
                <p className="text-sm lg:text-base text-center text-gray-500 max-w-[850px]">
                Conheça os profissionais por trás das telas, comprometidos em desenvolver soluções eficientes, escaláveis e de alto desempenho. 
                Com expertise e inovação, transformamos desafios em resultados concretos, resolvendo problemas e impulsionando o sucesso dos nossos clientes. 🚀
                </p>
            </div>
            <main className="flex flex-col gap-20 mt-20 lg:mt-[108px]">
             {aboutGustavo.map((item, index) => {
                return (
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 justify-center items-center lg:items-start lg:justify-around" key={index}>
                       <div className="flex flex-col gap-2">
                       <article className="flex flex-col gap-6">
                            <h1 className="text-center lg:text-left font-medium text-3xl lg:text-[40px] text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#999999]">{item.title}</h1>
                            <p className="text-center lg:text-left text-gray-500 max-w-[490px]">{item.description}</p>
                        </article>
                       </div>
                        <figure className="shadow-2xl shadow-blue-800/20">
                            <Image src={item.img} width={519} height={454} alt="" className="rounded-3xl" />
                        </figure>    
                    </div>
                )
             })}
              {aboutCaique.map((item, index) => {
                return (
                    <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-0 items-center lg:items-start justify-center lg:justify-around" key={index}>
                        <figure className="shadow-2xl shadow-blue-800/20">
                            <Image src={item.img} width={619} height={454} alt="" className="rounded-3xl" />
                        </figure>
                        <div className="flex flex-col gap-2">
                       <article className="flex flex-col gap-6">
                            <h1 className="text-center lg:text-right font-medium text-3xl lg:text-[40px] text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#999999]">{item.title}</h1>
                            <p className="text-center lg:text-right text-gray-500 max-w-[490px]">{item.description}</p>
                        </article>
                       </div>    
                    </div>
                )
             })}
            </main>
        </section>
    )
}