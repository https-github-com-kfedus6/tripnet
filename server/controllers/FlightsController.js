const { Flight, ParamsFlight, ScheduleBus, ScheduleBusStatus } = require('../models/models');
const ErrorApi = require('../error/ErrorApi');
const uuid = require("uuid");
const path = require("path");
const { Op } = require('sequelize');

class FlightsController {
    async postFlights(req, res, next) {
        try {
            const { price, startPositionUA, startPositionRU, finishPositionUA, finishPositionRU,
                startDate, finishDate, startTime, finishTime, timeFlightUA, timeFlightRU, countFreePlace,
                descriptionUA, descriptionRU, isWifi, isWC, is220V, isMultimedia,
                isAirConditioning, map } = req.body;
            const timeFlight = [timeFlightUA, timeFlightRU].join("//");
            const startPosition = [startPositionUA, startPositionRU].join("//");
            const finishPosition = [finishPositionUA, finishPositionRU].join("//");
            const description = [descriptionUA, descriptionRU].join("/*/");
            let image=req.files;
            let flight;
            if (image!=null) {
                console.log(1)
                const nameImg = uuid.v4() + ".jpg";
                image.mv(path.resolve(__dirname, '..', 'static', nameImg));

                flight = await Flight.create({
                    price: price,
                    image: nameImg,
                    startPosition: startPosition,
                    finishPosition: finishPosition,
                    startDate: startDate,
                    finishDate: finishDate,
                    startTime: startTime,
                    finishTime: finishTime,
                    timeFlight: timeFlight,
                    countFreePlace: countFreePlace,
                    description: description,
                    map: map
                })
            }
            else {
                console.log(2);
                flight = await Flight.create({
                    price: price,
                    startPosition: startPosition,
                    finishPosition: finishPosition,
                    startDate: startDate,
                    finishDate: finishDate,
                    startTime: startTime,
                    finishTime: finishTime,
                    timeFlight: timeFlight,
                    countFreePlace: countFreePlace,
                    description: description,
                    map: map
                })
            }
            const params = await ParamsFlight.create({
                isWifi: isWifi, isWC: isWC, is220V: is220V,
                isMultimedia: isMultimedia, isAirConditioning: isAirConditioning, flightId: flight.id
            });
            const scheduleBus = await ScheduleBus.create({
                scheduleWith: "12.08.2022", scheduleTo: "25.08.2022", monday: "Пн",
                tuesday: "Вт", wednesday: "Ср", thursday: "Чт", friday: "Пт", suturday: "Cб", sunday: "Нд//Вс", flightId: flight.id
            });

            for (let i = 0; i < 7; i++) {
                const scheduleBusStatus = await ScheduleBusStatus.create({ scheduleBusId: scheduleBus.id, flightId: flight.id })
            }

            return res.json({ res: flight, status: 200 });

        } catch (err) {
            return next(ErrorApi.badRequest(err));
        }
    }

    async getSortFlights(req, res, next) {
        try {
            let { startPosition, finishPosition, startDate, countFreePlace, limit, page } = req.query

            if (limit === undefined) {
                limit = 3
            }

            if (page === undefined) {
                page = 1
            }

            let offset = page * limit - limit
            let arrFlights={};// = { count: 0, rows: [] }
            if (!startPosition && !finishPosition && !startDate) {

                arrFlights = await Flight.findAndCountAll({ limit: Number(limit), offset: Number(offset),
                    where:{countFreePlace:{[Op.gte]:countFreePlace}} })

            } else if (startPosition && !finishPosition && !startDate) {
                const regStartPosition = `(^${startPosition})|(\/\/${startPosition}$)`;
                arrFlights = await Flight.findAndCountAll({ where: { startPosition: { [Op.regexp]: regStartPosition, countFreePlace: {[Op.gte]:countFreePlace}}}, limit: Number(limit), offset: Number(offset),})


            } else if (startPosition && finishPosition && !startDate) {
                const regStartPosition = `(^${startPosition})|(\/\/${startPosition}$)`;
                const regFinishPosition = `(^${finishPosition})|(\/\/${finishPosition}$)`;
                arrFlights = await Flight.findAndCountAll({ where: { startPosition: { [Op.regexp]: regStartPosition }, finishPosition: { [Op.regexp]: regFinishPosition }, countFreePlace: {[Op.gte]:countFreePlace} }, limit: Number(limit), offset: Number(offset) })
               

            } else if (startPosition && finishPosition && startDate) {
                const regStartPosition=`(^${startPosition})|(\/\/${startPosition}$)`;
                const regFinishPosition=`(^${finishPosition})|(\/\/${finishPosition}$)`;
                arrFlights = await Flight.findAndCountAll({ where: { startPosition: {[Op.regexp]:regStartPosition}, finishPosition: {[Op.regexp]:regFinishPosition},
                     startDate: startDate,countFreePlace: {[Op.gte]:countFreePlace } },
                       limit: Number(limit), offset: Number(offset) })
               

            } else if (startDate && !startPosition && !finishPosition) {
                
                arrFlights = await Flight.findAndCountAll({ where: { startDate: startDate,countFreePlace: {[Op.gte]:countFreePlace}},  limit: Number(limit), offset: Number(offset) })
               
                

            } else if (startDate && startPosition && !finishPosition) {
                const regStartPosition=`(^${startPosition})|(\/\/${startPosition}$)`;
                const regFinishPosition=`(^${finishPosition})|(\/\/${finishPosition}$)`;
                arrFlights = await Flight.findAndCountAll({ where: { startDate: startDate,
                     startPosition: {[Op.regexp]:regStartPosition},
                     finishPosition: {[Op.regexp]:regFinishPosition},
                     countFreePlace: {[Op.gte]:countFreePlace}},
                     limit: Number(limit), offset: Number(offset) })
            }
            for (let i = 0; i < arrFlights.rows.length; i++) {
                arrFlights.rows[i].startPosition = arrFlights.rows[i].startPosition.split("//");
                arrFlights.rows[i].finishPosition = arrFlights.rows[i].finishPosition.split("//");
                arrFlights.rows[i].description = arrFlights.rows[i].description.split("//")
            }
            return res.json({ status: 200, res: arrFlights })
        } catch (err) {
            return next(ErrorApi.badRequest(err));
        }
    }

    async getFlight(req, res, next) {
        try {
            const { id } = req.params
            let flight = await Flight.findOne({ where: { id: parseInt(id) }, include: [{ as: 'params', model: ParamsFlight }, { as: 'schefule', model: ScheduleBus }] });
            flight.startPosition = flight.startPosition.split("//");
            flight.finishPosition = flight.finishPosition.split("//");
            flight.description = flight.description.split("/*/");
            flight.schefule[0].sunday = flight.schefule[0].sunday.split("//");
            let status = await ScheduleBusStatus.findAll({ where: { scheduleBusId: flight.schefule[0].id } });
            return res.json({ status: 200, res: { flight, status } });
        } catch (err) {
            return next(ErrorApi.badRequest(err));
        }
    }

    async deleteFlight(req, res, next) {
        try {
            const { id } = req.params

            const flight = await Flight.findOne({ where: { id } })

            await ParamsFlight.destroy({ where: { flightId: id } })

            await ScheduleBus.destroy({ where: { flightId: id } })

            await ScheduleBusStatus.destroy({ where: { flightId: id } })

            await Flight.destroy({ where: { id } })

            return res.json({ status: 200, res: flight })
        } catch (err) {
            return next(ErrorApi.badRequest(err));
        }
    }

    async updateFlight(req, res, next) {
        try {
            let { id, price, startPosition, finishPosition, startDate, finishDate, startTime, finishTime, timeFlight, countFreePlace } = req.body
            await Flight.update({
                startPosition: startPosition,
                finishPosition: finishPosition,
                startDate: startDate,
                finishDate: finishDate,
                startTime: startTime,
                finishTime: finishTime,
                timeFlight: timeFlight,
                countFreePlace: countFreePlace,
                price: price
            }, { where: { id: id } })
            return res.json({ status: 200})

        } catch (err) {
            return next(ErrorApi.badRequest(err));
        }
    }
}

const flightsController = new FlightsController();
module.exports = flightsController;
