import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface IconButtonProps extends ComponentProps<"button"> {}

export function IconButton({ className, ...props }: IconButtonProps) {
  return (
    <button
      className={twMerge(
        "px-1.5 bg-gray-500 text-blue font-semibold rounded-md cursor-pointer transition-colors durations-300 hover:bg-blue hover:text-gray-900",
        className
      )}
      {...props}
    />
  );
}
