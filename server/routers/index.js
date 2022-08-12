const Router = require('express')
const router = new Router()

const flightsRouter = require('./flightsRouter')

router.use('/flights', flightsRouter)

module.exports = router;