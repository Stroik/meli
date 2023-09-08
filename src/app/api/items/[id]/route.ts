import { Author, Item, Product, ProductDescription } from "@/types/Product";
import { NextResponse } from "next/server";

function mappedProduct(
  originalItem: any,
  description: ProductDescription
): Product {
  const author: Author = {
    name: "Augusto",
    lastname: "Marinaro",
  };

  const item: Item = {
    id: originalItem.id,
    title: originalItem.title,
    price: {
      currency: originalItem.currency_id,
      amount: Math.floor(originalItem.price),
      decimals: Math.round(
        (originalItem.price - Math.floor(originalItem.price)) * 100
      ),
    },
    picture: originalItem.pictures[0]?.url ?? "/assets/images/placeholder.png",
    condition: originalItem.condition,
    free_shipping: originalItem.shipping?.free_shipping ?? false,
    state: originalItem.seller_address?.state.name ?? "",
    description: description.plain_text,
    sold_quantity: originalItem.sold_quantity,
    category_id: originalItem.category_id,
  };

  return {
    author,
    item,
  };
}

export async function GET(
  request: Request,
  context: { params: { id: string } }
) {
  const id = context.params.id;

  const item_res = await fetch(`${process.env.API_URL}/items/${id}`);
  const desc_res = await fetch(
    `${process.env.API_URL}/items/${id}/description`
  );

  if (!item_res.ok || !desc_res.ok) {
    return NextResponse.error();
  }

  const item = await item_res.json();
  const desc = await desc_res.json();

  const product = mappedProduct(item, desc);

  return NextResponse.json(product);
}
