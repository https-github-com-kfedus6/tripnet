const Router = require('express')
const router = new Router()
const IsAdminMiddleWare = require("../middleware/IsAdminMiddleWare");

const flightsController = require('../controllers/FlightsController')

router.post('/',IsAdminMiddleWare, flightsController.postFlights)
router.get('/', flightsController.getSortFlights)
router.get('/:id', flightsController.getFlight)

module.exports = router