/**
 * Created by yiyang1990 on 2019/1/4.
 */

class interfaceConfig {
  constructor(){
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

  getCurrentConfigUrl(){
   return process.env.NODE_ENV == "production" ? this.env_production_url : this.env_dev_url;
  }

  getCurrentConfigProxyUrl(){
    return process.env.NODE_ENV == "production" ? this.env_production_url : this.env_dev_proxy_url;
  }

};

export default new interfaceConfig();
