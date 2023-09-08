"use client";

import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "./Breadcrumbs";
import { findMostFrequentString } from "@/helper/filters";
import type { Item } from "@/types/Product";
import { useContext, useEffect } from "react";
import { CategoryContext } from "@/contexts/CategoryProvider";

type Props = {
  products: Item[];
  categories: string[];
};

export const ProductList = ({ products, categories }: Props) => {
  const mostFrequentCategory = findMostFrequentString(categories);
  const { categories: allCategories, setCategories } =
    useContext(CategoryContext);

  useEffect(() => {
    setCategories([mostFrequentCategory]);
  }, [mostFrequentCategory, setCategories]);
  return (
    <>
      <Breadcrumbs />
      <ol className="product-list">
        {products &&
          products.length &&
          products?.map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </ol>
    </>
  );
};

const Product = ({ product }: { product: Item }) => {
  const formatCurrency = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: product.price.currency,
    minimumFractionDigits: 0,
  });
  return (
    <li>
      <Link href={`/items/${product.id}`}>
        <div className="thumbnail">
          <Image
            src={product.picture}
            width={180}
            height={180}
            quality={100}
            alt={product.title}
          />
        </div>
        <div className="info">
          <div className="price">
            <h3>{formatCurrency.format(product.price.amount)}</h3>
            {product.free_shipping && (
              <Image
                src="/assets/images/free-shipping.png"
                width={18}
                height={18}
                alt="Envío gratis"
              />
            )}
            <div className="state">
              <span>{product.state}</span>
            </div>
          </div>
          <h2>{product.title}</h2>
        </div>
      </Link>
    </li>
  );
};
