const request = require('request')

module.exports = {
    readAll: readAll,
    getLocation: getLocation
}

function readAll() {
    return new Promise(function (resolve, reject) {
        resolve("HELLO CESAR")
    })
}


function getLocation() {
    return new Promise(function (resolve, reject) {
        let url = 'https://api.addressy.com/Capture/Interactive/Utilities/v1.00/csv.ws?Key=TR15-RJ78-KY92-TY91&Text=7651166810&UtilCodeType=ALL'
        const get = request(url)
        if (get) resolve(get)

    })

}