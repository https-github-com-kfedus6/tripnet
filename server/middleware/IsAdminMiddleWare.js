const jwt = require("jsonwebtoken");
const ErrorApi = require("../error/ErrorApi");

module.exports = (admin, req, resp, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        if (!token) {
            return resp.status(200).json({ status: 400, message: "not authorization" });
        }
        decoded = jwt.verify(token, process.env.SECRET_KEY)
        if (decoded.admin !== admin) {
            return resp.status(200).json({ status: 403, message: "you are not an admin" });
        }
        req.user = decoded
        next()
    } catch (err) {
        return next(ErrorApi.noAuth(err.message));
    }
}