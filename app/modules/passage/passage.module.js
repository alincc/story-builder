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
  $routeProvider.when(

    '/passages', {
      templateUrl: '/modules/passage/passage-index.html',
      controller: 'PassageIndexController',
      controllerAs: 'ctrl',
    }

  );
}