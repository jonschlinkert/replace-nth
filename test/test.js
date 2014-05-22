var expect = require('chai').expect;
var replaceNth = require('../');


var opts = {
  pattern: /a/g,
  replacement: 'b',
  str: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
};

describe('replaceNth - single match', function () {
  describe('when a regex specifies a single match:', function () {
    it('should return that specific match only', function (done) {
      opts.num = '1'
      expect(replaceNth(opts)).to.equal('baaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
      done();
    });
  });
  describe('when a regex specifies a single two-digit match:', function () {
    it('should return each match at the specified index', function (done) {
      opts.num = '21'
      expect(replaceNth(opts)).to.eql('aaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaa');
      done();
    });
    it('should return each match at the specified index', function (done) {
      opts.num = '11'
      expect(replaceNth(opts)).to.eql('aaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
      done();
    });
  });
  describe('when a regex specifies multiple numbers:', function () {
    it('should return matches for each', function (done) {
      opts.num = '[12]'
      expect(replaceNth(opts)).to.equal('bbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
      done();
    });
    it('should return matches for each', function (done) {
      opts.num = '[123]'
      expect(replaceNth(opts)).to.equal('bbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
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
      expect(replaceNth(opts)).to.equal('BBaaaaaaaaaaaaaa');
      opts.num = '[135]'
      expect(replaceNth(opts)).to.equal('BBaBBaBBaaaaaaaaaa');
      opts.num = '[196]'
      expect(replaceNth(opts)).to.equal('BBaaaaBBaaBBaaaaaa');
      done();
    });
  });
});