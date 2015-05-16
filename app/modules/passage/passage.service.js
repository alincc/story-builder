'use strict';

angular.module('app.passage')
  .service('PassageService', PassageService);

function PassageService() {
  return {
    passages: []
  };
}
