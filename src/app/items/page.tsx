import { ProductList } from "@/components/ProductList";
import { Products } from "@/types/Product";

async function doSearch(search: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/items?q=${search}`,
    { cache: "no-store" }
  );
  const data = await response.json();
  return data as Products;
}

export default async function ItemsPage({
  searchParams,
}: {
  searchParams: { search: string };
}) {
  const { search } = searchParams;
  const data = await doSearch(search);

  return (
    <section>
      <ProductList products={data.items} categories={data.categories} />
    </section>
  );
}
