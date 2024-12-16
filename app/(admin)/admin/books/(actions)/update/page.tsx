"use client";
import { ActionForm } from "@/components/ActionForm";
import { Input } from "@/components/Input";
import { Button } from "@/components/ui/button";
import { useActionState } from "react";
import { Textarea } from "@/components/ui/textarea";
import AsyncSelect from "react-select/async";
import { updateBook } from "@/app/action";
import clsx from "clsx";

import {
  loadAuthors,
  loadCatalogs,
  loadGenres,
  loadPublishers,
  loadCountries,
  customStyles,
} from "../utils";

const initialState = {
  message: "",
  status: "",
};

export default function Page() {
  const [state, formAction] = useActionState(updateBook, initialState);

  return (
    <ActionForm action={formAction} title="Обновить книгу">
      <Input
        name="bookId"
        type="number"
        min={1}
        placeholder="Введите ID книги"
      />
      <Input
        className="text-sm"
        name="image"
        type="file"
        placeholder="Изображение книги"
        accept="image/*"
      />
      <Input
        placeholder="Название книги"
        name="title"
        className="h-[50px]"
        maxLength={100}
      />
      <Input
        placeholder="Год создания"
        name="year_creation"
        className="h-[50px]"
        type="number"
        max={2024}
        min={0}
      />
      <Input
        placeholder="Год публикации"
        name="year_published"
        className="h-[50px]"
        type="number"
        max={2024}
        min={0}
      />
      <Input
        placeholder="Количество страниц"
        name="page_amount"
        className="h-[50px]"
        type="number"
        min={1}
      />
      <Input
        placeholder="Количество экземпляров"
        name="quantity"
        className="h-[50px]"
        type="number"
        min={1}
      />
      <Input
        placeholder="ISBN-номер"
        name="isbn_number"
        className="h-[50px]"
        type="text"
        maxLength={18}
        pattern="^97[89]-\d{1,5}-\d{1,7}-\d{1,6}-\d$"
      />
      <AsyncSelect
        name="authors"
        styles={customStyles}
        loadOptions={loadAuthors}
        defaultOptions
        isMulti
        placeholder="Выберите авторов"
      />
      <AsyncSelect
        name="catalogs"
        styles={customStyles}
        loadOptions={loadCatalogs}
        defaultOptions
        isMulti
        placeholder="Выберите каталоги"
      />
      <AsyncSelect
        name="genres"
        styles={customStyles}
        loadOptions={loadGenres}
        defaultOptions
        isMulti
        placeholder="Выберите жанры"
      />
      <AsyncSelect
        name="country_id"
        styles={customStyles}
        loadOptions={loadCountries}
        defaultOptions
        placeholder="Выберите страну"
      />
      <AsyncSelect
        name="publisher_id"
        styles={customStyles}
        loadOptions={loadPublishers}
        defaultOptions
        placeholder="Выберите издателя"
      />
      <Textarea
        className="!border-4 !border-mainColor !text-lg"
        wrap="hard"
        cols={50}
        placeholder="Описание книги"
        name="description"
        maxLength={500}
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
