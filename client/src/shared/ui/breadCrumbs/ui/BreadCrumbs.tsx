import { FC } from 'react';
import { Link } from 'react-router-dom';
import { SHOP_ROUTE } from 'shared/routerPaths';
import styles from './BreadCrumbs.module.css';

type TBreadCrumbsProps = {
  description: string;
}

export const BreadCrumbs: FC<TBreadCrumbsProps> = ({ description }) => {
  return (
    <div className={styles.breadCrumbs__wrapper}>
      <Link className={styles.breadCrumbs__link} to={SHOP_ROUTE}>
        Главная/
      </Link>
      <span className={styles.breadCrumbs__description} >
        {description}
      </span>
    </div>
  )
}
