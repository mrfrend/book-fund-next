"use client";
import { useState } from "react";
import clsx from "clsx";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

export function Input({ icon, className, children, ...props }: InputProps) {
  const [state, setState] = useState("");
  return (
    <div className="relative flex items-center">
      {icon && <button className="absolute right-2 bg-transparent">{icon}</button>}
      <input
        className={clsx(
          "px-6 pr-9 py-4 w-[370px] rounded-[100px] border-2 border-solid border-[#EBEAED] text-gray-600 font-medium text-[20px] outline-4 outline-mainColor",
          className
        )}
        onChange={(e) => setState(e.target.value)}
        value={state}
        {...props}
      />
    </div>
  );
}
