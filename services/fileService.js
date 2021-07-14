const aws = require("aws-sdk");

module.exports = {
    signUrl: signUrl,
    uploadFile: uploadFile
};

const s3 = new aws.S3();

aws.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: "us-west-1"
});

function signUrl(filename, filetype, now) {
    return new Promise((resolve, reject) => {
        const params = {
            Bucket: process.env.BUCKET,
            Key: `${filename}`,
            Expires: 60,
            ContentType: filetype,
            ACL: "public-read"
        };

        s3.getSignedUrl("putObject", params, function (err, url) {
            if (err) {
                reject(err);
                console.log(err);
            } else {
                resolve(url);
            }
        });
    });
}



function uploadFile(fileName, body, type) {
    return new Promise((resolve, reject) => {
        const params = {
            Body: body,
            Bucket: process.env.BUCKET,
            Key: `${fileName}`,
            ACL: "public-read",
            ContentType: 'image/png'
        };

        s3.upload(params, function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}
