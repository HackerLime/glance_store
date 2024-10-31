import { FC } from 'react';
import { FilterLabel } from '../filterLabel';
import { FilterPrice } from './FilterPrice';
import styles from './FilterWithPrice.module.css';

type TFilterWithPriceProps = {
	defFrom: number;
	defTo: number;
	addPriceRangeAction: (from: number, to: number) => void;
	isCancelVisible: boolean;
	cancelVisibleAction: () => void
}


export const FilterWithPrice: FC<TFilterWithPriceProps> = ({ defFrom, defTo, addPriceRangeAction, isCancelVisible, cancelVisibleAction }) => {

	return (
		<div className={styles.filterWithPrice__wrapper}>
			<div className={styles.filterWithPrice__labelAndCancel}>
				<FilterLabel>Цена, ₽ </FilterLabel>
				{
					isCancelVisible ?
						<div onClick={() => cancelVisibleAction()} className={styles.labelAndCancel__cancel} >Сбросить</div>
						:
						''
				}
			</div>
			<FilterPrice addPriceRangeAction={addPriceRangeAction} defFrom={defFrom} defTo={defTo} />
		</div>
	)
}

