const Router = require('express')
const router = new Router()

const flightsController = require('../controllers/FlightsController')

router.post('/', flightsController.postFlights)
router.get('/', flightsController.getSortFlights)
router.get('/:id', flightsController.getFlight)

module.exports = router