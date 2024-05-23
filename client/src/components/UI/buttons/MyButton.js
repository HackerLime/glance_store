import React from 'react'
import styles from './MyButton.module.css'
const MyButton = (props) => {
	return (
		<button className={styles.myBtn} {...props}>
			<h3 className={styles.myBtnText}>{props.children}</h3>
		</button >
	)
}

export default MyButton