const { Flight } = require('../models/models');
const ErrorApi = require('../error/ErrorApi');
const uuid = require("uuid");
const path = require("path");

class FlightsController {
    async postFlights(req, res, next) {
        try {
            const { price, startPositionUA, startPositionRU, finishPositionUA, finishPositionRU,
                startDate, finishDate, startTime, finishTime, timeFlight, countFreePlace,
                descriptionUA,descriptionRU, nameUA,nameRU } = req.body
            const startPosition=[startPositionUA,startPositionRU].join("//");
            const finishPosition=[finishPositionUA,finishPositionRU].join("//");
            const description=[descriptionUA,descriptionRU].join("//");
            const name=[nameUA,nameRU].join("//");
            let { image } = req.files;
            let flight;
            if (image) {
                const nameImg = uuid.v4() + ".jpg";
                image.mv(path.resolve(__dirname, '..', 'static', nameImg));

                flight = await Flight.create({
                    price: price,
                    image: nameImg,
                    startPosition: startPosition,
                    finishPosition: finishPosition,
                    startData: startDate,
                    finishDate: finishDate,
                    startTime: startTime,
                    finishTime: finishTime,
                    timeFlight: timeFlight,
                    countFreePlace: countFreePlace,
                    description: description,
                    name:name
                })
            }
            else {
                flight = await Flight.create({
                    price: price,
                    startPosition: startPosition,
                    finishPosition: finishPosition,
                    startData: startDate,
                    finishDate: finishDate,
                    startTime: startTime,
                    finishTime: finishTime,
                    timeFlight: timeFlight,
                    countFreePlace: countFreePlace,
                    description: description,
                    name:name
                })
            }

            return res.json({ res:flight, status: 200 });

        } catch (err) {
            return next(ErrorApi.badRequest(err));
        }
    }

    async getSortFlights(req, res, next) {
        try{
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
                    arrFlights.count = flight.count
                }

            } else if (startPosition && !finishPosition && !startDate) {

                const flight = await Flight.findAndCountAll({ where: { startPosition: startPosition } }, { limit: Number(limit), offset: Number(offset) })

                if (flight !== null) {
                    for (let item of flight.rows) {
                        if (item.countFreePlace >= countFreePlace) {
                            arrFlights.rows.push(item)
                        }
                    }
                    arrFlights.count = flight.count
                }

            } else if (startPosition && finishPosition && !startDate) {

                const flight = await Flight.findAndCountAll({ where: { startPosition: startPosition, finishPosition: finishPosition } }, { limit: Number(limit), offset: Number(offset) })
                if (flight !== null) {
                    for (let item of flight.rows) {
                        if (item.countFreePlace >= countFreePlace) {
                            arrFlights.rows.push(item)
                        }
                    }
                    arrFlights.count = flight.count
                }

            } else if (startPosition && finishPosition && startDate) {

                const flight = await Flight.findAndCountAll({ where: { startPosition: startPosition, finishPosition: finishPosition, startData: startDate } }, { limit: Number(limit), offset: Number(offset) })
                if (flight !== null) {
                    for (let item of flight.rows) {
                        if (item.countFreePlace >= countFreePlace) {
                            arrFlights.rows.push(item)
                        }
                    }
                    arrFlights.count = flight.count
                }

            } else if (startDate && !startPosition && !finishPosition) {

                const flight = await Flight.findAndCountAll({ where: { startData: startDate } }, { limit: Number(limit), offset: Number(offset) })
                if (flight !== null) {
                    for (let item of flight.rows) {
                        if (item.countFreePlace >= countFreePlace) {
                            arrFlights.rows.push(item)
                        }
                    }
                    arrFlights.count = flight.count
                }

            } else if (startDate && startPosition && !finishPosition) {

                const flight = await Flight.findAndCountAll({ where: { startData: startDate, startPosition: startPosition } }, { limit: Number(limit), offset: Number(offset) })
                if (flight !== null) {
                    for (let item of flight.rows) {
                        if (item.countFreePlace >= countFreePlace) {
                            arrFlights.rows.push(item)
                        }
                    }
                    arrFlights.count = flight.count
                }
            }
            for(let i=0;i<arrFlights.rows.length;i++){
                arrFlights.rows[i].startPosition=arrFlights.rows[i].startPosition.split("//");
                arrFlights.rows[i].finishPosition=arrFlights.rows[i].finishPosition.split("//");
                arrFlights.rows[i].description=arrFlights.rows[i].description.split("//")
            }
            return res.json({status:200,res:arrFlights})
        }catch(err){
            return next(ErrorApi.badRequest(err));
        }
    }

    async getFlight(req, res) {
        try {
            const { id } = req.params
            let flight = await Flight.findOne({ where: { id } })
            flight.startPosition=flight.startPosition.split("//");
            flight.finishPosition=flight.finishPosition.split("//");
            flight.description=flight.description.split("//");
            return res.json({status:200,res:flight});
        } catch (err) {
            return next(ErrorApi.badRequest(err));
        }
    }

    async deleteFlight(req, res) {
        try {
            const { id } = req.params

            const flight = await Flight.findOne({ where: { id } })

            await Flight.destroy({ where: { id } })

            return res.json({status:200,res:flight})
        } catch (err) {
            return next(ErrorApi.badRequest(err));
        }
    }

    async updateFlight(req, res) {
        try {
            let { page, limit, id, price, startPosition, finishPosition, startDate, finishDate, startTime, finishTime, timeFlight, countFreePlace } = req.body

            if (startPosition && finishPosition && !startDate && !finishDate && !startTime && !finishTime && !timeFlight && !countFreePlace && !price) {

                await Flight.update({
                    startPosition: startPosition,
                    finishPosition: finishPosition
                }, { where: { id: id } })

            } else if (!startPosition && !finishPosition && startDate && finishDate && !startTime && !finishTime && !timeFlight && !countFreePlace && !price) {

                await Flight.update({
                    startData: startDate,
                    finishDate: finishDate
                }, { where: { id: id } })

            } else if (!startPosition && !finishPosition && !startDate && !finishDate && startTime && finishTime && timeFlight && !countFreePlace && !price) {

                await Flight.update({
                    startTime: startTime,
                    finishTime: finishTime,
                    timeFlight: timeFlight
                }, { where: { id: id } })

            } else if (!startPosition && !finishPosition && !startDate && !finishDate && !startTime && !finishTime && !timeFlight && countFreePlace && !price) {

                await Flight.update({
                    countFreePlace: countFreePlace
                }, { where: { id: id } })

            } else if (!startPosition && !finishPosition && !startDate && !finishDate && !startTime && !finishTime && !timeFlight && !countFreePlace && price) {

                await Flight.update({
                    price: price
                }, { where: { id: id } })

            } else if (startPosition && finishPosition && startDate && finishDate && !startTime && !finishTime && !timeFlight && !countFreePlace && !price) {

                await Flight.update({
                    startPosition: startPosition,
                    finishPosition: finishPosition,
                    startData: startDate,
                    finishDate: finishDate
                }, { where: { id: id } })

            } else if (startPosition && finishPosition && startDate && finishDate && startTime && finishTime && timeFlight && !countFreePlace && !price) {

                await Flight.update({
                    startPosition: startPosition,
                    finishPosition: finishPosition,
                    startData: startDate,
                    finishDate: finishDate,
                    startTime: startTime,
                    finishTime: finishTime,
                    timeFlight: timeFlight
                }, { where: { id: id } })

            } else if (startPosition && finishPosition && startDate && finishDate && startTime && finishTime && timeFlight && countFreePlace && !price) {

                await Flight.update({
                    startPosition: startPosition,
                    finishPosition: finishPosition,
                    startData: startDate,
                    finishDate: finishDate,
                    startTime: startTime,
                    finishTime: finishTime,
                    timeFlight: timeFlight,
                    countFreePlace: countFreePlace
                }, { where: { id: id } })

            } else if (startPosition && finishPosition && startDate && finishDate && startTime && finishTime && timeFlight && countFreePlace && price) {

                await Flight.update({
                    startPosition: startPosition,
                    finishPosition: finishPosition,
                    startData: startDate,
                    finishDate: finishDate,
                    startTime: startTime,
                    finishTime: finishTime,
                    timeFlight: timeFlight,
                    countFreePlace: countFreePlace,
                    price: price
                }, { where: { id: id } })

            }

            if (limit === undefined) {
                limit = 3
            }

            if (page === undefined) {
                page = 1
            }

            let offset = page * limit - limit

            const flight = await Flight.findAndCountAll({ limit: Number(limit), offset: Number(offset) })

            return res.json({status:200,res:flight})

        } catch (err) {
            return next(ErrorApi.badRequest(err));
        }
    }
}

const flightsController = new FlightsController();
module.exports = flightsController;
