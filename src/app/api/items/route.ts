import type { Author, Category, Item, Products } from "@/types/Product";
import { NextResponse } from "next/server";

function mappedProducts(originalArray: any[]): Products {
  const author: Author = {
    name: "Augusto",
    lastname: "Marinaro",
  };

  const items: Item[] = originalArray.map((item) => ({
    id: item.id,
    title: item.title,
    price: {
      currency: item.currency_id,
      amount: Math.floor(item.price),
      decimals: Math.round((item.price - Math.floor(item.price)) * 100),
    },
    picture: item.thumbnail,
    condition: item.condition,
    free_shipping: item.shipping?.free_shipping ?? false,
    state: item.address?.state_name ?? "",
    category_id: item.category_id,
  }));

  return {
    author,
    categories: originalArray.map((item) => item.category_id),
    items,
  };
}

export async function GET(request: Request) {
  const params = new URL(request.url);
  const query = params.searchParams.get("q") ?? "";
  const query_res = await fetch(
    `${process.env.API_URL}/sites/MLA/search?q=${query}&limit=10`
  );

  if (!query_res.ok) {
    return NextResponse.error();
  }

  const search = await query_res.json();

  if (!search.results) {
    return NextResponse.error();
  }

  const data = mappedProducts(search.results);

  return NextResponse.json(data);
}
