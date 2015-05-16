'use strict';

angular.module('app.passage')
  .controller('PassageFormController', PassageFormController);

function PassageFormController($location, $routeParams, Passage, PassageService) {
  var ctrl = this;

  initialize();

  ctrl.hasOtherPassages = function() {
    return ctrl.otherPassages.length > 0;
  };

  ctrl.save = function() {
    PassageService.save(ctrl.passage, ctrl.otherPassages);
    $location.url('/passages');
  };

  ctrl.cancel = function() {
    $location.url('/passages');
  };

  function initialize() {
    var uid = $routeParams.uid;
    var found;

    if (!uid) {
      ctrl.title = 'New Passage';
      ctrl.passage = new Passage();
      ctrl.otherPassages = angular.copy(PassageService.findAll());
      PassageService.populateLinks(ctrl.otherPassages, ctrl.passage);

    } else {
      found = PassageService.findOne(uid);

      if (!found) {
        $location.url('/passages');

      } else {
        ctrl.title = 'Edit Passage';
        ctrl.passage = new Passage(found);
        ctrl.otherPassages = angular.copy(PassageService.findAllExcept(uid));
        PassageService.populateLinks(ctrl.otherPassages, ctrl.passage);
      }
    }
  }
}
