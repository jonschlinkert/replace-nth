var expect = require('chai').expect;
var nthMatch = require('../');


var opts = {
  pattern: /a/g,
  replacement: 'b',
  str: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
};

describe('nthMatch - single match', function () {
  describe('when a regex specifies a single match:', function () {
    it('should return that specific match only', function (done) {
      opts.num = '1'
      expect(nthMatch(opts)).to.equal('baaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
      done();
    });
  });
  describe('when a regex specifies a single two-digit match:', function () {
    it('should return each match at the specified index', function (done) {
      opts.num = '21'
      expect(nthMatch(opts)).to.eql('aaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaa');
      done();
    });
    it('should return each match at the specified index', function (done) {
      opts.num = '11'
      expect(nthMatch(opts)).to.eql('aaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
      done();
    });
  });
  describe('when a regex specifies multiple numbers:', function () {
    it('should return matches for each', function (done) {
      opts.num = '[12]'
      expect(nthMatch(opts)).to.equal('bbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
      done();
    });
    it('should return matches for each', function (done) {
      opts.num = '[123]'
      expect(nthMatch(opts)).to.equal('bbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
      done();
    });
  });

  describe('when a regex specifies two matches:', function () {
    var opts = {
      pattern: /a/g,
      replacement: 'BB',
      str: 'aaaaaaaaaaaaaaa'
    };
    it('should return that specific match only', function (done) {
      opts.num = '1'
      expect(nthMatch(opts)).to.equal('BBaaaaaaaaaaaaaa');
      opts.num = '[135]'
      expect(nthMatch(opts)).to.equal('BBaBBaBBaaaaaaaaaa');
      opts.num = '[196]'
      expect(nthMatch(opts)).to.equal('BBaaaaBBaaBBaaaaaa');
      done();
    });
  });
});