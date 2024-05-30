import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

import Image from 'react-bootstrap/Image'

const DeviceCarousel = ({ device }) => {
	return (
		<Carousel variant='dark' slide={false}>
			<Carousel.Item>
				<div
					style={{ backgroundColor: 'rgb(248, 252, 255)', position: 'relative' }}
				>
					<Image src={process.env.REACT_APP_API_URL + '/' + device.img} />
					{device.percent ?
						<h4
							style={{ position: 'absolute', top: 0, right: 0, backgroundColor: '#EBBA1A', fontSize: 18, padding: 8, borderRadius: 8 }}
						>- {device.percent} %</h4>
						:
						""
					}
				</div>

			</Carousel.Item>

		</Carousel>
	)
}

export default DeviceCarousel