"use client";
import { ActionForm } from "@/components/ActionForm";
import { Input } from "@/components/Input";
import { Button } from "@/components/ui/button";
import { deleteBook } from "@/app/action";
import { useActionState } from "react";
import clsx from "clsx";

const initialState = {
  message: "",
  status: "",
};
export default function Page() {
  const [state, formAction] = useActionState(deleteBook, initialState);

  return (
    <ActionForm action={formAction} title="Удаление книги">
      <Input
        name="bookId"
        type="number"
        min={1}
        className="py-[10px]"
        placeholder="Введите ID книги"
        required
      />
      <span className={clsx({ "text-red-500": state?.status === "error", "text-green-500": state?.status === "success" })}>
        {state?.message}
      </span>
      <Button>Подтвердить</Button>
    </ActionForm>
  );
}
