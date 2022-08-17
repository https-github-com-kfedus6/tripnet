const Router = require('express')
const router = new Router()

const novetlyRouter=require("./novetlyRouter");
const flightsRouter = require('./flightsRouter')
const userRouter=require("./userRouter");

router.use('/flights', flightsRouter)
router.use("/novetly",novetlyRouter);
router.use("/user",userRouter);

module.exports = router;