import products from "../Data/products";
import ItemListContainerComponent from "../components/ItemListContainer/ItemListContainerComponent";

const Home = () => {
    return (
      <ItemListContainerComponent productsData={products} />
    );
  };
  
  export default Home;
