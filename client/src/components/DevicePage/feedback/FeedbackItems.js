import React from 'react'
import FeedbackItem from './FeedbackItem'
import FBFox from '../../../assets/FBFox.jpg'

const FeedbackItems = () => {
	const user = { id: 1, img: FBFox, name: 'Илон Маск' }
	const userRate = { id: 1, rate: 5, positiveFB: 'Очень красивый, удобно пользоваться', negativeFB: 'нет', date: '25.07' }
	return (
		<div className='d-flex'>
			<FeedbackItem user={user} userRate={userRate} />
			<FeedbackItem user={user} userRate={userRate} />
			<FeedbackItem user={user} userRate={userRate} />
		</div>
	)
}

export default FeedbackItems