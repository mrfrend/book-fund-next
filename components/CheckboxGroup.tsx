"use client";
import { Checkbox } from "./ui/checkbox";
import { ControlledCheckBox } from "./ControlledCheckBox/ControlledCheckBox";
import { CheckboxGroupProps } from "@/interfaces";
import clsx from "clsx";
import { nanoid } from "nanoid";
import { ScrollArea } from "./ui/scroll-area";
import { useEffect, useState } from "react";
export function CheckboxGroup({
  title,
  name,
  checkboxStyle,
  checkboxes,
}: CheckboxGroupProps) {
  const [isChecked, setIsChecked] = useState<string[]>([]);

  useEffect(() => {
    console.log("Изменение стейта группы", isChecked);
  }, [isChecked]);

  if (isChecked.length == checkboxes.length) {
  }
  return (
    <div>
      <h2 className="text-[20px] font-bold text-black mb-4">{title}</h2>
      {checkboxes.length > 5 ? (
        <ScrollArea className="max-h-[100px] w-[98%] border flex flex-col gap-[5px]">
          {checkboxes.map((checkbox) => (
            <div key={nanoid()} className="flex items-center gap-2">
              <ControlledCheckBox
                className={clsx(checkboxStyle)}
                value={checkbox.value}
                name={name}
                checked={isChecked.includes(checkbox.value)}
                id={checkbox.id}
                key={nanoid()}
                setGroupState={setIsChecked}
              />
              <label htmlFor={checkbox.id}>{checkbox.labelText}</label>
            </div>
          ))}
        </ScrollArea>
      ) : (
        <div className="w-[260px] flex flex-col gap-[5px]">
          {checkboxes.map((checkbox) => (
            <div key={nanoid()} className="flex items-center gap-2">
              <ControlledCheckBox
                className={checkboxStyle}
                value={checkbox.value}
                name={name}
                id={checkbox.id}
                key={nanoid()}
                checked={isChecked.includes(checkbox.value)}
                setGroupState={setIsChecked}
              />
              <label className="" htmlFor={checkbox.id}>
                {checkbox.labelText}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
