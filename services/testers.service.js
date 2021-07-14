module.exports = {
    readAll: readAll
}

function readAll() {
    return new Promise(function (resolve, reject) {
        resolve("HELLO CESAR")
    })
}