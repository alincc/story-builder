'use strict';

angular
  .module('app.passage', modules())
  .config(routing);

function modules() {
  return [
    'ngRoute',
  ];
}

function routing($routeProvider) {
  $routeProvider

    .when('/passages', {
      templateUrl: '/modules/passage/passage-index.html',
      controller: 'PassageIndexController',
      controllerAs: 'ctrl',
    })

    .when('/passages/new', {
      templateUrl: '/modules/passage/passage-form.html',
      controller: 'PassageFormController',
      controllerAs: 'ctrl',
    })

    .when('/passages/edit/:uid', {
      templateUrl: '/modules/passage/passage-form.html',
      controller: 'PassageFormController',
      controllerAs: 'ctrl',
    })

    .when('/passages/play/:uid', {
      templateUrl: '/modules/passage/passage-play.html',
      controller: 'PassagePlayController',
      controllerAs: 'ctrl',
    });
}
