import { FC, useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import Form from 'react-bootstrap/Form'
import styles from './FilterPrice.module.css'

type TFilterPriceProps = {
	addPriceRangeAction: (from: number, to: number) => void;
	defFrom: number;
	defTo: number
}

export const FilterPrice: FC<TFilterPriceProps> = ({ addPriceRangeAction, defFrom, defTo }) => {

	type TPriceState = {
		from: string,
		to: string
	}

	const [prices, setPrices] = useState<TPriceState>({ from: '', to: '' })



	const searchAction = () => {
		addPriceRangeAction(Number(prices.from) || defFrom, Number(prices.to) || defTo)
	}

	return (
		<div>
			<div className={styles.formControls__wrapper} >
				<Form.Control
					type='number'
					value={prices.from}
					onChange={e => setPrices({ ...prices, from: e.target.value })}
					className={styles.pricesFirstElem} placeholder={`от ${defFrom} ₽ `} />
				<div className={styles.pricesMiddleLine}></div>
				<Form.Control
					type='number'
					value={prices.to}
					onChange={e => setPrices({ ...prices, to: e.target.value })}
					className={styles.pricesLastElem} placeholder={`до ${defTo} ₽ `} />
			</div>
			<Button onClick={() => searchAction()}>Найти</Button>
		</div>
	)
}

