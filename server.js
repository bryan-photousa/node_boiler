const express = require("express");
const app = express();
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const mailer = require('./email')
const logger = require('./utilities/logger');
const _file = require('./services/fileService');
const fs = require("fs")




// initialize dotenv
dotenv.config();

// set our port
const port = process.env.PORT || 1931

// get all data/stuff of the body (POST) parameters
// parse application/jsonock
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);


if (app.listen(port, "127.0.0.1")) {
    console.log("IYP-AMAZON IS RUNNING on port::::: " + JSON.stringify(port))
}






/*
TESTING UPLOADING TO AMAZON S3BUCKET
*/

/* let filename = 'test_image.png'
let type = 'png'

fs.readFile(filename, (err, data) => {
    if (err) throw err
    _file.uploadFile(filename, data, type).then(response => {
        console.log('response.location::: ' + JSON.stringify(response))

    })
})
 */

// mailer.sendEmail("no-repy@photomugs.com", "bryan.navarrete@photomugs.com", "ATTN: New Amazon Order!").then((response) => {
//     if (response == "success") {
//         logger.error('EMAIL FAILED')
//     }
// })
