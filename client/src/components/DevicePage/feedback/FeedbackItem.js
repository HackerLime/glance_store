import React from 'react'
import SVGStarS from '../../UI/icons/SVGFBStarsmall'
import styles from './FeedbackItem.module.css'
const FeedbackItem = ({ user, userRate }) => {

	return (
		<div className={styles.feedBackItemWrapper}>
			<div className='d-flex' style={{ maxWidth: 212, margin: '0 0 16px 0' }}>
				<div className={styles.feedBackItemImage} style={{ background: `url(${user.img}) 50% no-repeat`, height: '48px', width: '48px', backgroundSize: '48px 48px' }}
				>
				</div>
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
			<div style={{ maxWidth: 192 }}>
				<span style={{ color: "rgb(27, 27, 27)", fontSize: 20 }}>Плюсы: </span>
				<span style={{ color: "rgb(69,69,69)", fontSize: 18, fontWeight: 300 }}>{userRate.positiveFB}</span>
			</div>
			<div style={{ maxWidth: 192 }}>
				<span style={{ color: "rgb(27, 27, 27)", fontSize: 20 }}>Минусы: </span>
				<span style={{ color: "rgb(69,69,69)", fontSize: 18, fontWeight: 300 }}>{userRate.negativeFB}</span>
			</div>
		</div>

	)
}

export default FeedbackItem