import { FC } from 'react';
import { Image } from 'react-bootstrap';
import styles from './ShopCatalogItem.module.css';

type ShopCatalogItemProps = {

	sourceImage: string;
	name: string;
	onClick?: () => void
}

export const ShopCatalogItem: FC<ShopCatalogItemProps> = ({ sourceImage, name, ...props }) => {

	return (
		<div
			{...props}
			className={styles.shopCatalogItem__Wrapper}
		>
			<div className={styles.shopCatalogItem__image_container}>
				<Image src={sourceImage} />
			</div>
			<p className={styles.shopCatalogItem__text}>{name}</p>
		</div >

	)


}

