'use strict';

angular
  .module('StoryBuilder', modules())
  .config(routing);

function modules() {
  return [
    'ngRoute',

    'app.components',
    'app.passage',
  ];
}

function routing($locationProvider, $routeProvider) {
  $locationProvider.html5Mode(true);

  $routeProvider.otherwise({
    redirectTo: '/passages'
  });
}
