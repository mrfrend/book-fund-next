"use server";
import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function authorizeAction(prevState: any, formData: FormData) {
  try {
    const params = new URLSearchParams();
    params.append("username", formData.get("login") as string);
    params.append("password", formData.get("password") as string);

    const response = await fetch("http://localhost:8000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params,
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error("Error response:", errorData);
      return { message: "Неверный логин или пароль", status: "error" };
    }
    const token = response.headers.get("Authorization");
    const cookieStore = await cookies();
    cookieStore.set("access_token", token as string);
    // console.log(token);
    // console.log(cookieStore.getAll());
  } catch (error) {
    console.error("Request error:", error);
    return { message: "Произошла ошибка при авторизации", status: "error" };
  }
  
  redirect("/catalog");
}

export async function registerAction(prevState: any, formData: FormData) {
  try {
    if (formData.get("password") === formData.get("passwordRepeat")) {
      await fetch("http://localhost:8000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.get("login"),
          password: formData.get("password"),
        }),
      });
      return { message: "Регистрация прошла успешно", status: "success" };
    }
    return { message: "Пароли не совпадают", status: "error" };
  } catch (error) {
    console.error("Request error:", error);
    return {
      message: "Пользователь с таким логином уже существует",
      status: "error",
    };
  }
}

export async function logout() {
  // await axios.post("http://localhost:8000/auth/logout", undefined, {
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //   },
  //   withCredentials: true,
  // });
  const cookieStore = await cookies();
  cookieStore.delete('access_token')
  console.log(cookieStore.get("access_token"));
  redirect("/login");
}
