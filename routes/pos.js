var express = require('express');
var router = express.Router();

function getClientIp(req) {
  return (
    req.headers['x-forwarded-for'] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress
  );
}

router.get('/', function (req, res, next) {
  res.send(getClientIp(req));
});

module.exports = router;
