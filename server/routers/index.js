const Router = require('express')
const router = new Router()

const novetlyRouter=require("./novetlyRouter");
const flightsRouter = require('./flightsRouter')
const userRouter=require("./userRouter");
const aboutUsRouter=require("./aboutUsRouter");
const FAQRouter=require("./FAQRouter");

router.use('/flights', flightsRouter)
router.use("/novetly",novetlyRouter);
router.use("/user",userRouter);
router.use("/aboutUs",aboutUsRouter);
router.use("/FAQ",FAQRouter);

module.exports = router;