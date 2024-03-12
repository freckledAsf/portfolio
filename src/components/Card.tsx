import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Skeleton } from "./ui/skeleton";

interface Props {
  title: string;
  description: string;
  src: string;
  alt: string;
  fit?: boolean;
  children?: React.ReactNode;
}

const Card = ({ title, description, src, alt, fit, children }: Props) => {
  return (
    <div className="flex rounded-xl relative border border-border w-[600px] p-6 gap-6 bg-card text-card-foreground">
      {/*
      <div className="absolute top-1/2 -right-4 -translate-y-1/2 p-2 bg-card border border-border rounded-full cursor-pointer transition-colors hover:bg-gray-200">
        <ArrowRightIcon className="size-4" />
      </div>
      */}
      <Avatar className="size-[180px]">
        <AvatarImage
          className={cn(fit && "object-scale-down", "rounded-full")}
          {...{ src, alt }}
        />
        <Skeleton className="h-full w-full rounded-full bg-slate-400" />
      </Avatar>
      <div className="flex flex-col p-4 gap-2">
        <h2 className="text-3xl font-semibold">{title}</h2>
        <p className="font-medium">{description}</p>
        <div className="flex gap-2 h-full items-end">{children}</div>
      </div>
    </div>
  );
};

export default Card;
