import { $host, $authHost } from "./index";


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

/* export const createDevice = async () => {
	const device = await $authHost
} */