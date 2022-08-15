const { Flight } = require('../models/models');
const ErrorApi = require('../error/ErrorApi')

class FlightsController {
    async postFlights(req, res) {
        try {
            const { price, startPosition, finishPosition, startDate, finishDate, startTime, finishTime, timeFlight, countFreePlace } = req.body

            const flight = await Flight.create({
                price: price,
                startPosition: startPosition,
                finishPosition: finishPosition,
                startData: startDate,
                finishDate: finishDate,
                startTime: startTime,
                finishTime: finishTime,
                timeFlight: timeFlight,
                countFreePlace: countFreePlace
            })

            return res.json(flight)

        } catch (err) {
            return res.status(500).json({ status: 500, error: "internal server error" })
        }
    }

    async getSortFlights(req, res) {
        let { startPosition, finishPosition, startDate, limit, page } = req.query

        if (limit === undefined) {
            limit = 3
        }

        if (page === undefined) {
            page = 1
        }

        let offset = page * limit - limit
        let flights

        if (!startPosition && !finishPosition && !startDate) {
            flights = await Flight.findAndCountAll({ limit: Number(limit), offset: Number(offset) })
        } else if (startPosition && !finishPosition && !startDate) {
            flights = await Flight.findAndCountAll({ where: { startPosition: startPosition } }, { limit: Number(limit), offset: Number(offset) })
        } else if (startPosition && finishPosition && !startDate) {
            flights = await Flight.findAndCountAll({ where: { startPosition: startPosition, finishPosition: finishPosition } }, { limit: Number(limit), offset: Number(offset) })
        } else if (startPosition && finishPosition && startDate) {
            flights = await Flight.findAndCountAll({ where: { startPosition: startPosition, finishPosition: finishPosition, startData: startDate } }, { limit: Number(limit), offset: Number(offset) })
        } else if (startDate && !startPosition && !finishPosition) {
            flights = await Flight.findAndCountAll({ where: { startData: startDate } }, { limit: Number(limit), offset: Number(offset) })
        }

        return res.json(flights)
    }
}

const flightsController = new FlightsController();
module.exports = flightsController;
