"use client";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CategoryContext } from "@/contexts/CategoryProvider";
import { Product } from "@/types/Product";
import Image from "next/image";
import { useContext, useEffect } from "react";

export const ProductContainer = ({ product }: { product: Product }) => {
  const formatCurrency = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: product.item.price.currency,
    maximumFractionDigits: 0,
  });
  const { categories, setCategories } = useContext(CategoryContext);

  useEffect(() => {
    setCategories([...categories, product.item.category_id]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Breadcrumbs />
      <div className="product-container">
        <div className="left">
          <div className="product-image">
            <Image
              src={product.item.picture}
              width={680}
              height={680}
              alt={product.item.title}
            />
          </div>
          <div className="product-info">
            <h2>Descripción del producto</h2>
            <p>
              {product.item.description ? (
                product.item.description
              ) : (
                <span>El producto no contiene una descripción</span>
              )}
            </p>
          </div>
        </div>
        <div className="right">
          <span>
            {product.item.condition === "new" ? "Nuevo" : "Usado"} -{" "}
            {product.item.sold_quantity} vendidos
          </span>
          <h1>{product.item.title}</h1>
          <p>{formatCurrency.format(product.item.price.amount)}</p>
          <button>Comprar</button>
        </div>
      </div>
    </>
  );
};
