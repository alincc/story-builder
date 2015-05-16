'use strict';

angular.module('app.passage')
  .controller('PassageFormController', PassageFormController);

function PassageFormController($location, Passage, PassageService) {
  var ctrl = this;

  ctrl.passage = new Passage();

  ctrl.save = function() {
    PassageService.passages.push(ctrl.passage);
    $location.url('/passages');
  };

  ctrl.cancel = function() {
    $location.url('/passages');
  };
}
