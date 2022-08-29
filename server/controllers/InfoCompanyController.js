const ErrorApi = require("../error/ErrorApi");
const { InfoCompany } = require("../models/models");

class InfoCompanyController {
    static Get = async (req, resp, next) => {
        try {
            const { id, name, email, telephone, openingHours, address } = await InfoCompany.findOne({ where: { id: 1 } });
            const infoCompany = { id, name, email, telephone, openingHours, address:address.split("//") };
            return resp.json({ status: 200, infoCompany });
        } catch (err) {
            return next(ErrorApi.badRequest(err));
        }
    }
}

module.exports = InfoCompanyController;