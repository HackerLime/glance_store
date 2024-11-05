import { FC, useState } from 'react';
import { FilterLabel } from '../filterLabel';
import { FilterPrice } from './FilterPrice';
import styles from './FilterWithPrice.module.css';
import { Dispatch, SetStateAction } from 'react'
import type { TPriceState } from 'widgets/catalogFilter/types'
type TFilterWithPriceProps = {
	defFrom: number;
	defTo: number;
	addPriceRangeAction: (from: number, to: number) => void;
	isCancelVisible: boolean;
	cancelVisibleAction: () => void
	prices: { from: string, to: string };
	setPrices: Dispatch<SetStateAction<TPriceState>>
}


export const FilterWithPrice: FC<TFilterWithPriceProps> = ({ defFrom, defTo, addPriceRangeAction, isCancelVisible, cancelVisibleAction, prices, setPrices }) => {



	const cancelAction: () => void = () => {
		cancelVisibleAction()
	}


	return (
		<div className={styles.filterWithPrice__wrapper}>
			<div className={styles.filterWithPrice__labelAndCancel}>
				<FilterLabel>Цена, ₽ </FilterLabel>
				{
					isCancelVisible ?
						<div onClick={() => cancelAction()} className={styles.labelAndCancel__cancel} >Сбросить</div>
						:
						''
				}
			</div>
			<FilterPrice addPriceRangeAction={addPriceRangeAction} defFrom={defFrom} defTo={defTo} prices={prices} setPrices={setPrices} />
		</div>
	)
}

