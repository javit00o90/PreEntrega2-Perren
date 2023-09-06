import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../Data/products";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainerComponent";

const findProductById = (productId) => {
  return products.find((product) => product.id === Number(productId));
};

const ItemDetails = () => {
  const [product, setProduct] = useState({});
  const { itemId } = useParams();

  useEffect(() => {
    const foundProduct = findProductById(itemId);
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
     console.log("Producto no encontrado")
    }
  }, [itemId]);

  return <ItemDetailContainer productsData={product} />;
};

export default ItemDetails;