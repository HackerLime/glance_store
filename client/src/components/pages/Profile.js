import React from 'react'
import { observer } from 'mobx-react-lite'
import SVGSmile from '../UI/icons/SVGSmile'
import MyButton from '../UI/buttons/DeviceButton'
import { useNavigate } from 'react-router-dom'
import { SHOP_ROUTE } from '../../router/paths'
const Profile = observer(() => {
	const navigate = useNavigate()
	return (
		<div className='d-flex align-items-center justify-content-center'>
			<div className='d-flex flex-column align-items-center'>
				<h1 style={{ fontSize: '24px', margin: '0 0 30px 0' }}>Страница в разработке!</h1>
				<SVGSmile style={{ margin: "0 0 20px 0" }} />
				<MyButton onClick={() => navigate(SHOP_ROUTE)}>Перейти в магазин</MyButton>
			</div>
		</div>
	)
})

export default Profile