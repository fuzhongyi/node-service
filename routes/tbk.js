var express = require('express');
var router = express.Router();
var ApiClient = require('../lib/index.js').ApiClient;
var client = new ApiClient({
  appkey: '28329037',
  appsecret: 'ebadeb2dd2008ad86e86f051e087a237',
  url: 'http://gw.api.taobao.com/router/rest',
});

const PID = 'mm_832830012_1255300121_109953450206';
const [member_id, site_id, adzone_id] = PID.split('_').slice(1);
// material_id: '13256',

/* GET users listing. */
router.get('/', function(req, res, next) {
  const { method, ...params } = req.query;
  client.execute(
    method,
    {
      adzone_id,
      site_id,
      ...params,
    },
    function(error, response) {
      if (!error) res.send(response);
      else res.send(error);
    },
  );
});

module.exports = router;
