import Card from 'react-bootstrap/Card';
import styles from "./ItemDetailContainerComponent.module.css";

const ItemDetailContainerComponent = ({productsData}) => {
  return (
    <Card className="bg-dark text-white">
      <Card.Img src={productsData.img} />
      <Card.ImgOverlay>
        <div className={styles.cardTxtBox}>
        <Card.Title className={styles.cardTxtTitle}>{productsData.nombre}</Card.Title>
        <Card.Text className={styles.cardTxt}>
        {productsData.descripcion}
        </Card.Text>
        </div>
      </Card.ImgOverlay>
    </Card>
  );
}

export default ItemDetailContainerComponent;