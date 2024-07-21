const ApiError = require('../error/ApiError')
const { BasketDevice } = require('../models/models')



class BasketController {
	async createBasketDevice(req, res, next) {

		try {
			const { deviceId, basketId } = req.body
			const basketDevice = await BasketDevice.create({ deviceId, basketId })
			return res.json(basketDevice)
		} catch (e) {
			next(ApiError.badRequest(e.message))
		}
	}

	async getBasketDevices(req, res, next) {
		try {
			const { basketId } = req.body
			const basketDevices = await BasketDevice.findAll({
				where: {
					basketId
				}
			})
			return res.json(basketDevices)
		} catch (e) {
			next(ApiError.badRequest(e.message))
		}
	}

	async destroyBasketDeviceById(req, res, next) {
		try {
			const { basketId, deviceId } = req.body
			const targetDevice = await BasketDevice.destroy({
				where: {
					basketId, deviceId
				}
			})
			return res.json(targetDevice)
		} catch (e) {
			next(ApiError.badRequest(e.message))
		}
	}
}

module.exports = new BasketController()