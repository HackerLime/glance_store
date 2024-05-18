import React from 'react'
import ReviewImages from './feedback/ReviewImages'
import SVGFBStar from '../UI/icons/SVGFBStar'
import SVGFBStarF from '../UI/icons/SVGFBStarF'
import FeedbackItems from './feedback/FeedbackItems'

const DeviceFooter = () => {
	const feedBack = { reviews: 325, ratings: 2000, middleRating: 5 }

	return (
		<div>
			<div>
				<h6 style={{ fontSize: 32, lineHeight: '38px', color: "rgb(12,12,12)", margin: '0 0 24px 0' }}>Отзывы</h6>
				<div className='d-flex' style={{ margin: '0 0 24px 0' }} >
					<h1 style={{ fontSize: 20, lineHeight: "23px", color: "rgb(69,69,69)", margin: '0 19px 0 0' }}>{feedBack.reviews} отзывов</h1>
					<h1 style={{ fontSize: 20, lineHeight: "23px", color: "rgb(69,69,69)", }}>{feedBack.ratings} оценок</h1>
				</div>
			</div>
			<div style={{ margin: "0 0 32px 0" }}>
				<ReviewImages />
			</div>
			<div>
				<div style={{ background: "rgb(188, 197, 255)", padding: '20px 0 20px 16px' }}>
					<div className='d-flex' style={{ margin: '0 0 17px 0' }}>
						<div style={{ fontSize: 20, lineHeight: '28px', color: "rgb(12,12,12)", margin: '0 16px 0 0 ' }}>{feedBack.middleRating}</div>
						<div><SVGFBStarF /> <SVGFBStar /></div>
					</div>
					<FeedbackItems />
				</div>
			</div>
		</div >
	)
}

export default DeviceFooter