import angular from 'angular';

angular
    .module('ngAdvancedTraining', [])
    .run(onAppRun);

function onAppRun($log) {
    $log.info('App bootstraped !');
}

