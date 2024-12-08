"use client";
import { useActionState } from "react";
import Link from "next/link";
import styles from "../auth.module.css";
import { Input, Form, Button } from "@/components/index";
import { authorizeAction } from "../../action";
import clsx from "clsx";

const initialState = {
  message: "",
  status: "",
};
export default function Login() {
  const [state, formAction] = useActionState(authorizeAction, initialState);
  return (
    <section className={styles.container}>
      <h1 className="text-[42px] mt-[80px] text-thirdColor font-bold -tracking-[0.4px] text-center mb-10">
        Войти
      </h1>
      <Form action={formAction} autoComplete="off">
        <Input placeholder="Логин" name="login" required autoComplete="off" />
        <Input
          type="password"
          placeholder="Пароль"
          name="password"
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
        <Button className="w-[230px] h-[60px] px-[10px]">Войти</Button>
      </Form>
      <div className="mt-[105px] h-[2px] w-[370px] bg-gray-200"></div>
      <Link
        href="/register"
        className="mt-4 text-thirdColor text-[16px] no-underline font-medium transition-colors duration-300 hover:text-mainColor"
      >
        Нет аккаунта? Зарегистрироваться
      </Link>
    </section>
  );
}
