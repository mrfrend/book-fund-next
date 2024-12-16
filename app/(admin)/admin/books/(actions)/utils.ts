import { Author, Catalog, Country, Genre, Publisher } from "@/interfaces";
import axios from "axios";
import { StylesConfig } from "react-select";

export async function loadAuthors() {
  const { data } = await axios.get(process.env.NEXT_PUBLIC_API + "/authors");
  return data.map((author: Author) => ({
    value: author.id,
    label: `${author.last_name} ${author.first_name.slice(0, 1)}. ${
      author?.middle_name?.slice(0, 1) ?? ""
    }${author?.middle_name ? "." : ""}`,
  }));
}

export async function loadCatalogs() {
  const { data } = await axios.get(process.env.NEXT_PUBLIC_API + "/catalogs");
  return data.map((catalog: Catalog) => ({
    value: catalog.id,
    label: catalog.name,
  }));
}

export async function loadGenres() {
  const { data } = await axios.get(process.env.NEXT_PUBLIC_API + "/genres");
  return data.map((genre: Genre) => ({
    value: genre.id,
    label: genre.name,
  }));
}

export async function loadPublishers() {
  const { data } = await axios.get(process.env.NEXT_PUBLIC_API + "/publishers");
  return data.map((publisher: Publisher) => ({
    value: publisher.id,
    label: publisher.name,
  }));
}

export async function loadCountries() {
  const { data } = await axios.get(process.env.NEXT_PUBLIC_API + "/countries");
  return data.map((country: Country) => ({
    value: country.id,
    label: country.name,
  }));
}

export const customStyles: StylesConfig = {
    control: (provided, state) => ({
      ...provided,
      width: "370px",
      outlineColor: state.isFocused ? "var(--mainColor)" : "gray",
      borderColor: state.isFocused ? "var(--mainColor)" : "gray",
      "&:hover": {
        borderColor: state.isFocused ? "var(--mainColor)" : "gray",
      },
    }),
  };
