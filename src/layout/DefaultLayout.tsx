import { ReactNode } from 'react';
import Link from 'next/link';

import styles from '../styles/Layout.module.css';
import { FiShoppingCart } from 'react-icons/fi';

interface IDefaultLayoutProps {
  children: ReactNode;
}

function DefaultLayout({ children }: IDefaultLayoutProps) {
  return (
    <div className={styles.container}>
      <main>
        {children}
      </main>

      <div className={styles.navbar}>
        <Link href="/carrinho-acima-10-reais">
          <a>
            <FiShoppingCart />
            <span>Acima de 10 reais</span>
          </a>
        </Link>
        <Link href="/carrinho-abaixo-10-reais">
          <a>
            <FiShoppingCart />
            <span>Abaixo de 10 reais</span>
          </a>
        </Link>
      </div>
    </div>
  );
}

export { DefaultLayout };
