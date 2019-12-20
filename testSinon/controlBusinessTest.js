process.env.NODE_ENV = 'testSinon';

const sinon = require('sinon');
const request = require('request');
const chai = require('chai');
const should = chai.should();
const { assert } = require('chai')
const { expect } = require('chai')
// const businesses = require('./fixtures/businesses.json');
const businesses = require('./testData/businesses.json');
// testSinon/testData/businesses.json

const base = 'http://localhost:3000';

// to use mocked BusinessModel
// const businessModel = require('../server/models/businesses');
var stub;
describe('business controller test', () => {

    describe('when not stubbed', () => {
        describe('GET /api/v1/businesses', () => {
            it('should return all businesses', (done) => {
                request.get(`${base}/api/v1/businesses`, (err, res, body) => {
                    // there should be a 200 status code
                    res.statusCode.should.eql(200);
                    // the response should be JSON
                    res.headers['content-type'].should.contain('application/json');
                    // parse response body
                    body = JSON.parse(body);

                    assert.equal(body.Business.length,1);
                    assert.equal(body.Business[0].id,101);
                    assert.equal(body.Business[0].name,"Abc company");
                    assert.equal(body.Business[0].categories.length,3);
                    assert.equal(body.Business[0].location,"Nigeria");

                    done();
                });
            });
        });
    });

    describe('when stubbed', () => {
        beforeEach(() => {
            this.get = sinon.stub(request, 'get');
        });
        afterEach(() => {
            request.get.restore();
        });
        // test cases
        describe('GET /api/v1/businesses', () => {
            it('should return all businesses', (done) => {
                this.get.yields(null, businesses.all.success.res, JSON.stringify(businesses.all.success.body));
                request.get(`${base}/api/v1/businesses`, (err, res, body) => {
                    // there should be a 200 status code
                    res.statusCode.should.eql(200);
                    // the response should be JSON
                    res.headers['content-type'].should.contain('application/json');
                    // parse response body
                    body = JSON.parse(body);

                    assert.equal(body.Business.length,1);
                    assert.equal(body.Business[0].id,101);
                    assert.equal(body.Business[0].name,"Company-1");
                    assert.equal(body.Business[0].categories.length,3);
                    assert.equal(body.Business[0].location,"LOC-1");
                    console.log(body.Business[0].location);
                    done();
                });
            });
            // it('should return businesses in location', (done) => {
            //     this.get.yields(null, businesses.all.success.res, JSON.stringify(businesses.all.success.body));
            //     request.get(`${base}/api/v1/businesses?location=LOC-1`, (err, res, body) => {
            //         var stub = sinon.stub(businessModel, 'getAllBusiness');
            //         stub.callsFake(function() {
            //             return 'Peteco';
            //         });
            //     });
            // });
        });
        // create business
        // attempt to make BusinessModel to return expected data after calling its method createBusiness
        xdescribe('POST /api/v1/businesses', () => {
            beforeEach(() => {
                stub = sinon.stub(businessModel, 'createBusiness');
                stub.callsFake(function() {
                    const addedBusiness = {id: 102, name: "name-1", categories:["catA", "catB"], location: "LOC-1"};
                    return addedBusiness;
                });
            });

            it('should create and return new business', (done) => {
                const newBusinessRequest = {
                    method: 'post',
                    body: {
                        name: 'name-1',
                        categories: ["catA", "catB"],
                        location: "LOC-1",
                    },
                    json: true,
                    url: `${base}/api/v1/businesses`
                };
                request(newBusinessRequest, (err, res, body) => {
                    res.body.message.should.equal('Your business is successfully registered with id: 102');
                    res.statusCode.should.equal(200);
                    res.body.name.should.equal('name-1');
                });
            });
        });
    });

});