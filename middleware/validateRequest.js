const apiError = require('../error/ApiError')

const validateRequest = (req, res, next) => {

    const inputAttacks = /[-!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#]/;

    const urlParam = new URLSearchParams(req.query);

    if (!urlParam.has('search')) {
        next(apiError.badRequest('search param is required.'));
    } else if (urlParam.get('search') === undefined || urlParam.get('search') === '') {
        next(apiError.badRequest('search value can not be empty.'));
    } else {
        const search = urlParam.get('search');
        if (search.match(inputAttacks)) {
            console.log(`A possible injection has been with search value ${search})`)
            next(apiError.serverError('Request Denied.'));
        } else {
            next();
        }
    }
}

module.exports = validateRequest