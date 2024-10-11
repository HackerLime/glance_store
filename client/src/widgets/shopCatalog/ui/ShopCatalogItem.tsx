import { FC } from 'react';
import Image from 'react-bootstrap/Image';
import styles from './ShopCatalogItem.module.css';

type ShopCatalogItemProps = {
	img: string;
	name: string;
	onClick: () => void
}

export const ShopCatalogItem: FC<ShopCatalogItemProps> = ({ img, name, ...props }) => {
	return (
		<div
			{...props}
			className={styles.shopCatalogItem__Wrapper}
		>
			<div className={styles.shopCatalogItem__image_container}>
				<Image src={img} />
			</div>
			<p className={styles.shopCatalogItem__text}>{name}</p>
		</div >
	)
}

