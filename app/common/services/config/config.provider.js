import angular from 'angular';
import ConfigService from './config.service';

let defaultNamespace = 'default';

export default class ConfigProvider {
  constructor() {
    this.configs = {};
    this.configs[defaultNamespace] = {};
  }

  register(configs, namespace = defaultNamespace) {
    if (angular.isUndefined(this.configs[namespace])) {
      this.configs[namespace] = {};
    }
    this.configs[namespace] = angular.merge(this.configs[namespace], configs);
  }

  $get() {
    return new ConfigService(this.configs, defaultNamespace);
  }
}
