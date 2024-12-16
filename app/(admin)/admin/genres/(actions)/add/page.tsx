"use client";
import { ActionForm } from "@/components/ActionForm";
import { Input } from "@/components/Input";
import { Button } from "@/components/ui/button";
import { addGenre } from "@/app/action";
import { useActionState } from "react";
import clsx from "clsx";

const initialState = {
  message: "",
  status: "",
};
export default function Page() {
  const [state, formAction] = useActionState(addGenre, initialState);

  return (
    <ActionForm action={formAction} title="Добавить жанр">
      <Input
        name="name"
        className="py-[10px]"
        placeholder="Название жанра"
        maxLength={50}
        required
      />
      <span
        className={clsx({
          "text-red-500": state?.status === "error",
          "text-green-500": state?.status === "success",
        })}
      >
        {state?.message}
      </span>
      <Button>Подтвердить</Button>
    </ActionForm>
  );
}
