const ApiError = require('./ApiError')

const apiErrorHandler = (error, resp) => {
    if (error instanceof ApiError) {
        resp.status(error.code).json({
            code: error.code,
            message: error.message,
        });
        return;
    }

    resp.status(500).json({
        code: 500,
        message: 'something went wrong.',
    });
}

module.exports = apiErrorHandler;