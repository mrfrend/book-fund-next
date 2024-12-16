import { create } from "zustand";

export interface Option {
  value: string | number;
  label: string;
}

type State = {
  authors: Option[];
  catalogs: Option[];
  genres: Option[];
  country: Option;
  publisher: Option;
};

type Action = {
  setOption: (
    option: Option,
    setState: React.Dispatch<React.SetStateAction<Option>>
  ) => void;
  setAuthors: (authors: Option[]) => void;
  setCatalogs: (catalogs: Option[]) => void;
  setGenres: (genres: Option[]) => void;
  setCountry: (country: Option) => void;
  setPublisher: (publisher: Option) => void;
};

export const useSelectStore = create<State & Action>((set) => ({
  authors: [],
  catalogs: [],
  genres: [],
  country: { value: "", label: "" },
  publisher: { value: "", label: "" },
  setOption: (option, setState) => setState(option),
  setAuthors: (authors) => set({ authors }),
  setCatalogs: (catalogs) => set({ catalogs }),
  setGenres: (genres) => set({ genres }),
  setCountry: (country) => set({ country }),
  setPublisher: (publisher) => set({ publisher }),
}));
