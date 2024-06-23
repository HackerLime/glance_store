const Router = require('express')
const router = new Router()
const basketController = require('../controllers/basketController')

router.post('/create', basketController.createBasketDevice)
router.post('/get', basketController.getBasketDevices)
router.post('/destroy', basketController.destroyBasketDeviceById)


module.exports = router