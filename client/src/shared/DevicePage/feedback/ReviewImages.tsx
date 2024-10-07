import Fancybox from '../../UI/fancybox/Fancybox'
import FancyboxItem from '../../UI/fancybox/FancyboxItem'
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
			<div>
				<Fancybox
					options={{
						Carousel: {
							infinite: false,
						},
					}}
				>
					<div className='d-flex' >
						{images.map(i =>
							<FancyboxItem key={i.id} href={i.img} src={i.img} />
						)}
					</div>
				</Fancybox>
			</div>
		</div>
	)
}

export default ReviewImages