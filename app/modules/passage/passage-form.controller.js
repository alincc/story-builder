'use strict';

angular.module('app.passage')
  .controller('PassageFormController', PassageFormController);

function PassageFormController($location, $routeParams, Passage, PassageService) {
  var ctrl = this;
  var found;

  if (!$routeParams.uid) {
    ctrl.title = 'New Passage';
    ctrl.passage = new Passage();

  } else {
    ctrl.title = 'Edit Passage';
    found = PassageService.find($routeParams.uid);

    if (!found) {
      $location.url('/passages');
    } else {
      ctrl.passage = new Passage(found);
    }
  }

  ctrl.save = function() {
    PassageService.save(ctrl.passage);
    $location.url('/passages');
  };

  ctrl.cancel = function() {
    $location.url('/passages');
  };
}
