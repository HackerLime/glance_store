import { FC } from 'react';
import styles from './ShopCatalogItem.module.css';

type ShopCatalogItemProps = {

	sourceImage: () => JSX.Element;
	name: string;
	onClick?: () => void
}

export const ShopCatalogItem: FC<ShopCatalogItemProps> = ({ sourceImage, name, ...props }) => {
	const SourceImage = sourceImage
	return (
		<div
			{...props}
			className={styles.shopCatalogItem__Wrapper}
		>
			<div className={styles.shopCatalogItem__image_container}>
				<SourceImage />
			</div>
			<p className={styles.shopCatalogItem__text}>{name}</p>
		</div >

	)


}

