import Head from 'next/head';
import { NextPage, NextPageContext } from 'next';
import { CartProduct } from '../components/Cart/CartProduct';
import { api } from '../services/api';
import styles from '../styles/Carrinho.module.css';
import { IProduct } from '../types/IProduct';
import { formatPrice } from '../utils/formatPrice';

type ITotalizer = {
  [key: number]: {
    id: string;
    name: string;
    value: number;
  };
};

type IData = {
  value: number;
  items: IProduct[];
  totalizers: Array<ITotalizer>;
}

interface Props {
  value: string;
  items: IProduct[];
  totalizers: Array<ITotalizer>;
} 

const CarrinhoAbaixo10Reais: NextPage<Props> = ({ value, items, totalizers}) => {

  return(
    <>
      <Head>
        <title>Produtos abaixo de 10 reais</title>
        <meta name="description" content="Produtos com valor abaixo de 10 reais" />
      </Head>
      <div className={styles.content}>
        <div className={styles.header}>
          <h1>Meu carrinho</h1>
        </div>

        <div className={styles.products}>
          {items?.map((item) => (
            <CartProduct key={item.id} data={item} />
          ))}
        </div>

        <div className={styles.total}>
          <div className={styles.totalContent}>
            <span>Total</span>
            <span>R$ {value}</span>
          </div>
        </div>

        <div className={styles.footer}>
          <button className={styles.button} type="button">
            Finalizar compra
          </button>
        </div>
      </div>
    </>
  )
}

export const getServerSideProps = async (ctx: NextPageContext) => {
  const response = await api.get<IData>('/abaixo-10-reais');

  const { value, items, totalizers } = response.data;

  return {
    props: {
      value: formatPrice(value / 100), 
      items: items.map((item) => ({
        ...item,
        formattedPrice: formatPrice(item.price / 100),
        formattedSellingPrice: formatPrice(item.sellingPrice / 100),
      })), 
      totalizers
    },
  };
};


export default CarrinhoAbaixo10Reais;