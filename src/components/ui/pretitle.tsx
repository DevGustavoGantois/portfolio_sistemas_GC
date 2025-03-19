import { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  pretitle: string;
};

export function Pretitle({ icon, pretitle }: Props) {
  return (
    <figure className="p-2 rounded-full border border-white/50 pr-3 mt-32">
      <div className="flex items-center justify-center gap-2">
        {icon}
        <p className="text-base text-white/50">{pretitle}</p>
      </div>
    </figure>
  );
}
