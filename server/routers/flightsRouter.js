const Router = require('express')
const router = new Router()

const flightsController = require('../controllers/FlightsController')

router.post('/', flightsController.postFlights)
router.get('/', flightsController.getSortFlights)

module.exports = router