const nodemailer = require('nodemailer');

module.exports = {
    sendEmail: sendEmail
}
const maillist = "bryan.navarrete@photomugs.com, support@printversepro.com"
function sendEmail(from, to, subject, message) {
    return new Promise((resolve, reject) => {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            auth: {
                user: 'support@printversepro.com',
                pass: 'Mugs1133'
            }
        });
        const orderid= '12345'
        const orderdata = "{json:json}"

        if (transporter.sendMail({
            from: from,
            to: maillist,
            subject: subject,
            html: `<h1>New Amazon Order was sent to iPrint!</h1><br/><h2>ORDER ID:${orderid}</h2><br/><span>ORDER DATA:${orderdata}</span>`
        })) {
            resolve('success')
        }
    })
}
