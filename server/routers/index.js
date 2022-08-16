const Router = require('express')
const router = new Router()

const novetlyRouter=require("./novetlyRouter");
const flightsRouter = require('./flightsRouter')

router.use('/flights', flightsRouter)
router.use("/novetly",novetlyRouter);

module.exports = router;