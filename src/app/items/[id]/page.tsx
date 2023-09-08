import type { Metadata } from "next";
import Image from "next/image";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Product } from "@/types/Product";
import { ProductContainer } from "@/containers/ProductContainer";

async function getProduct(id: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/items/${id}`,
    {
      cache: "no-store",
    }
  );
  const data = await response.json();
  return data;
}

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id;
  const product: Product = await getProduct(id);

  return {
    title: `${product.item.title}${
      product.item.free_shipping ? " | Envío gratis" : ""
    }`,
    openGraph: {
      title: `${product.item.title}${
        product.item.free_shipping ? " | Envío gratis" : ""
      }`,
      description: product.item.description?.slice(0, 150),
      images: [
        {
          url: product.item.picture,
          width: 680,
          height: 680,
          alt: product.item.title,
        },
      ],
    },
    description: product.item.description?.slice(0, 150),
  };
}

export default async function ItemByIdPage({ params }: Props) {
  const product: Product = await getProduct(params.id);
  return (
    <section id="product-page">
      <ProductContainer product={product} />
    </section>
  );
}
