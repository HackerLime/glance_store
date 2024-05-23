import { makeAutoObservable } from 'mobx'

export default class GarbageStore {
	constructor() {
		this._garbage = []

		makeAutoObservable(this)
	}

	get garbage() {
		return this._garbage
	}

	setGarbage(i) {
		this._garbage = i
	}

}