const responses = require('../models/responses');
const testersService = require('../services/testers.service');
const apiPrefix = '/api/users';

module.exports = {
    readAll: readAll,
    getLocation:getLocation
 

}

function readAll(req, res) {
    testersService.readAll()
        .then(users => {
            const responseModel = new responses.ItemsResponse()
            responseModel.items = users
            res.json(responseModel)
        })
        .catch(err => {
            console.log(err)
            res.status(500).send(new responses.ErrorResponse(err))
        });
}

function getLocation(req, res) {
    testersService.getLocation()
        .then(location => {
            const responseModel = new responses.ItemsResponse()
            responseModel.items = location
            res.json(responseModel)
        })
        .catch(err => {
            console.log(err)
            res.status(500).send(new responses.ErrorResponse(err))
        });
}