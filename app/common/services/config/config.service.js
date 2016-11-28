import angular from 'angular';

export default class ConfigService {

  constructor(configs, defaultNamespace) {
    this.configs = configs;
    this.defaultNamespace = defaultNamespace;
  }

  get(key, namespace = this.defaultNamespace) {
    if (angular.isUndefined(this.configs[namespace][key])) {
      throw new Error(`Unable to find config value for ${key} in ${namespace} namespace`);
    }
    return this.configs[namespace][key];
  }
}