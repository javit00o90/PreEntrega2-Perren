import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemListContainerComponent from "../components/ItemListContainer/ItemListContainerComponent";

import products from "../Data/products";

const Category = () => {
  const [categoryProducts, setCategoryProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const dataFiltered = products.filter(item => item.categoria === categoryId);
    setCategoryProducts(dataFiltered);
  }, [categoryId]);

  return (
    <div>
      {categoryProducts.length > 0 ? (
        <ItemListContainerComponent productsData={categoryProducts} />
      ) : (
        <p>No products in this category.</p>
      )}
    </div>
  );
};

export default Category;

