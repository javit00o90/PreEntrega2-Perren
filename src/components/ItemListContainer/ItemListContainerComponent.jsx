import { useNavigate } from "react-router-dom";
import styles from "./ItemListContainer.module.css";
import Button from "react-bootstrap/Button";

const ItemListContainerComponent = ({ productsData }) => {

  const navigate = useNavigate();
  return (
    <div className={styles.cardBody}>
    <div className="row">
      {productsData.map((products) => (
        <div key={products.id} className="col-md-2 mb-2">
          <div className="card">
            <img
              src={products.img}
              className={styles.cardImg}
              alt={products.nombre}
            />
            <div className="card-body">
              <h5 className="card-title">{products.nombre}</h5>
              <p className="card-text">{products.descripcion}</p>
              <p className="card-text">Categoria: {products.categoria}</p>
              <p className="card-text">Precio: ${products.precio}</p>
              <Button
                variant="primary"
                onClick={() => navigate(`/item/${products.id}`)}
              >
                Detalles
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default ItemListContainerComponent;