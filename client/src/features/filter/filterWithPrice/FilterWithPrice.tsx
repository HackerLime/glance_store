import { FilterLabel } from '../filterLabel'
import { FilterPrice } from './FilterPrice'
import styles from './FilterWithPrice.module.css'

export const FilterWithPrice = ({ defFrom, defTo, addPriceRangeAction, cancelVisible }) => {

	return (
		<div className={styles.filterWithPrice__wrapper}>
			<div className={styles.filterWithPrice__labelAndCancel}>
				<FilterLabel>Цена, ₽ </FilterLabel>
				{
					cancelVisible ?
						<div onClick={() => console.log('Cancel Action')} className={styles.labelAndCancel__cancel} >Сбросить</div>
						:
						''
				}
			</div>
			<FilterPrice addPriceRangeAction={addPriceRangeAction} defFrom={defFrom} defTo={defTo} />
		</div>
	)
}

