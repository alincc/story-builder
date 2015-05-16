'use strict';

angular.module('app.passage')
  .service('PassageService', PassageService);

function PassageService(Passage) {
  return {
    _passages: [],

    findAll: function() {
      return this._passages;
    },

    findIndex: function(uid) {
      for (var i=0; i<this._passages.length; i++) {
        if (this._passages[i].uid === uid) {
          return i;
        }
      }
      return -1;
    },

    find: function(uid) {
      return this._passages[this.findIndex(uid)];
    },

    save: function(passage) {
      var index, uid, attributes;

      if (!passage.uid) {
        uid = Math.round(+new Date() * Math.random()).toString(36);
        attributes = angular.extend(passage, { uid: uid });
        this._passages.push(new Passage(attributes));

      } else {
        var index = this.findIndex(passage.uid)
        this._passages[index] = new Passage(passage);
      }
    }
  };
}
