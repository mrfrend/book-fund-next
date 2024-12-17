"use client";
import clsx from "clsx";
import styles from "./checkbox.module.css";

import React, { useEffect, useState } from "react";

interface ControlledCheckBoxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  setGroupState: React.Dispatch<React.SetStateAction<string[]>>;
}
export function ControlledCheckBox({
  className,
  setGroupState,
  ...props
}: ControlledCheckBoxProps) {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGroupState((prev) =>
      prev.includes(e.target.value)
        ? prev.filter((item) => item !== e.target.value)
        : [...prev, e.target.value]
    );
  };

  return (
    <input
      type="checkbox"
      checked={props.checked}
      className={clsx(styles.checkbox_appearance, className)}
      {...props}
      onChange={handleChange}
    />
  );
}
