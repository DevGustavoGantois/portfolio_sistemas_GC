import { cn } from "@/lib/utils";
import Image from "next/image";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  img,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string | undefined;
}) => {
  return (
    <div
      className={cn(
        "group/bento shadow-blue-500/20 row-span-1 flex flex-col justify-between space-y-4 rounded-xl border p-2 pl-4 pb-4 transition duration-200 hover:shadow-xl border-white/[0.2] bg-black dark:shadow-none",
        className,
      )}
    >
      <div className="w-full">
      {img && (
        <Image src={img} width={400} height={400} alt="" className="w-full" />
      )}
      </div>
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        <div className="mt-2 mb-2 font-sans text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#999999]">
          {title}
        </div>
        <div className="font-sans text-xs font-normal text-gray-300">
          {description}
        </div>
      </div>
    </div>
  );
};
