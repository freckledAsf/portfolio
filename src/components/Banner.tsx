import { cn } from "@/lib/utils";
import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  background: string;
  className?: string;
}

const Banner = ({ src, alt, background, className }: Props) => (
  <div className={cn(background, "flex justify-center items-center", className)}>
    <div className="relative size-[100px]">
    <Image {...{ src, alt }} fill />
    </div>
  </div>
);

export default Banner;