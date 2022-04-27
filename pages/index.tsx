import React, { useState, useEffect } from "react";
import Navbar from "../pages/components/Navbar/Navbar";


const HomePage = () => {
  const [productList, setproductList] = useState<TProduct>([]);

  useEffect(() => {
    window
      .fetch("/api/Avo")
      .then((Response) => Response.json())
      .then(({ data, length }) => {
        setproductList(data);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Hola Platzi!!</h1>
      {productList.map((product) => {
        <div>{product.name}</div>;
      })}
    </div>
  );
};

export default HomePage;
