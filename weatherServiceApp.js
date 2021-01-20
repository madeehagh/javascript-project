const express = require('express')
const {check, validationResult} = require('express-validator/check')

const weatherAPI = require('./weatherService')

const app = express();

app.listen(7070, () => {
    console.log('server is running on port 7070.')
});

app.get('', (req, res) => {
    res.send('Welcome to Weather Service!')
});

app.get('/weather', [
    check('search').isLength({
        min: 2
    }).withMessage('Invalid Input.')
] ,async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.send({status: 422,
            errors: errors.array({
                onlyFirstError: true
            })});
    } else {
        const response = await weatherAPI(req.query.search);
        res.send(response);
    }
})