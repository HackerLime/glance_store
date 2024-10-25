import { FC, useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import Form from 'react-bootstrap/Form'
import styles from './FilterPrice.module.css'


type TFilterPriceProps = {
	sortByPrice: (from: number, to: number) => void;
	defFrom: number;
	defTo: number
}

export const FilterPrice: FC<TFilterPriceProps> = ({ sortByPrice, defFrom, defTo }) => {


	type TPriceState = {
		from: number | null,
		to: number | null
	}
	const [prices, setPrices] = useState<TPriceState>({ from: null, to: null })

	const searchAction = () => {
		if (prices.from && prices.to) {
			sortByPrice(prices.from, prices.to)
		}
		setPrices({ from: null, to: null })
	}

	return (
		<div>
			<div className={styles.formControls__wrapper} >
				<Form.Control
					type='number'
					value={Number(prices.from)}
					onChange={e => setPrices({ ...prices, from: Number(e.target.value) })}
					className={styles.pricesFirstElem} placeholder={`от ${defFrom} ₽ `} />
				<div className={styles.pricesMiddleLine}></div>
				<Form.Control
					type='number'
					value={Number(prices.to)}
					onChange={e => setPrices({ ...prices, to: Number(e.target.value) })}
					className={styles.pricesLastElem} placeholder={`до ${defTo} ₽ `} />
			</div>
			<Button onClick={() => searchAction()}>Найти</Button>
		</div>
	)
}

