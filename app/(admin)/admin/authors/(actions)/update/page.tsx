"use client";
import { ActionForm } from "@/components/ActionForm";
import { Input } from "@/components/Input";
import { Button } from "@/components/ui/button";
import { updateAuthor } from "@/app/action";
import { useActionState } from "react";
import clsx from "clsx";

const initialState = {
  message: "",
  status: "",
};
export default function Page() {
  const [state, formAction, isPending] = useActionState(updateAuthor, initialState);

  return (
    <ActionForm action={formAction} title="Обновить автора">
      <Input
        name="authorId"
        type="number"
        min={1}
        className="py-[10px]"
        placeholder="Введите ID автора"
        required
      />
      <Input
        name="first_name"
        className="py-[10px]"
        placeholder="Имя автора"
        maxLength={25}
      />
      <Input
        name="last_name"
        className="py-[10px]"
        placeholder="Фамилия автора"
        maxLength={50}
      />
      <Input
        name="middle_name"
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
