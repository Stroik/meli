import { ProductList } from "@/components/ProductList";
import { capitalize } from "@/helper/filters";
import type { Products } from "@/types/Product";
import type { Metadata } from "next";

type Props = {
  searchParams: { search: string };
};

async function doSearch(search: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/items?q=${search}`,
    { cache: "no-store" }
  );
  const data = await response.json();
  return data as Products;
}

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const search = searchParams.search;

  return {
    title: `${capitalize(search)} | MercadoLibre 📦`,
    openGraph: {
      title: `Resultados de búsqueda para: ${search}`,
    },
    description: `Resultados de búsqueda para: ${search}`,
  };
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
