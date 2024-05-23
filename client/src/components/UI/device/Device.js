import React from 'react'
import Image from 'react-bootstrap/Image'
import heartImg from '../../UI/icons/product/heart.svg'
import DeviceCarousel from './DeviceCarousel'
import MyButton from '../buttons/MyButton'
import classes from './Device.module.css'
import { Link } from 'react-router-dom'
import { DEVICEPAGE_ROUTE } from '../../../router/paths'
const Device = ({ device }) => {
	const getStockPrice = (price, percent) => {
		return Math.ceil(price - price / 100 * percent)
	}
	return (
		<div className={`d-flex flex-column ${classes.deviceWrapper}`} >
			<div className={classes.deviceCarousel}><DeviceCarousel device={device} /></div>
			<Link to={DEVICEPAGE_ROUTE + '/' + device.id} className={classes.deviceCarouselText}>{device.name}</Link>
			{device.percent ?
				<div className={`d-flex align-items-end ${classes.devicePrice}`}>
					<h1 className={classes.deviceMainPrice}>{getStockPrice(device.price, device.percent)} ₽</h1>
					<h3 className={classes.deviceStockPrice}> {device.price} ₽</h3>
				</div>
				:
				<div className={`d-flex align-items-end ${classes.devicePrice}`}>
					<h1 className={classes.deviceMainPrice}>{device.price} ₽</h1>
				</div>
			}
			<div className='d-flex justify-content-between align-items-center' style={{ margin: '0 0 20px 0' }}>
				<h3 className={classes.deviceInStock} style={{ color: device.inStock ? 'rgb(22,155,0)' : 'red' }}>
					{device.inStock ? 'В наличии' : 'Отсутсвует'}
				</h3>
				<div className={classes.deviceHeartIcon}>
					<Image src={heartImg} style={{ width: 18, height: 15 }} />
				</div>
			</div>
			<div >
				<MyButton>В корзину</MyButton>
			</div>
		</div>
	)
}

export default Device