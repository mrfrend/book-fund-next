"use client";
import { formateDateToCheckBoxes } from "@/lib/utils";
import { CheckboxGroup } from "./CheckboxGroup";
import { Button } from "./Button";
import axios from "axios";
import {useSuspenseQuery } from "@tanstack/react-query";

async function fetchCatalogs() {
  const { data } = await axios.get(process.env.NEXT_PUBLIC_API + "/catalogs/");
  return data;
}

async function fetchAuthors() {
  const { data } = await axios.get(process.env.NEXT_PUBLIC_API + "/authors/");
  return data;
}

async function fetchPublishers() {
  const { data } = await axios.get(
    process.env.NEXT_PUBLIC_API + "/publishers/"
  );
  return data;
}

async function fetchGenres() {
  const { data } = await axios.get(process.env.NEXT_PUBLIC_API + "/genres/");
  return data;
}

export default function Filters() {
  const { data: catalogs } = useSuspenseQuery({
    queryKey: ["catalogs"],
    queryFn: fetchCatalogs,
  });
  const { data: authors } = useSuspenseQuery({
    queryKey: ["authors"],
    queryFn: fetchAuthors,
  });
  const { data: genres } = useSuspenseQuery({
    queryKey: ["genres"],
    queryFn: fetchGenres,
  });
  const { data: publishers, isLoading } = useSuspenseQuery({
    queryKey: ["publishers"],
    queryFn: fetchPublishers,
  });

  console.log(publishers);
  return (
    <>
      <CheckboxGroup
        title="Авторы"
        name="authors"
        checkboxes={formateDateToCheckBoxes(authors, "author")}
      />
      <CheckboxGroup
        title="Жанры"
        name="genres"
        checkboxes={formateDateToCheckBoxes(genres, "genre")}
      />
      <CheckboxGroup
        title="Издательства"
        name="publishers"
        checkboxes={formateDateToCheckBoxes(publishers, "publisher")}
      />
      <CheckboxGroup
        title="Каталоги"
        name="catalogs"
        checkboxes={formateDateToCheckBoxes(catalogs, "catalog")}
      />

      <Button className="w-[140px] h-[35px] text-lg mt-[15px]">
        Применить
      </Button>
    </>
  );
}
