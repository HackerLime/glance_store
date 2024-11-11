const { Op } = require('sequelize')
const ApiError = require('../error/ApiError')
const { BasketDevice, Device } = require('../models/models')



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
			//*
			if (basketDevices.length) {
				const devicesIds = basketDevices.map(device => device.deviceId)
				const devices = await Device.findAll({
					where: {
						id: {
							[Op.in]: devicesIds
						}
					}
				})
				return res.json(devices)
			}
			//*
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