"use client";

import { CategoryContext } from "@/contexts/CategoryProvider";
import { useContext } from "react";

export const Breadcrumbs = () => {
  const { categories } = useContext(CategoryContext);
  return (
    <ol className="breadcrumbs">
      {categories.map((category, index) => (
        <li key={index}>
          {category}
          {index < categories.length - 1 ? <span> &#8250; </span> : null}
        </li>
      ))}
    </ol>
  );
};
