import { useState, useEffect } from "react";

export function useLocalStorage<T>(item: string) {
  const [value, setValue] = useState<T>(() => {
    if (typeof window !== "undefined") {
      const storedValue = localStorage.getItem(item);
      return storedValue ? JSON.parse(storedValue) : null;
    } else {
      return null; // Tratamento para ambiente de servidor
    }
  });

  const updateLocalStorage = (newValue: T) => {
    setValue(newValue);
    if (typeof window !== "undefined") {
      localStorage.setItem(item, JSON.stringify(newValue));
    }
  };

  // Optional: Clear localStorage item when component unmounts
  useEffect(() => {
    return () => {
      if (typeof window !== "undefined") {
        localStorage.removeItem(item);
      }
    };
  }, [item]);

  return {
    value,
    updateLocalStorage,
  };
}
