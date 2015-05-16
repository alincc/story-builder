'use strict';

angular.module('app.passage')
  .controller('PassageIndexController', PassageIndexController);

function PassageIndexController(Passage, PassageService) {
  var ctrl = this;

  ctrl.passages = PassageService.findAll();

  ctrl.hasPassages = function() {
    return ctrl.passages.length > 0;
  };

  ctrl.stub = function() {
    for (var p, i=0; i<10; i++) {
      PassageService.save({
        name: 'Passage ' + i,
        description: 'Description ' + i
      });
    }
  };
}
