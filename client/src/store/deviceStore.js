import { makeAutoObservable } from 'mobx'
export default class DeviceStore {
	constructor() {
		this._types = []
		this._brands = []
		this._devices = []
		this._basketDevicesData = []
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

	get basketDevicesData() {
		return this._basketDevicesData
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

	get isAllBasketDevicesChecked() {
		let counter = 0
		for (let i = 0; i < this._basketDevices.length; i++) {
			if (this._basketDevices[i].isChecked === true) {
				counter++
			}
		}
		if (counter > 0 && counter === this._basketDevices.length) {
			return true
		} else {
			return false
		}
	}

	get checkedBasketDevicesIds() {
		let arr = []
		for (let i = 0; i < this._basketDevices.length; i++) {
			if (this._basketDevices[i].isChecked === true) {
				arr.push(this._basketDevices[i].id)
			}
		}
		return arr
	}

	get isCheckedBasketDevicesPrice() {
		let counter = 0
		this._basketDevices.map(i => i.isChecked === true ? counter = counter + i.price : counter = counter + 0)
		return counter
	}

	get inBasketDevicesId() {
		let arr = []
		for (let i = 0; i < this._basketDevicesData.length; i++) {
			arr.push(this._basketDevicesData[i].deviceId)
		}
		return arr
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

	setBasketDevicesData(deviceData) {
		this._basketDevicesData = deviceData
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


	setBasketDevicesIsChecked(id, value) {
		for (let i = 0; i < this._basketDevices.length; i++) {
			if (this._basketDevices[i].id === id) {
				this._basketDevices[i].isChecked = value
			}
		}
	}
	setBasketDevicesIsCheckedFalse() {
		this._basketDevices.forEach(i => i.isChecked = false)

	}
	setBasketDevicesIsCheckedTrue() {
		this._basketDevices.forEach(i => i.isChecked = true)

	}




}


