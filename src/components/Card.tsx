import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Skeleton } from "./ui/skeleton";
import Banner from "./Banner";

interface Props {
  id?: string;
  title: string;
  description: string;
  src: string;
  alt: string;
  fit?: boolean;
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

const Card = ({
  id,
  title,
  description,
  src,
  alt,
  fit,
  className,
  onClick,
  children,
}: Props) => {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        onClick?.();
      }}
      className={cn(
        onClick && "cursor-pointer hover:bg-muted",
        "flex flex-col sm:flex-row rounded-xl relative border border-border p-6 gap-6 bg-card text-card-foreground transition-colors",
        className
      )}
    >
      <Avatar className="absolute top-2 right-2 sm:static sm:flex size-[32px] sm:size-[180px]">
        <AvatarImage
          className={cn(fit && "object-scale-down", "rounded-full")}
          {...{ src, alt }}
        />
        <Skeleton className="h-full w-full rounded-full bg-slate-400" />
      </Avatar>
      <div className="flex flex-col p-4 gap-4 sm:gap-2">
        <h2 className="text-3xl font-semibold">{title}</h2>
        <p className="hidden sm:block font-medium">{description}</p>
        <div className="flex flex-wrap gap-2 h-full items-end">{children}</div>
      </div>
    </div>
  );
};

export default Card;
