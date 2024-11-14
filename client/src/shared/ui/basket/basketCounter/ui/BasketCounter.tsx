import { useState } from 'react';
import styles from './BasketCouner.module.css';

export const BasketCounter = ({ counterChangeAction }) => {

	const [counterState, setCounterState] = useState(1)

	const addCountAction = () => {
		setCounterState(counterState + 1)
		counterChangeAction(counterState + 1)
	}

	const removeCountAction = () => {
		if (counterState > 1) {
			setCounterState(counterState - 1)
			counterChangeAction(counterState - 1)
		}
	}



	return (
		<div className={styles.counter__wrapper}>
			<button
				onClick={() => removeCountAction()}
				className={styles.counter__button}
			>-</button>
			<div className={styles.counter__value}>
				{counterState}
			</div>
			<button
				onClick={() => addCountAction()}
				className={styles.counter__button}
			>+</button>
		</div>
	)
}

