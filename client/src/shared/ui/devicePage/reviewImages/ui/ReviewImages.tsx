import { Fancybox, FancyboxItem } from 'shared/ui/fancybox'
import { feedbackStaticImages } from '../utils'
export const ReviewImages = () => {
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
						{feedbackStaticImages.map(i =>
							<FancyboxItem key={i.id} href={i.staticImage} src={i.staticImage} />
						)}
					</div>
				</Fancybox>
			</div>
		</div>
	)
}

