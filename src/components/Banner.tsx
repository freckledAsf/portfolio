import { cn } from "@/lib/utils";
import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  background: string;
  className?: string;
}

const Banner = ({ src, alt, background, className }: Props) => (
  <div className={cn(background, "flex justify-center items-center p-12", className)}>
    <div className="relative size-full">
    <Image {...{ src, alt }} fill />
    </div>
  </div>
);

export default Banner;