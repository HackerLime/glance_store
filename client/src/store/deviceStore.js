import { makeAutoObservable } from 'mobx'
export default class DeviceStore {
	constructor() {
		this._types = []
		this._brands = []
		this._devices = []
		makeAutoObservable(this)
	}

	get types() {
		return this._types
	}
	get brands() {
		return this._brands
	}
	get devices() {
		return this._devices
	}

	setBrands(brand) {
		this._brands = brand
	}
	setTypes(type) {
		this._types = type
	}
	setDevices(device) {
		this._devices = device
	}
}


