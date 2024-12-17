"use client";
import { ActionForm } from "@/components/ActionForm";
import { Input } from "@/components/Input";
import { Button } from "@/components/ui/button";
import { addCountry } from "@/app/action";
import { useActionState } from "react";
import clsx from "clsx";

const initialState = {
  message: "",
  status: "",
};
export default function Page() {
  const [state, formAction, isPending] = useActionState(
    addCountry,
    initialState
  );

  return (
    <ActionForm action={formAction} title="Добавить страну">
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
