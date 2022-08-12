const { Flight } = require('../models/models');
const ErrorApi = require('../error/ErrorApi')

class FlightsController {
    async postFlights(req, res) {
        try {
            const { price, startPosition, finishPosition, startDate, finishDate, startTime, finishTime } = req.body

            if (!price || !startPosition || !finishPosition || !startDate || !finishDate || !startTime || !finishDate) {
                return res.status(404).json({ status: 404, error: "invalid form" })
            } else {
                console.log(startDate)
                const flight = await Flight.create({
                    price: price,
                    startPosition: startPosition,
                    finishPosition: finishPosition,
                    startData: startDate,
                    finishDate: finishDate,
                    startTime: startTime,
                    finishTime: finishTime
                })

                return res.json(flight)
            }

        } catch (err) {
            return res.status(500).json({ status: 500, error: "internal server error" })
        }
    }

    async getSortFlights(req, res) {
        let { startPosition, finishPosition, startDate, limit, page } = req.query

        if (limit === undefined) {
            limit = 6
        }

        if (page === undefined) {
            page = 1
        }

        let offset = page * limit - limit
        let flights

        flights = await Flight.findAndCountAll({ limit: Number(limit), offset: Number(offset) })

        return res.json(flights)

    }
}

const flightsController = new FlightsController();
module.exports = flightsController;
