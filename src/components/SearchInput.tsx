"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

export const SearchInput = () => {
  const router = useRouter();
  const params = useSearchParams();
  const search = params.get("search") ?? "";

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const query = formData.get("query");
    if (typeof query === "string") {
      router.push(`/items?search=${query}`);
    }
  };

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nunca dejes de buscar"
        name="query"
        defaultValue={search}
      />
      <button type="submit">
        <Image
          src="/assets/images/buscar.png"
          width={18}
          height={18}
          alt="Icono de búsqueda"
        />
      </button>
    </form>
  );
};
