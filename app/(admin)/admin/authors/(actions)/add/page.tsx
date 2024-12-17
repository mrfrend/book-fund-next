"use client";
import { ActionForm } from "@/components/ActionForm";
import { Input } from "@/components/Input";
import { Button } from "@/components/ui/button";
import { addAuthor } from "@/app/action";
import { useActionState } from "react";
import clsx from "clsx";

const initialState = {
  message: "",
  status: "",
};
export default function Page() {
  const [state, formAction, isPending] = useActionState(addAuthor, initialState);

  return (
    <ActionForm action={formAction} title="Добавить автора">
      <Input
        name="firstName"
        className="py-[10px]"
        placeholder="Имя автора"
        maxLength={25}
        required
      />
      <Input
        name="lastName"
        className="py-[10px]"
        placeholder="Фамилия автора"
        maxLength={50}
        required
      />
      <Input
        name="middleName"
        className="py-[10px]"
        placeholder="Отчество автора"
        maxLength={50}
      />
      {isPending ? (
        <p>Ожидайте...</p>
      ) : (
        <span
          className={clsx({
            "text-red-500": state?.status === "error",
            "text-green-500": state?.status === "success",
          })}
        >
          {state?.message}
        </span>
      )}
      <Button>Подтвердить</Button>
    </ActionForm>
  );
}
