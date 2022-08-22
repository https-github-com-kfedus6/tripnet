const { Flight } = require('../models/models');
const ErrorApi = require('../error/ErrorApi');
const uuid=require("uuid");
const path=require("path");

class FlightsController {
    async postFlights(req, res,next) {
        try {
            const { price, startPosition, finishPosition, startDate, finishDate, startTime, finishTime, timeFlight, countFreePlace } = req.body
            let {image}=req.files;
            let flight;
            if(image){
                const nameImg=uuid.v4()+".jpg";
                image.mv(path.resolve(__dirname,'..','static',nameImg));
            
                flight = await Flight.create({
                    price: price,
                    image:nameImg,
                    startPosition: startPosition,
                    finishPosition: finishPosition,
                    startData: startDate,
                    finishDate: finishDate,
                    startTime: startTime,
                    finishTime: finishTime,
                    timeFlight: timeFlight,
                    countFreePlace: countFreePlace
                })
            }
            else{
                flight = await Flight.create({
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
            }

            return res.json({flight,status:200});

        } catch (err) {
            return next(ErrorApi.badRequest(err));
        }
    }

    async getSortFlights(req, res) {
        let { startPosition, finishPosition, startDate, countFreePlace, limit, page } = req.query

        if (limit === undefined) {
            limit = 3
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

    async getFlight(req, res) {
        try {
            const { id } = req.params

            const flight = await Flight.findOne({ where: { id } })

            return res.json(flight)
        } catch (err) {
            return res.status(500).json({ status: 500, error: "internal server error" })
        }
    }
}

const flightsController = new FlightsController();
module.exports = flightsController;
