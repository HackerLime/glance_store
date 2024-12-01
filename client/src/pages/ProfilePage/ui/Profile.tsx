import { RootState } from 'app/store/store'
import Button from 'react-bootstrap/esm/Button'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logOutAction } from 'shared/api/user/user.slice'
import { ADMIN_ROUTE } from 'shared/routerPaths'

export const Profile = () => {
	const user = useSelector((state: RootState) => state.user)
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const logout = () => {
		dispatch(logOutAction())
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
							{
								user.user.role === 'ADMIN' ?
									<Button variant='success' onClick={() => navigate(ADMIN_ROUTE)} >Админка</Button>
									:
									null
							}
						</div> :
						''
				}
			</div>
		</div>
	)
}

