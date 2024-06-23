import { makeAutoObservable } from 'mobx'
export default class DeviceStore {
	constructor() {
		this._types = []
		this._brands = []
		this._devices = []
		this._basketDevices = []
		this._selectedBrand = {}
		this._selectedType = {}
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

	get basketDevices() {
		return this._basketDevices
	}

	get selectedType() {
		return this._selectedType
	}

	get selectedBrand() {
		return this._selectedBrand
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

	setBasketDevices(device) {
		this._basketDevices = device
	}

	setSelectedBrand(selectedBrand) {
		this._selectedBrand = selectedBrand
	}

	setSelectedType(selectedType) {
		this._selectedType = selectedType
	}


}


