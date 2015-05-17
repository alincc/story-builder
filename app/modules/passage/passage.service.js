'use strict';

angular.module('app.passage')
  .service('PassageService', PassageService);

function PassageService(Passage) {
  return {
    _passages: [],

    findOne: function(uid) {
      return this._passages[this.findIndex(uid)];
    },

    findAll: function() {
      return this._passages;
    },

    findAllExcept: function(uid) {
      return this._passages.filter(function(passage) {
        return passage.uid !== uid;
      });
    },

    findIndex: function(uid) {
      for (var i=0; i<this._passages.length; i++) {
        if (this._passages[i].uid === uid) {
          return i;
        }
      }
      return -1;
    },

    findLinkedPassages: function(passage) {
      return this._passages.filter(function(otherPassage) {
        return passage.linkedTo.indexOf(otherPassage.uid) > -1;
      });
    },

    save: function(passage, otherPassages) {
      var index, uid, attributes;

      if (!!otherPassages) {
        passage.linkTo(otherPassages);
      }

      if (!passage.uid) {
        uid = Math.round(+new Date() * Math.random()).toString(36);
        attributes = angular.extend(passage, { uid: uid });
        this._passages.push(new Passage(attributes));

      } else {
        var index = this.findIndex(passage.uid)
        this._passages[index] = new Passage(passage);
      }
    },

    populateLinks: function(otherPassages, passage) {
      if (!passage.linkedTo || passage.linkedTo.length === 0) {
        return;
      }

      for (var i=0; i<otherPassages.length; i++) {
        var otherPassage = otherPassages[i];

        if (passage.linkedTo.indexOf(otherPassage.uid) > -1) {
          otherPassage.linked = true;
        }
      }
    }
  };
}
