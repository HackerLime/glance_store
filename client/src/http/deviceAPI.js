import { $host, $authHost } from "./index";
import { jwtDecode } from 'jwt-decode'



export const fetchBrands = async () => {
	const { data } = await $host.get('/api/brand')
	return data
}

export const createBrand = async (name) => {
	const { data } = await $authHost.post('/api/brand', { name })
	return data
}

export const fetchTypes = async () => {
	const { data } = await $host.get('/api/type')
	return data
}

export const createType = async (name) => {
	const { data } = await $authHost.post('/api/type', { name })
	return data
}

export const fetchDevices = async (brandId, typeId, limit = 20, offset) => {
	const { data } = await $host.get('/api/device', { params: { brandId, typeId, limit, offset } })
	return data
}

export const fetchOneDevice = async (id) => {
	const { data } = await $host.get(`/api/device/${id}`)
	return data
}


export const createDevice = async (device) => {
	const { data } = await $host.post('/api/device', device)
	return data
}


export const addBasketDevice = async (deviceId, basketId) => {

	const { data } = await $authHost.post('/api/basket/create', { deviceId, basketId })
	return data
}


export const fetchBasketDevices = async () => {
	const { id } = jwtDecode(localStorage.getItem('token'))
	const { data } = await $authHost.post('/api/basket/get', { basketId: id })
	return data

}

export const deleteBasketDevice = async (basketId, deviceId) => {
	const { data } = await $authHost.post('/api/basket/destroy', { basketId, deviceId })
	return data
}

