import Image from "next/image";
import { contactData } from "./v-data";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HomeContact() {
    return (
        <section className="max-w-[1240px] mx-auto p-8 lg:p-0">
            <div className="relative w-full p-6 lg:p-32 rounded-3xl overflow-hidden">
                <Image
                    src="/ContactImg.svg"
                    alt="Contato"
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0C054B]/80 via-[#15097E]/70 to-[#1D0DB1]/80" />
                <div className="relative flex flex-col items-center text-center gap-6">
                    {contactData.map((item, index) => (
                        <div key={index} className="flex flex-col items-center gap-4">
                            <h1 className="text-white text-4xl font-semibold lg:text-[40px] max-w-[793px]">
                                {item.title}
                            </h1>
                            <p className="text-gray-300 text-base max-w-[702px]">
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
