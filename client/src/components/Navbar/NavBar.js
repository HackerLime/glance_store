import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import ShopLogo from '../UI/logo/ShopLogo'
import NavBarSearch from './NavBarSearch'
import NavBarMenu from './NavBarMenu'
import Container from 'react-bootstrap/Container'
const NavBar = () => {


	return (

		<div
			style={{
				borderBottom: '1px solid rgb(193, 193, 193)',
			}}>
			<Container
				style={{ padding: '20px 0 20px 0' }}
				className='d-flex justify-content-between align-items-center'>
				<div
					style={{
						marginRight: 88
					}}
				><ShopLogo /></div>
				<div
					style={{
						marginRight: 88
					}}
					className='flex-grow-1'><NavBarSearch /></div>
				<div className='flex-grow-1'><NavBarMenu /></div>
			</Container>
		</div>


	)
}

export default NavBar