const aws = require("aws-sdk");

let s3 = new aws.S3({
  accessKeyId: process.env.mongodb
});

module.exports = s3;
