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

    findLinkedTo: function(passage) {
      return this._passages.filter(function(otherPassage) {
        return passage.linkedTo.indexOf(otherPassage.uid) > -1;
      });
    },

    save: function(passage, otherPassages) {
      var index, uid, attributes, passageModel;

      if (!passage.uid) {
        uid = (+new Date()).toString(36);
        attributes = angular.extend(passage, { uid: uid });
        passageModel = new Passage(attributes);
        this._passages.push(passageModel);

      } else {
        index = this.findIndex(passage.uid)
        passageModel = new Passage(passage);
        this._passages[index] = passageModel;
      }

      if (!!otherPassages) {
        passageModel.linkTo(otherPassages);
      }

      return passageModel;
    },

    populateLinks: function(otherPassages, passage) {
      var otherPassage;

      if (!passage.linkedTo || passage.linkedTo.length === 0) {
        return;
      }

      for (var i=0; i<otherPassages.length; i++) {
        otherPassage = otherPassages[i];
        otherPassage.linked = passage.linkedTo.indexOf(otherPassage.uid) > -1;
      }
    }
  };
}
