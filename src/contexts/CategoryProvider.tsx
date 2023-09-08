"use client";

import { createContext, useState } from "react";

type CategoryContextType = {
  categories: string[];
  setCategories: React.Dispatch<React.SetStateAction<string[]>>;
};

export const CategoryContext = createContext<CategoryContextType>({
  categories: [],
  setCategories: () => {},
});

export const CategoryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [categories, setCategories] = useState<string[]>([]);

  return (
    <CategoryContext.Provider value={{ categories, setCategories }}>
      {children}
    </CategoryContext.Provider>
  );
};
