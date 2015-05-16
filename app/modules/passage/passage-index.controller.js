'use strict';

angular.module('app.passage')
  .controller('PassageIndexController', PassageIndexController);

function PassageIndexController(Passage, PassageService) {
  var ctrl = this;

  ctrl.passages = PassageService.passages;

  ctrl.hasPassages = function() {
    return ctrl.passages.length > 0;
  };

  ctrl.stub = function() {
    for (var p, i=0; i<10; i++) {
      p = new Passage();
      p.name = 'Passage ' + i;
      p.description = 'Description ' + i;
      ctrl.passages.push(p);
    }
  };
}
