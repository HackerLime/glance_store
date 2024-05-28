import { makeAutoObservable } from 'mobx'
import iphone14Img from '../components/UI/icons/promotion/14.svg'
import iphone12Img from '../components/UI/icons/promotion/12.svg'
import novaY61img from '../components/UI/icons/promotion/61.svg'
import redmiImg from '../components/UI/icons/promotion/redmi.svg'
import iphone14_2Img from '../components/UI/icons/promotion/14_2.svg'
import novaY61_2img from '../components/UI/icons/promotion/Y61_2.svg'
export default class DeviceStore {
	constructor() {
		this._types = [{ id: 1, name: 'Смартфон' }]
		this._brands = [
			{ id: 1, name: 'Apple' },
			{ id: 2, name: 'Huawei' },
			{ id: 3, name: 'Xiaomi' },
		]
		this._devices = [
			{ id: 1, name: 'iPhone 14 128GB', brandId: 1, typeId: 1, price: 87999, percent: 15, inStock: true, img: iphone14Img },
			{ id: 2, name: 'iPhone 12 64GB', brandId: 1, typeId: 1, price: 47756, percent: 20, inStock: true, img: iphone12Img },
			{ id: 3, name: 'nova Y61', brandId: 2, typeId: 1, price: 14117, percent: 25, inStock: true, img: novaY61img },
			{ id: 4, name: 'Redmi  128GB', brandId: 3, typeId: 1, price: 19999, percent: 0, inStock: true, img: redmiImg },
			{ id: 5, name: 'iPhone 14 128GB', brandId: 1, typeId: 1, price: 79999, percent: 13, inStock: true, img: iphone14_2Img },
			{ id: 6, name: 'nova Y61', brandId: 2, typeId: 1, price: 14999, percent: 22, inStock: true, img: novaY61_2img },
		]
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

	setSelectedBrand(selectedBrand) {
		this._selectedBrand = selectedBrand
	}

	setSelectedType(selectedType) {
		this._selectedType = selectedType
	}


}


