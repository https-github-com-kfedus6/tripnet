
class ErrorApi extends Error {
    constructor(code, message) {
        super()
        this.code = code
        this.message = message
    }

    static badRequest(message) {
        console.log(message)
        return new ErrorApi(200, { status: 400 });
    }

    static internal(message) {
        console.log(message)
        return new ErrorApi(200, { status: 500 });
    }

    static noAuth(message) {
        console.log(message)
        return new ErrorApi(200, { status: 401 });
    }

    static forbidden(message) {
        console.log(message)
        return new ErrorApi(200, { status: 403 })
    }
}

module.exports = ErrorApi