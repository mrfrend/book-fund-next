"use client";
import { useActionState } from "react";
import Link from "next/link";
import styles from "../auth.module.css";
import { Input, Form, Button } from "@/components/index";
import { registerAction } from "../../action";
import clsx from "clsx";

const initialState = {
  message: "",
  status: "",
};
export default function Login() {
  const [state, formAction] = useActionState(registerAction, initialState);
  return (
    <section className={styles.container}>
      <h1 className="text-[42px] mt-[80px] text-thirdColor font-bold -tracking-[0.4px] text-center mb-10">
        Регистрация
      </h1>
      <Form action={formAction} autoComplete="off">
        <Input
          type="text"
          placeholder="Логин"
          name="login"
          required
          autoComplete="off"
        />
        <Input
          type="password"
          placeholder="Пароль"
          name="password"
          required
          autoComplete="off"
        />
        <Input
          type="password"
          placeholder="Подтвердить пароль"
          name="passwordRepeat"
          required
          autoComplete="off"
        />
        <span
          className={clsx("text-[14px] font-medium", {
            "text-green-600": state?.status === "success",
            "text-red-600": state?.status === "error",
          })}
        >
          {state?.message}
        </span>
        <Button>Зарегистрироваться</Button>
      </Form>
      <div className="mt-[105px] h-[2px] w-[370px] bg-gray-200"></div>
      <Link
        href="/login"
        className="mt-4 text-thirdColor text-[16px] no-underline font-medium transition-colors duration-300 hover:text-mainColor"
      >
        Есть аккаунт? Войти
      </Link>
    </section>
  );
}
