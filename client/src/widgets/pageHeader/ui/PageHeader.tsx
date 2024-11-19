import { FC } from 'react';
import { Link } from 'react-router-dom';

import { SHOP_ROUTE } from 'shared/routerPaths';
import { BreadCrumbs } from 'shared/ui/breadCrumbs';
import styles from './PageHeader.module.css';

type TPageHeaderProps = {
  description: string;
}

export const PageHeader: FC<TPageHeaderProps> = ({ description }) => {
  return (

    <header className={styles.pageHeader__wrapper}>
      <BreadCrumbs description={description} />
      <div className={styles.pageHeader__main} >
        <Link to={SHOP_ROUTE}>
        </Link>
        <span
          className={styles.pageHeader__main_description}
        >
          {description}
        </span>
      </div>
    </header>
  )
}
