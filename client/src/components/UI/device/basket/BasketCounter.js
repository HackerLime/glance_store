import React, { useState } from 'react'

const BasketCounter = () => {
	const [counterState, setCounterState] = useState(1)
	if (counterState <= 0) {
		setCounterState(1)
	}
	return (
		<div className='counter-wrapper d-flex' style={{ maxWidth: '108px' }}>
			<button
				onClick={() => setCounterState(counterState - 1)}
				style={{ height: '36px', width: '36px', border: '1px solid teal' }}>-</button>
			<div className='d-flex justify-content-center align-items-center' style={{ height: '36px', width: '36px', border: '1px solid teal', overflow: 'hidden' }}>
				{counterState}
			</div>
			<button
				onClick={() => setCounterState(counterState + 1)}
				style={{ height: '36px', width: '36px', border: '1px solid teal' }}>+</button>
		</div>
	)
}

export default BasketCounter