'use strict';

angular.module('app.passage')
  .controller('PassageIndexController', PassageIndexController);

function PassageIndexController(Passage, PassageService) {
  var ctrl = this;

  ctrl.passages = PassageService.findAll();

  ctrl.hasPassages = function() {
    return ctrl.passages.length > 0;
  };
}
