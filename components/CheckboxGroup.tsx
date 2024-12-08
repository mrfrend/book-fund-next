import { Checkbox } from "./ui/checkbox";
import { CheckboxGroupProps } from "@/interfaces";
import clsx from "clsx";
import { nanoid } from "nanoid";
import { ScrollArea } from "./ui/scroll-area";
export function CheckboxGroup({
  title,
  name,
  checkboxStyle,
  checkboxes,
}: CheckboxGroupProps) {
  return (
    <div>
      <h2 className="text-xl font-bold text-black mb-4">{title}</h2>
      {checkboxes.length > 5 ? (
        <ScrollArea className="h-[100px] w-[98%] border flex flex-col gap-[5px]">
          {checkboxes.map((checkbox) => (
            <div key={nanoid()} className="flex items-center gap-2">
              <Checkbox
                className={clsx(checkboxStyle)}
                value={checkbox.value}
                name={name}
                id={checkbox.id}
                key={nanoid()}
              />
              <label htmlFor={checkbox.id}>{checkbox.labelText}</label>
            </div>
          ))}
        </ScrollArea>
      ) : (
        <div className="h-[100px] w-[260px] flex flex-col gap-[5px]">
          {checkboxes.map((checkbox) => (
            <div key={nanoid()} className="flex items-center gap-2">
              <Checkbox
                className={checkboxStyle}
                value={checkbox.value}
                name={name}
                id={checkbox.id}
                key={nanoid()}
              />
              <label htmlFor={checkbox.id}>{checkbox.labelText}</label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
