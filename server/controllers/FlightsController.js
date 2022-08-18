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
        let { startPosition, finishPosition, startDate, countFreePlace, limit, page } = req.query

        if (limit === undefined) {
            limit = 10
        }

        if (page === undefined) {
            page = 1
        }

        let offset = page * limit - limit
        let arrFlights = { count: 0, rows: [] }

        if (!startPosition && !finishPosition && !startDate) {


            const flight = await Flight.findAndCountAll({ limit: Number(limit), offset: Number(offset) })
            if (flight !== null) {
                for (let item of flight.rows) {
                    if (item.countFreePlace >= countFreePlace) {
                        arrFlights.rows.push(item)
                    }
                }
                arrFlights.count = arrFlights.rows.length
            }

        } else if (startPosition && !finishPosition && !startDate) {

            const flight = await Flight.findAndCountAll({ where: { startPosition: startPosition } }, { limit: Number(limit), offset: Number(offset) })
            if (flight !== null) {
                for (let item of flight.rows) {
                    if (item.countFreePlace >= countFreePlace) {
                        arrFlights.rows.push(item)
                    }
                }
                arrFlights.count = arrFlights.rows.length
            }

        } else if (startPosition && finishPosition && !startDate) {

            const flight = await Flight.findAndCountAll({ where: { startPosition: startPosition, finishPosition: finishPosition } }, { limit: Number(limit), offset: Number(offset) })
            if (flight !== null) {
                for (let item of flight.rows) {
                    if (item.countFreePlace >= countFreePlace) {
                        arrFlights.rows.push(item)
                    }
                }
                arrFlights.count = arrFlights.rows.length
            }

        } else if (startPosition && finishPosition && startDate) {

            const flight = await Flight.findAndCountAll({ where: { startPosition: startPosition, finishPosition: finishPosition, startData: startDate } }, { limit: Number(limit), offset: Number(offset) })
            if (flight !== null) {
                for (let item of flight.rows) {
                    if (item.countFreePlace >= countFreePlace) {
                        arrFlights.rows.push(item)
                    }
                }
                arrFlights.count = arrFlights.rows.length
            }

        } else if (startDate && !startPosition && !finishPosition) {

            const flight = await Flight.findAndCountAll({ where: { startData: startDate } }, { limit: Number(limit), offset: Number(offset) })
            if (flight !== null) {
                for (let item of flight.rows) {
                    if (item.countFreePlace >= countFreePlace) {
                        arrFlights.rows.push(item)
                    }
                }
                arrFlights.count = arrFlights.rows.length
            }

        } else if (startDate && startPosition && !finishPosition) {

            const flight = await Flight.findAndCountAll({ where: { startData: startDate, startPosition: startPosition } }, { limit: Number(limit), offset: Number(offset) })
            if (flight !== null) {
                for (let item of flight.rows) {
                    if (item.countFreePlace >= countFreePlace) {
                        arrFlights.rows.push(item)
                    }
                }
                arrFlights.count = arrFlights.rows.length
            }
        }

        return res.json(arrFlights)
    }
}

const flightsController = new FlightsController();
module.exports = flightsController;
