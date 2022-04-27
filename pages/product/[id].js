import React from "react";
import { useRouter } from "next/router";

const ProductItem = () => {
  const router = useRouter();
  const {
    query: { id },
  } = useRouter();
  return (
    <div>
      <h1>Esta es la pagina del producto: {id}</h1>
    </div>
  );
};

export default ProductItem;
