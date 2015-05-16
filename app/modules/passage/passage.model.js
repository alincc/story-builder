'use strict';

angular.module('app.passage')
  .factory('Passage', PassageFactory);

function PassageFactory() {
  function Passage(attributes) {
    for (var key in attributes) {
      this[key] = attributes[key];
    }
  }

  Passage.prototype.url = function() {
    return '/passages/edit/' + this.uid;
  };

  return Passage;
}
