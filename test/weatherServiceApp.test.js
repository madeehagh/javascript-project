const chai  = require('chai')
const chaiHttp = require('chai-http');

const server = require('../weatherServiceApp')

//Assertion style
chai.should();

chai.use(chaiHttp);


const dummyResponse = '{     \n' +
    'code: 200,\n' +
    'response: {   \n' +
    '    currentTemperature: 24,   \n' +
    '    feelsLike: 27,  \n' +
    '    place: Amsterdam, North Holland, Netherlands       \n' +
    '    }        \n' +
    '}\n'

describe('weather service test', () => {

    /**
     * Test get weather service
     */
    describe('GET /weather', async () => {
        /**
         * Test correct
         */
        it('API returns valid response', (done) => {
            chai.request(server).get('/weather?search=Amsterdam')
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.have.property('data').that.includes.all.keys(['currentTemperature', 'feelsLike', 'place']);
                    done();
                });
        });

        /**
         * Test if search param is not given
         */
        it('API returns Bad Request Error', (done) => {
            chai.request(server).get('/weather')
                .end((err, response) => {
                    response.should.have.status(400);
                    response.body.should.be.equals('search param is required.');
                    done();
                });
        });

        /**
         * Test if search param is empty
         */
        it('API returns Bad Request Error', (done) => {
            chai.request(server).get('/weather?search=')
                .end((err, response) => {
                    response.should.have.status(400);
                    response.body.should.be.equals('search value can not be empty.');
                    done();
                });
        });

    });

});