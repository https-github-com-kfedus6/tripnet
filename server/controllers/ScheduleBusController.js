const { ScheduleBus } = require('../models/models')
const ErrorApi = require('../error/ErrorApi');

class ScheduleBusController {
    async postSchedule(req, res, next) {
        try {
            const { scheduleWith, scheduleTo, monday, tuesday, wednesday, thursday, friday, suturday, sunday } = req.body

            const schedule = await ScheduleBus.create({
                scheduleWith: scheduleWith,
                scheduleTo: scheduleTo,
                monday: monday,
                tuesday: tuesday,
                wednesday: wednesday,
                thursday: thursday,
                friday: friday,
                suturday: suturday,
                sunday: sunday
            })

            return res.json(schedule)
        } catch (err) {
            return next(ErrorApi.badRequest(err));
        }
    }

    async getSchedule(req, res, next) {
        try {
            const { id } = req.params

            const schedule = await ScheduleBus.findOne({ where: { flightId: id } })

            return res.json(schedule)
        } catch (err) {
            return next(ErrorApi.badRequest(err));
        }
    }
}

const scheduleBusController = new ScheduleBusController()
module.exports = scheduleBusController