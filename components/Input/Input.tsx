"use client";
import { useState } from "react";
import clsx from "clsx";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: string;
}

export function Input({className, ...props }: InputProps) {
  const [state, setState] = useState("");
  return (
    <input
      className={clsx(
        "px-6 py-4 w-[370px] rounded-[100px] border-2 border-solid border-[#EBEAED] text-gray-600 font-medium text-[20px] outline-4 outline-mainColor",
        className
      )}
      onChange={(e) => setState(e.target.value)}
      value={state}
      {...props}
    />
  );
}
