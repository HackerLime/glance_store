import { SVGFBStar, SVGFBStarF } from 'shared/assets/icons'
import { FeedbackItems } from 'shared/ui/devicePage/feedback'
import { ReviewImages } from '../reviewImages'
import styles from './DevicePageFooter.module.css'

export const DevicePageFooter = () => {
	const feedBack = { reviews: 325, ratings: 2000, middleRating: 5 }

	return (
		<footer>
			<section>
				<h2 className={styles.devicePageFooter__title} >Отзывы</h2>
				<div className={styles.devicePageFooter__feedbackInfo}  >
					<span className={styles.feedbackInfo__reviews} >{feedBack.reviews} отзывов</span>
					<span className={styles.feedbackInfo__ratings} >{feedBack.ratings} оценок</span>
				</div>
			</section>
			<ReviewImages />
			<section className={styles.feedback__wrapper} >
				<div className={styles.feedback__middleRating} >
					<span >{feedBack.middleRating}</span>
					<div>
						<SVGFBStarF /> <SVGFBStarF /> <SVGFBStarF /> <SVGFBStarF /> <SVGFBStar />
					</div>
				</div>
				<FeedbackItems />
			</section>
		</footer >
	)
}

