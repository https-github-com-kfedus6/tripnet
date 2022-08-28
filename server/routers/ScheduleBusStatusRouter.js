const Router = require("express")
const router = new Router()

const scheduleBusStatusController = require('../controllers/ScheduleBusStatusController')

router.post('/', scheduleBusStatusController.postStatus)
router.get('/:id', scheduleBusStatusController.getStatus)
router.put('/', scheduleBusStatusController.pusStatus)

module.exports = router