import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import ShopLogo from '../UI/logo/ShopLogo'
import NavBarSearch from './NavBarSearch'
import NavBarMenu from './NavBarMenu'
import Container from 'react-bootstrap/Container'
const NavBar = () => {
	return (
		<Navbar
			fixed='top'
			style={{
				background: 'rgb(246,246,246)',
				borderBottom: '1px solid rgb(193, 193, 193)',
			}}>
			<Container
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
		</Navbar>


	)
}

export default NavBar