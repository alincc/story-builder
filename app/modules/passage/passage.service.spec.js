'use strict';

describe('PassageService', function() {
  var PassageService;
  var Passage;

  beforeEach(module('app.passage'));

  beforeEach(inject(function(_PassageService_, _Passage_) {
    PassageService = _PassageService_;
    Passage = _Passage_;
  }));

  describe('#findOne', function() {
    it('returns the matching passage by uid', function() {
      PassageService._passages.push({ uid: 'f00' });
      var passage = PassageService.findOne('f00');
      expect(passage).to.deep.equal({ uid: 'f00' });
    });

    it('returns undefined when not found', function() {
      var passage = PassageService.findOne('f00');
      expect(passage).to.be.undefined;
    });
  });

  describe('#findAll', function() {
    it('returns all passages', function() {
      PassageService._passages = [{ uid: 'f00' }, { uid: 'bar' }];
      var passages = PassageService.findAll();
      expect(passages).to.deep.equal([{ uid: 'f00' }, { uid: 'bar' }]);
    });

    it('returns an empty array by default', function() {
      var passages = PassageService.findAll();
      expect(passages).to.be.an('array');
      expect(passages).to.have.length(0);
    });
  });

  describe('#findAllExcept', function() {
    it('returns all passages except the one by given uid', function() {
      PassageService._passages = [{ uid: 'f00' }, { uid: 'bar' }];
      var passages = PassageService.findAllExcept('f00');
      expect(passages).to.deep.equal([{ uid: 'bar' }]);
    });

    it('returns an empty array by default', function() {
      var passages = PassageService.findAllExcept('f00');
      expect(passages).to.be.an('array');
      expect(passages).to.have.length(0);
    });
  });

  describe('#findIndex', function() {
    it('returns the matching index by uid', function() {
      PassageService._passages = [{ uid: 'f00' }, { uid: 'bar' }];
      var index = PassageService.findIndex('bar');
      expect(index).to.equal(1);
    });

    it('returns -1 when not found', function() {
      var index = PassageService.findIndex('bar');
      expect(index).to.equal(-1);
    });
  });

  describe('#findLinkedTo', function() {
    it('returns all passages linked to the given passage', function() {
      PassageService._passages = [{ uid: 'f00' }, { uid: 'bar' }];
      var passage = { linkedTo: ['f00'] };
      var linkedPassages = PassageService.findLinkedTo(passage);
      expect(linkedPassages).to.deep.equal([{ uid: 'f00' }]);
    });

    it('returns an empty array when no passages are linked', function() {
      PassageService._passages = [{ uid: 'f00' }, { uid: 'bar' }];
      var passage = { linkedTo: [] };
      var linkedPassages = PassageService.findLinkedTo(passage);
      expect(linkedPassages).to.be.an('array');
      expect(linkedPassages).to.be.have.length(0);
    });
  });

  describe('#save', function() {
    it('saves the given passage', function() {
      var passage = PassageService.save({ name: 'Foo' });
      expect(PassageService._passages).to.deep.equal([passage]);
    });

    it('ensures given param is casted to Passage model', function() {
      var passage = PassageService.save({ name: 'Foo' });
      expect(passage).to.be.an.instanceOf(Passage);
    });

    it('generates a uid', function() {
      var passage = PassageService.save({ name: 'Foo' });
      expect(passage.uid).to.be.a('string');
      expect(passage.uid.length).to.be.at.least(8);
    });

    it('links to other passages', function() {
      var otherPassages = [{ uid: 'bar', linked: true }];
      var passage = PassageService.save({ name: 'Foo' }, otherPassages);
      expect(passage.linkedTo).to.deep.equal(['bar']);
    });
  });

  describe('#populateLinks', function() {
    it('sets linked property on linked passages', function() {
      var otherPassages = [{ uid: 'f00' }, { uid: 'bar' }];
      var passage = { linkedTo: ['f00'] };
      PassageService.populateLinks(otherPassages, passage);
      expect(otherPassages[0].linked).to.be.true;
      expect(otherPassages[1].linked).to.be.false;
    });
  });

});
