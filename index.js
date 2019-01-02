const http = require('http');
const imageSteam = require('image-steam');

const isHandler = new imageSteam.http.Connect({
  storage: {
    defaults: {
      driverPath: "image-steam-s3",
      endpoint: process.env.AWS_S3_ENDPOINT || "localhost",
      secure: false,
      accessKey: process.env.AWS_S3_ACCESS_KEY,
      secretKey: process.env.AWS_S3_SECRET_KEY,
      bucket: process.env.AWS_S3_BUCKET,
      port: process.env.AWS_S3_ENDPOINT_PORT,
    }
  }
}).getHandler();

const server = http.createServer(isHandler);

server.listen(13337);
