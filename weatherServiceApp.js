const express = require('express')

const validateRequest = require('./middleware/validateRequest')
const apiErrorHandler = require('./error/apiErrorHandler')
const weatherAPI = require('./weatherService')
const apiError = require('./error/ApiError')

const app = express();

app.listen(7070, () => {
    console.log('server is running on port 7070.')
});

app.use(validateRequest);

app.get('', (req, res, next) => {
    res.send('Welcome to Weather Service!')
    next();
});

app.get('/weather',
    async (req, res, next) => {

        const response = await weatherAPI(req.query.search);
        if (!response.code == 200) {
            next(apiError.serverError(response.message));
        } else {
            res.send(response);
            next();
        }
})

app.use(apiErrorHandler)