import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'
import { ADMIN_ROUTE } from '../../router/paths'
import Button from 'react-bootstrap/esm/Button'
import { Context } from '../../index'

const Profile = observer(() => {
	const { user } = useContext(Context)
	const navigate = useNavigate()
	const logout = () => {
		user.setIsAuth(false)
		localStorage.removeItem('token')
	}

	return (
		<div className='d-flex align-items-center justify-content-center'>
			<div className='d-flex flex-column align-items-center'>
				{
					user.isAuth ?
						<div className='d-flex flex-column align-items-center'>
							<p style={{ fontSize: '20px', margin: '0 0 10px 0' }}>ваш Email:{user.user.email}</p>
							<Button style={{ margin: '0 0 10px 0' }} variant='danger' className='me-2' onClick={() => logout()} >Выйти</Button>
							<Button variant='success' onClick={() => navigate(ADMIN_ROUTE)} >Админка</Button>
						</div> :
						''
				}
			</div>
		</div>
	)
})

export default Profile