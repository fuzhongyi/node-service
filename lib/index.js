'use strict';

var apiClient = require('./tbk/api/topClient.js').TopClient;
var dingtalkClient = require('./tbk/api/dingtalkClient.js').DingTalkClient;
var tmcClient = require('./tbk/tmc/tmcClient.js').TmcClient;

module.exports = {
  ApiClient: apiClient,
  TmcClient: tmcClient,
  DingTalkClient: dingtalkClient,
};
