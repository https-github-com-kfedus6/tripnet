const Router = require('express')
const router = new Router()

const flightComfortController = require('../controllers/FlightComfortController')

router.post('/', flightComfortController.postFlightComfort)
router.get('/', flightComfortController.getFlightComfort)

module.exports = router