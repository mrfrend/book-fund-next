"use client";
import { ActionForm } from "@/components/ActionForm";
import { Input } from "@/components/Input";
import { Button } from "@/components/ui/button";
import { updateCountry } from "@/app/action";
import { useActionState } from "react";
import clsx from "clsx";

const initialState = {
  message: "",
  status: "",
};
export default function Page() {
  const [state, formAction, isPending] = useActionState(updateCountry, initialState);

  return (
    <ActionForm action={formAction} title="Обновить страну">
      <Input
        name="countryId"
        type="number"
        min={1}
        className="py-[10px]"
        placeholder="Введите ID страны"
        required
      />
      <Input
        name="name"
        className="py-[10px]"
        placeholder="Название страны"
        maxLength={50}
        required
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
