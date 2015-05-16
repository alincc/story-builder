'use strict';

describe('PassageService', function() {
  var PassageService;

  beforeEach(module('app.passage'));

  beforeEach(inject(function(_PassageService_) {
    PassageService = _PassageService_;
  }));

  it('initializes with empty passages', function() {
    expect(PassageService.passages).to.be.an('array');
    expect(PassageService.passages).to.be.have.length(0);
  });
});
