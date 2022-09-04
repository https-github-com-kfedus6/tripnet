const Router = require('express')
const router = new Router();
const IsAdminMiddleWare = require("../middleware/IsAdminMiddleWare");

const flightsController = require('../controllers/FlightsController');

router.get('/search',flightsController.search);
router.post('/', IsAdminMiddleWare, flightsController.postFlights);
router.get('/', flightsController.getSortFlights);
router.get('/:id', flightsController.getFlight);
router.delete('/:id', IsAdminMiddleWare, flightsController.deleteFlight);
router.put('/', IsAdminMiddleWare, flightsController.updateFlight);


module.exports = router