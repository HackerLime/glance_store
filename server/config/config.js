let EasyYandexS3 = require('easy-yandex-s3').default;
module.exports = new EasyYandexS3({
  auth: {
    accessKeyId: process.env.BUCKET_PUBLIC_KEY,
    secretAccessKey: process.env.BUCKET_SECRET_KEY,
  },
  Bucket: process.env.BUCKET_NAME,
  debug: true,
});