'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by yiyang1990 on 2019/1/4.
 */

var interfaceConfig = function () {
  function interfaceConfig() {
    _classCallCheck(this, interfaceConfig);

    this.env_dev_url = 'http://192.168.1.141:91';
    this.env_dev_proxy_url = '/api';
    this.env_production_url = 'https://ecportal.api.7224.com';

    this.appid = 'c471cbfc4b4e473599c91266e4972ade';
    this.contentType = 'application/json';
    this.withCredentials = Boolean(process.client);
    this.crossDomain = Boolean(process.client);
    this.timeout = 100000;
    this.baseURL = process.client ? this.getCurrentConfigProxyUrl() : this.getCurrentConfigUrl();
  }

  _createClass(interfaceConfig, [{
    key: 'getCurrentConfigUrl',
    value: function getCurrentConfigUrl() {
      return process.env.NODE_ENV == "production" ? this.env_production_url : this.env_dev_url;
    }
  }, {
    key: 'getCurrentConfigProxyUrl',
    value: function getCurrentConfigProxyUrl() {
      return process.env.NODE_ENV == "production" ? this.env_production_url : this.env_dev_proxy_url;
    }
  }]);

  return interfaceConfig;
}();

;

exports.default = new interfaceConfig();