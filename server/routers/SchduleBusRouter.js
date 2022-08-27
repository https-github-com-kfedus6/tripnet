const Router = require('express')
const router = new Router()

const scheduleBusController = require('../controllers/ScheduleBusController');

router.post('/', scheduleBusController.postSchedule)
router.get('/:id', scheduleBusController.getSchedule)
router.put('/:id')

module.exports = router