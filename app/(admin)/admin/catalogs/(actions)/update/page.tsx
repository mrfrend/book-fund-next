"use client";
import { ActionForm } from "@/components/ActionForm";
import { Input } from "@/components/Input";
import { Button } from "@/components/ui/button";
import { updateCatalog } from "@/app/action";
import { useActionState } from "react";
import clsx from "clsx";

const initialState = {
  message: "",
  status: "",
};
export default function Page() {
  const [state, formAction] = useActionState(updateCatalog, initialState);

  return (
    <ActionForm action={formAction} title="Обновить каталог">
      <Input
        name="catalogId"
        type="number"
        min={1}
        className="py-[10px]"
        placeholder="Введите ID каталога"
        required
      />
      <Input
        name="name"
        className="py-[10px]"
        placeholder="Название каталога"
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
