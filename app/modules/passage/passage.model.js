'use strict';

angular.module('app.passage')
  .factory('Passage', PassageFactory);

function PassageFactory() {
  function Passage(attributes) {
    for (var key in attributes) {
      this[key] = attributes[key];
    }
  }

  Passage.prototype.linkedTo = [];

  Passage.prototype.url = function() {
    return '/passages/edit/' + this.uid;
  };

  Passage.prototype.playUrl = function() {
    return '/passages/play/' + this.uid;
  };

  Passage.prototype.linkTo = function(otherPassages) {
    this.linkedTo = [];

    for (var i=0; i<otherPassages.length; i++) {
      var otherPassage = otherPassages[i];

      if (otherPassage.linked) {
        this.linkedTo.push(otherPassage.uid);
      }
    }
  };

  return Passage;
}
