'use strict';

angular.module('app.passage')
  .controller('PassageIndexController', PassageIndexController);

function PassageIndexController(PassageService) {
  var ctrl = this;

  ctrl.passages = PassageService.passages;

  ctrl.hasPassages = function() {
    return ctrl.passages.length > 0;
  };
}
