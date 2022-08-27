const Router = require('express')
const router = new Router()

const novetlyRouter = require("./novetlyRouter");
const flightsRouter = require("./flightsRouter")
const userRouter = require("./userRouter");
const aboutUsRouter = require("./aboutUsRouter");
const FAQRouter = require("./FAQRouter");
const infoCompanyRouter = require("./infoCompanyRouter");
const blogRouter = require("./blogRouter");
const flightComfortRouter = require("./flightComfortRouter");
const responceRouter = require("./responceRouter");
const ScheduleBusRouter = require('./SchduleBusRouter');

router.use("/flights", flightsRouter)
router.use("/novetly", novetlyRouter);
router.use("/user", userRouter);
router.use("/aboutUs", aboutUsRouter);
router.use("/FAQ", FAQRouter);
router.use("/infoCompany", infoCompanyRouter);
router.use("/blog", blogRouter);
router.use("/flightComfort", flightComfortRouter)
router.use("/responce", responceRouter);
router.use('/scheduleBus', ScheduleBusRouter);

module.exports = router;