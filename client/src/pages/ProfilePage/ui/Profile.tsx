/* import { useContext } from 'react'
import Button from 'react-bootstrap/esm/Button'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../index'
import { ADMIN_ROUTE } from '../../router/paths'
 */
export const Profile = () => {
	/* 	const { user } = useContext(Context)
		const navigate = useNavigate()
		const logout = () => {
			user.setIsAuth(false)
			localStorage.removeItem('token')
		} */

	return (
		<div className='d-flex align-items-center justify-content-center'>
			PROFILEPAGE
			{/* <div className='d-flex flex-column align-items-center'>
				{
					user.isAuth ?
						<div className='d-flex flex-column align-items-center'>
							<p style={{ fontSize: '20px', margin: '0 0 10px 0' }}>ваш Email:{user.user.email}</p>
							<Button style={{ margin: '0 0 10px 0' }} variant='danger' className='me-2' onClick={() => logout()} >Выйти</Button>
							<Button variant='success' onClick={() => navigate(ADMIN_ROUTE)} >Админка</Button>
						</div> :
						''
				}
			</div> */}
		</div>
	)
}

