"use server";
import { Author } from "@/interfaces";
import axios from "axios";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import { EventHandler, FormEvent } from "react";

export async function authorizeAction(prevState: any, formData: FormData) {
  let token;
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
    token = response.headers.get("Authorization");
    const cookieStore = await cookies();
    cookieStore.set("access_token", token as string);
    // console.log(token);
    // console.log(cookieStore.getAll());
  } catch (error) {
    console.error("Request error:", error);
    return { message: "Произошла ошибка при авторизации", status: "error" };
  }
  const { data: user } = await axios.get("http://localhost:8000/auth/user/me", {
    headers: {
      Authorization: `${token}`,
    },
  });
  if (user.is_admin) {
    redirect("/admin");
  } else {
    redirect("/catalog");
  }
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
  cookieStore.delete("access_token");
  console.log(cookieStore.get("access_token"));
  redirect("/login");
}

export async function addAuthor(prevState: any, formData: FormData) {
  const formValues = Object.fromEntries(formData.entries());
  const cookieStore = await cookies();
  const token = cookieStore.get("access_token")?.value;
  console.log(formValues);
  try {
    await fetch("http://localhost:8000/authors", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
      body: JSON.stringify({
        first_name: formValues.firstName,
        last_name: formValues.lastName,
        middle_name: formValues.middleName,
      }),
    });
    revalidatePath("/admin/authors");
    return { message: "Автор успешно добавлен", status: "success" };
  } catch (error) {
    console.error(error);
    return { message: "Ошибка при добавлении автора", status: "error" };
  }
}

export async function deleteAuthor(prevState: any, formData: FormData) {
  const id = formData.get("authorId");
  const cookieStore = await cookies();
  const token = cookieStore.get("access_token")?.value;
  try {
    await fetch(`http://localhost:8000/authors/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    });
    revalidatePath("/admin/authors");
    return { message: "Автор успешно удален", status: "success" };
  } catch (error) {
    console.error(error);
    return { message: "Ошибка при удалении автора", status: "error" };
  }
}

export async function updateAuthor(prevState: any, formData: FormData) {
  const token = (await cookies()).get("access_token")?.value;
  const id = formData.get("authorId");
  formData.delete("authorId");
  console.log("formData", formData);
  const data: { [key: string]: string } = {};

  for (const [key, value] of formData.entries()) {
    if (value) {
      // Приводим key к типу keyof Author
      data[key] = value as string;
    }
  }
  console.log("data", data);
  try {
    await axios.patch(`http://localhost:8000/authors/${id}`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    });
    revalidatePath("/admin/authors");
    return { message: "Автор успешно обновлен", status: "success" };
  } catch (error) {
    console.error(error);
    return { message: "Ошибка при обновлении автора", status: "error" };
  }
}
export async function addBook(prevState: any, formData: FormData) {
  const cookieStore = await cookies();
  const token = cookieStore.get("access_token")?.value;
  try {
    await axios.post(process.env.NEXT_PUBLIC_API + "/books", formData, {
      headers: {
        Authorization: `${token}`,
      },
    });
  } catch (error) {
    console.error(error);
    return { message: "Ошибка при добавлении книги", status: "error" };
  }
  revalidatePath("/admin/books");
  return { message: "Книга успешно добавлена", status: "success" };
}

export async function deleteBook(prevState: any, formData: FormData) {
  const id = formData.get("bookId");
  const cookieStore = await cookies();
  const token = cookieStore.get("access_token")?.value;
  try {
    await axios.delete(process.env.NEXT_PUBLIC_API + `/books/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    });
    revalidatePath("/admin/books");
    return { message: "Книга успешно удалена", status: "success" };
  } catch (error) {
    console.error(error);
    return { message: "Ошибка при удалении книги", status: "error" };
  }
}

export async function updateBook(prevState: any, formData: FormData) {
  const token = (await cookies()).get("access_token")?.value;
  const id = formData.get("bookId");

  const image = formData.get("image") as File;
  if (image && image.size === 0) {
    formData.delete("image");
  }
  console.log("Форма до удаления пустых значений:", formData);

  // Сбор ключей для последующего удаления
  const keysToDelete: string[] = [];
  for (const [key, value] of formData.entries()) {
    if (value === "") {
      keysToDelete.push(key);
    }
  }

  // Удаляем все пустые значения
  keysToDelete.forEach((key) => formData.delete(key));

  // Удаляем `bookId`, если не нужно отправлять
  formData.delete("bookId");

  console.log("Форма после удаления пустых значений:", formData);

  try {
    await fetch(process.env.NEXT_PUBLIC_API + `/books/${id}`, {
      method: "PATCH",
      headers: {
        Authorization: `${token}`,
      },
      body: formData,
    });
  } catch (error) {
    console.error(error);
    return { message: "Ошибка при обновлении книги", status: "error" };
  }
  revalidatePath("/admin/books");
  return { message: "Книга успешно обновлена!", status: "success" };
}

export async function addCatalog(prevState: any, formData: FormData) {
  const name = formData.get("name");
  const cookieStore = await cookies();
  const token = cookieStore.get("access_token")?.value;
  try {
    await axios.post(
      process.env.NEXT_PUBLIC_API + "/catalogs",
      { name: name },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      }
    );
    revalidatePath("/admin/catalogs");
    return { message: "Каталог успешно добавлен", status: "success" };
  } catch (error) {
    console.error(error);
    return { message: "Ошибка при добавлении каталога", status: "error" };
  }
}

export async function deleteCatalog(prevState: any, formData: FormData) {
  const id = formData.get("catalogId");
  const cookieStore = await cookies();
  const token = cookieStore.get("access_token")?.value;
  try {
    await axios.delete(process.env.NEXT_PUBLIC_API + `/catalogs/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    });
    revalidatePath("/admin/catalogs");
    return { message: "Каталог успешно удален", status: "success" };
  } catch (error) {
    console.error(error);
    return { message: "Ошибка при удалении каталога", status: "error" };
  }
}

export async function updateCatalog(prevState: any, formData: FormData) {
  const token = (await cookies()).get("access_token")?.value;
  const id = formData.get("catalogId");
  formData.delete("catalogId");

  try {
    await axios.patch(
      process.env.NEXT_PUBLIC_API + `/catalogs/${id}`,
      { name: formData.get("name") },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      }
    );
    revalidatePath("/admin/catalogs");
    return { message: "Каталог успешно обновлен", status: "success" };
  } catch (error) {
    console.error(error);
    return { message: "Ошибка при обновлении каталога", status: "error" };
  }
}

export async function addGenre(prevState: any, formData: FormData) {
  const name = formData.get("name");
  const cookieStore = await cookies();
  const token = cookieStore.get("access_token")?.value;
  try {
    await axios.post(
      process.env.NEXT_PUBLIC_API + "/genres",
      { name: name },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      }
    );
  } catch (error) {
    console.error(error);
    return { message: "Ошибка при добавлении жанра", status: "error" };
  }
  revalidatePath("/admin/genres");
  return { message: "Жанр успешно добавлен", status: "success" };
}

export async function deleteGenre(prevState: any, formData: FormData) {
  const id = formData.get("genreId");
  const cookieStore = await cookies();
  const token = cookieStore.get("access_token")?.value;
  try {
    await axios.delete(process.env.NEXT_PUBLIC_API + `/genres/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    });
    revalidatePath("/admin/genres");
    return { message: "Жанр успешно удален", status: "success" };
  } catch (error) {
    console.error(error);
    return { message: "Ошибка при удалении жанра", status: "error" };
  }
}

export async function updateGenre(prevState: any, formData: FormData) {
  const token = (await cookies()).get("access_token")?.value;
  const id = formData.get("genreId");
  formData.delete("genreId");

  try {
    await axios.patch(
      process.env.NEXT_PUBLIC_API + `/genres/${id}`,
      { name: formData.get("name") },
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    revalidatePath("/admin/genres");
    return { message: "Жанр успешно обновлен", status: "success" };
  } catch (error) {
    console.error(error);
    return { message: "Ошибка при обновлении жанра", status: "error" };
  }
}

export async function addPublisher(prevState: any, formData: FormData) {
  const name = formData.get("name");
  const cookieStore = await cookies();
  const token = cookieStore.get("access_token")?.value;
  try {
    await axios.post(
      process.env.NEXT_PUBLIC_API + "/publishers",
      { name: name },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      }
    );
  } catch (error) {
    console.error(error);
    return { message: "Ошибка при добавлении издательства", status: "error" };
  }
  revalidatePath("/admin/publishers");
  return { message: "Издательство успешно добавлено", status: "success" };
}

export async function deletePublisher(prevState: any, formData: FormData) {
  const id = formData.get("publisherId");
  const cookieStore = await cookies();
  const token = cookieStore.get("access_token")?.value;
  try {
    await axios.delete(process.env.NEXT_PUBLIC_API + `/publishers/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    });
    revalidatePath("/admin/genres");
    return { message: "Издательство успешно удален", status: "success" };
  } catch (error) {
    console.error(error);
    return { message: "Ошибка при удалении издательства", status: "error" };
  }
}

export async function updatePublisher(prevState: any, formData: FormData) {
  const token = (await cookies()).get("access_token")?.value;
  const id = formData.get("publisherId");
  formData.delete("publisherId");

  try {
    await axios.patch(
      process.env.NEXT_PUBLIC_API + `/publishers/${id}`,
      { name: formData.get("name") },
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    revalidatePath("/admin/genres");
    return { message: "Издательство успешно обновлено", status: "success" };
  } catch (error) {
    console.error(error);
    return { message: "Ошибка при обновлении издательства", status: "error" };
  }
}

export async function addCountry(prevState: any, formData: FormData) {
  const name = formData.get("name");
  const cookieStore = await cookies();
  const token = cookieStore.get("access_token")?.value;
  try {
    await axios.post(
      process.env.NEXT_PUBLIC_API + "/countries",
      { name: name },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      }
    );
  } catch (error) {
    console.error(error);
    return { message: "Ошибка при добавлении страны", status: "error" };
  }
  revalidatePath("/admin/countries");
  return { message: "Страна успешно добавлена", status: "success" };
}

export async function deleteCountry(prevState: any, formData: FormData) {
  const id = formData.get("countryId");
  const cookieStore = await cookies();
  const token = cookieStore.get("access_token")?.value;
  try {
    await axios.delete(process.env.NEXT_PUBLIC_API + `/countries/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    });
    revalidatePath("/admin/countries");
    return { message: "Страна успешно удалена", status: "success" };
  } catch (error) {
    console.error(error);
    return { message: "Ошибка при удалении страны", status: "error" };
  }
}

export async function updateCountry(prevState: any, formData: FormData) {
  const token = (await cookies()).get("access_token")?.value;
  const id = formData.get("countryId");
  formData.delete("countryId");

  try {
    await axios.patch(
      process.env.NEXT_PUBLIC_API + `/countries/${id}`,
      { name: formData.get("name") },
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    revalidatePath("/admin/countries");
    return { message: "Страна успешно обновлена", status: "success" };
  } catch (error) {
    console.error(error);
    return { message: "Ошибка при обновлении страны", status: "error" };
  }
}
