import { ChevronUp } from "lucide-react";
import Link from "next/link";

export function ButtonTop() {
    return (
        <div className="fixed right-4 bottom-4 z-50"> 
            <Link href="#Home">
                <div className="rounded-full p-4 bg-gradient-to-b from-[#000000] via-[#03001A] to-[#050505] shadow-lg hover:scale-110 border-1 border-white/20 transition-transform">
                    <ChevronUp className="text-white w-3 lg:w-6 h-3 lg:h-6" />
                </div>
            </Link>
        </div>
    );
}
