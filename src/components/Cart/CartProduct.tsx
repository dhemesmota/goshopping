import styles from '../../styles/CartProduct.module.css';
import { IProduct } from '../../types/IProduct';

interface Props {
  data: IProduct;
}

export function CartProduct({ data: {formattedPrice, formattedSellingPrice, imageUrl, name} }: Props) {
  return (
    <div className={styles.container}>
      <img src={imageUrl} alt="Produto" />

      <div className={styles.content}>
        <strong>{name}</strong>
        <small>R$ {formattedPrice}</small>
        <strong>R$ {formattedSellingPrice}</strong>
      </div>
    </div>
  )
}