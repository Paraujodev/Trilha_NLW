import { ComponentProps, ReactNode } from "react";

interface IconButtonProps extends ComponentProps<"button"> {}

export function IconButton(props: IconButtonProps) {
  return (
    <button
      className="px-1.5 bg-gray-500 text-blue font-semibold rounded-md cursor-pointer 
        transition-colors durations-300 hover:bg-blue hover:text-gray-900"
      {...props}
    />
  );
}
