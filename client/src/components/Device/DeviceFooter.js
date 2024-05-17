import React from 'react'
import { Image } from 'react-bootstrap'
import ReviewImages from './feedback/ReviewImages'
import SVGFBStar from '../UI/icons/SVGFBStar'
import SVGFBStarF from '../UI/icons/SVGFBStarF'
import SVGStarS from '../UI/icons/SVGFBStarsmall'
import FBFox from '../../assets/FBFox.jpg'
import FBTiger from '../../assets/FBTiger.webp'
import FBPanda from '../../assets/FBPanda.webp'
const DeviceFooter = () => {
	const feedBack = { reviews: 325, ratings: 2000, middleRating: 5 }
	const user = { id: 1, img: FBFox, name: 'Дмитрий' }
	const userRate = { id: 1, rate: 5, positiveFB: 'Очень красивый, удобно пользоваться', negativeFB: 'нет', date: '25.07' }
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
					{/* card */}
					<div
						style={
							{
								backgroundColor: 'rgb(246, 246, 246)',
								maxWidth: 268,
								borderRadius: '8px',
								padding: '23px 0 25px 18px'
							}
						}>
						{/* //!head */}
						<div className='d-flex' style={{ maxWidth: 212, margin: '0 0 16px 0' }}>
							<div
								style={
									{
										margin: '0 12px 0 0 ',
										background: `url(${user.img}) 50% no-repeat`,
										backgroundSize: '48px 48px',
										height: '48px',
										width: '48px',
										borderRadius: '50%'
									}
								}
							></div>
							<div style={{ margin: '0 16px 0 0' }}>
								<div style={{ color: 'rgb(69,69,69)', fontWeight: 300, margin: '0 0 4px 0' }}>{user.name}</div>
								<div className='d-flex'>
									<SVGStarS style={{ margin: '0 4px 0 0' }} />
									<SVGStarS style={{ margin: '0 4px 0 0' }} />
									<SVGStarS style={{ margin: '0 4px 0 0' }} />
									<SVGStarS style={{ margin: '0 4px 0 0' }} />
									<SVGStarS />
								</div>
							</div>
							<div style={{ fontWeight: 300, lineHeight: "19px", color: 'rgb(12,12,12)' }}>{userRate.date}</div>
						</div>
						{/* //!head */}
						{/*  //*main */}
						{/* //?feedback_item */}
						<div style={{ maxWidth: 192 }}>
							<span style={{ color: "rgb(27, 27, 27)", fontSize: 20 }}>Плюсы: </span>
							<span style={{ color: "rgb(69,69,69)", fontSize: 18, fontWeight: 300 }}>{userRate.positiveFB}</span>
						</div>
						{/* //?feedback_item */}
						{/* //?feedback_item */}
						<div style={{ maxWidth: 192 }}>
							<span style={{ color: "rgb(27, 27, 27)", fontSize: 20 }}>Плюсы: </span>
							<span style={{ color: "rgb(69,69,69)", fontSize: 18, fontWeight: 300 }}>{userRate.positiveFB}</span>
						</div>
						{/* //?feedback_item */}
						{/*  //*main */}
					</div>
					{/* card */}
				</div>
			</div>
		</div >
	)
}

export default DeviceFooter