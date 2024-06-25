import React from 'react'
import styles from './DeviceButton.module.css'
import { useLocation } from 'react-router-dom'
const MyButton = (props) => {
	const { pathname } = useLocation()

	//*Если pathname===/basket то сценарий с оформлением
	//*В Остальных случаях проверяем наличие в корзине и в зависимости отрисовываем стили+fn
	//?В случае inBasket=>Оформять/Перейти в корзину
	//?В случае !inBasket=>меняем стиль на верхнюю с дефолта

	return (
		<button onClick={() => console.log(pathname)
		} className={styles.myBtn} {...props}>
			<h3 className={styles.myBtnText}>{props.children}</h3>
		</button >
	)
}

export default MyButton