const { ScheduleBusStatus } = require('../models/models')
const ErrorApi = require('../error/ErrorApi')

class ScheduleBusStatusController {
    async postStatus(req, res, next) {
        try {
            const { status, flightId } = req.body

            for (let i = 0; i <= 7; i++) {
                const scheduleStatus = await ScheduleBusStatus.create({ status: status, flightId: flightId })
                res.json(scheduleStatus)
            }

        } catch (err) {
            return next(ErrorApi.badRequest(err));
        }
    }
    async getStatus(req, res, next) {
        try {
            const { id } = req.params

            const scheduleStatus = await ScheduleBusStatus.findAll({ where: { flightId: id } })

            return res.json(scheduleStatus)
        } catch (err) {
            return next(ErrorApi.badRequest(err));
        }
    }

    async pusStatus(req, res, next) {
        try {
            const { id, status } = req.body

            await ScheduleBusStatus.update({ status: status }, { where: { id: id } })

            const newScheduleStatus = await ScheduleBusStatus.findAll({ where: { flightId: id } })

            return res.json(newScheduleStatus)
        } catch (err) {
            return next(ErrorApi.badRequest(err));
        }
    }
}

const scheduleBusStatusController = new ScheduleBusStatusController()
module.exports = scheduleBusStatusController 