const { FlightComfort } = require("../models/models")
const uuid = require('uuid')
const path = require('path')

class FlightComfortController {
    async postFlightComfort(req, res, next) {
        try {
            const { title } = req.body
            const { image } = req.files
            const nameImg = uuid.v4() + ".jpg";
            image.mv(path.resolve(__dirname, '..', 'static', nameImg));

            const flightComfort = await FlightComfort.create({ title: title, image: nameImg })

            return res.json(flightComfort)

        } catch (err) {
            return next(ErrorApi.badRequest(err));
        }
    }

    async getFlightComfort(req, res, next) {
        try {
            const flightComfort = await FlightComfort.findAll()
            return res.json(flightComfort)
        } catch (err) {
            return next(ErrorApi.badRequest(err));
        }
    }
}

const flightComfortController = new FlightComfortController()
module.exports = flightComfortController