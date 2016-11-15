'use strict';

export default function ($stateProvider) {
    $stateProvider.state('mainLayout', {
        abstract: true,
        templateUrl: 'layout/mainLayout.html'
    });
}