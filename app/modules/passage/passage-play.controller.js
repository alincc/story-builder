'use strict';

angular.module('app.passage')
  .controller('PassagePlayController', PassagePlayController);

function PassagePlayController($location, $routeParams, PassageService) {
  var ctrl = this;

  initialize();

  ctrl.hasLinkedPassages = function() {
    return !!ctrl.linkedPassages && ctrl.linkedPassages.length > 0;
  };

  function initialize() {
    var uid = $routeParams.uid;
    ctrl.passage = PassageService.findOne(uid);

    if (!ctrl.passage) {
      $location.url('/passages');

    } else {
      ctrl.linkedPassages = PassageService.findLinkedTo(ctrl.passage);
    }
  }
}
