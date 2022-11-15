const { FlightOrder, Flight } = require("../models/models");
const ErrorApi = require("../error/ErrorApi");

class FlightOrdersController {
    static Add = async (req, resp, next) => {
        try {
            const { flightId, surename, name, email, countPersons, phone, date, countPersonsBack, dateBack, userId } = req.body;
            let user = req.user;
            let res;
            if (userId == 0)
                res = await FlightOrder.create({ surename, name, email, countPersons, phone, date, countPersonsBack, dateBack, flightId });
            else res = await FlightOrder.create({ surename, name, email, countPersons, phone, date, countPersonsBack, dateBack, flightId, userId });
            return resp.json({ status: 200, res });
        } catch (err) {
            return next(ErrorApi.badRequest(err));
        }
    }
    static getOrders = async (req, resp, next) => {
        try {
            let { page, limit } = req.query
            if (page === undefined) {
                page = 1
            }
            if (limit === undefined) {
                limit = 2
            }

            const offset = page * limit - limit

            const res = await FlightOrder.findAndCountAll({ limit: Number(limit), offset: Number(offset) });

            return resp.json({ status: 200, res });
        } catch (err) {
            return next(ErrorApi.badRequest(err));
        }
    }
    static SetStatus = async (req, resp, next) => {
        try {
            let { status, id, page, limit, countTicket } = req.body;
            page = page | 1;
            limit = limit | 5;
            await FlightOrder.update({ status: status, countTicket }, { where: { id } });
            const response = await FlightOrder.findOne({ where: { id } });
            if (status) {
                const flight = await Flight.findOne({ where: { id: response.flightId } });
                const countFreePlace = flight.countFreePlace - countTicket;
                await Flight.update({ countFreePlace }, { where: { id: flight.id } });
            } else {
                const flight = await Flight.findOne({ where: { id: response.flightId } });
                const countFreePlace = parseInt(flight.countFreePlace) + parseInt(countTicket);
                await Flight.update({ countFreePlace }, { where: { id: flight.id } });
            }
            const offset = page * limit - limit

            const res = await FlightOrder.findAndCountAll({ limit: Number(limit), offset: Number(offset) });

            return resp.json({ status: 200, res });
        } catch (err) {
            return next(ErrorApi.badRequest(err));
        }
    }
    static deleteOrder = async (req, resp, next) => {
        try {
            const { id } = req.params
            await FlightOrder.destroy({ where: { id: id } })
            const res = await FlightOrder.findAndCountAll({ limit: Number(5), offset: Number(0) });
            return resp.json({ status: 200, res });
        } catch (err) {
            return next(ErrorApi.badRequest(err));
        }
    }

    static getUserFlight = async (req, resp, next) => {
        try {
            const userId = req.user.id;
            const res = await FlightOrder.findAll({ where: { userId } });
            return resp.json({ status: 200, res })
        } catch (err) {
            return next(ErrorApi.badRequest(err));
        }
    }

    static getUserOrders = async (req, res, next) => {
        try {
            const userId = req.user.id
            const userOrders = await FlightOrder.findAll({ where: { userId } })
            console.log('true', userOrders)
            //return res.json({ status: 200 })
        } catch (err) {
            return next(ErrorApi.badRequest(err));
        }
    }
}

module.exports = FlightOrdersController