import React from 'react'
import classes from './LoadingAnimation.module.css'
const LoadingAnimation = () => {
	return (
		<div style={{ background: '#BCC5FF', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', height: '100vh' }}>
			<div style={{ flexGrow: 1 }}><h1 className={classes.linearWipe}>GLANCE</h1></div>
		</div>
	)
}

export default LoadingAnimation