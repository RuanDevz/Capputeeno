'use client'
import React, { createContext, ReactNode, useState } from "react";
import { FiltersProps, FilterType } from "@/types/Filters";

type FilterContextType = {
  search: string;
  page: number;
  type: FilterType;
  priority: FiltersProps;
  filterOpen: boolean;
  setSearch: (value: string) => void;
  setPage: (value: number) => void;
  setType: (value: FilterType) => void;
  setPriority: (value: FiltersProps) => void;
  setFilterOpen: (value: boolean) => void;
};

export const filterContext = createContext<FilterContextType>({
  search: "",
  page: 0,
  type: FilterType.ALL,
  priority: FiltersProps.NEWS,
  filterOpen: false,
  setSearch: (value: string) => {},
  setPage: (value: number) => {},
  setType: (value: FilterType) => {},
  setPriority: (value: FiltersProps) => {},
  setFilterOpen: (value: boolean) => {},
});

type FilterContextProviderProps = {
  children: ReactNode;
};

export function FilterContextProvider({ children }: FilterContextProviderProps) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [type, setType] = useState(FilterType.ALL);
  const [priority, setPriority] = useState(FiltersProps.NEWS);
  const [filterOpen, setFilterOpen] = useState(true);

  return (
    <filterContext.Provider
      value={{
        search,
        page,
        type,
        priority,
        filterOpen,
        setSearch,
        setPage,
        setType,
        setPriority,
        setFilterOpen,
      }}
    >
      {children}
    </filterContext.Provider>
  );
}

export default filterContext;
