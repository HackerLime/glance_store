import React from 'react'
import { Image } from 'react-bootstrap'
import { otziv1, otziv2, otziv3, otziv4, otziv5, otziv6 } from '../utils/consts'

const images = [
	{ id: 1, img: otziv1 },
	{ id: 2, img: otziv2 },
	{ id: 3, img: otziv3 },
	{ id: 4, img: otziv4 },
	{ id: 5, img: otziv5 },
	{ id: 6, img: otziv6 },
]
const ReviewImages = () => {
	return (
		<div className='d-flex'>
			{images.map((i, idx) =>
				<div key={i.id} style={{ margin: '0 16px 0 0' }}>
					<Image src={i.img} />
				</div>
			)}
		</div>
	)
}

export default ReviewImages