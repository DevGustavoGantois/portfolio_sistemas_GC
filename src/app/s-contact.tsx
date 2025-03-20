import Image from "next/image";
import { contactData } from "./v-data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Pretitle } from "@/components/pretitle";
import { Globe } from "lucide-react";

export function HomeContact() {
    return (
        <section className="max-w-[1240px] mx-auto p-8 lg:p-0 mt-30">
            <div className="relative w-full p-6 lg:p-10 rounded-3xl overflow-hidden">
                <Image
                    src="/ContactImg.svg"
                    alt="Contato"
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0"
                    priority
                />
                <div className="absolute bg-gradient-to-r from-[#0C054B]/80 via-[#15097E] to-[#1D0DB1]" />
                <div className="relative flex flex-col items-center text-center gap-6">
                    <Pretitle icon={<Globe className="stroke-white" width={28} />} pretitle="Entre em contato" />
                    {contactData.map((item, index) => (
                        <div key={index} className="flex flex-col items-center gap-4">
                            <h1 className="text-white text-3xl font-semibold lg:text-[40px] max-w-[793px]">
                                {item.title}
                            </h1>
                            <p className="text-gray-200 text-sm lg:text-base max-w-[702px]">
                                {item.description}
                            </p>
                            <Button className="p-6" variant="tertiary">
                                <Link href="" target="_blank">
                                    {item.btnText}
                                </Link>
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
