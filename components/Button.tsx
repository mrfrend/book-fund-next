'use client';
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
export function Button({
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "bg-thirdColor rounded-[100px] outline-2 outline-mainColor h-[60px] w-[260px] text-white text-[20px] font-medium hover:bg-mainColor transition ease-in duration-400",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
