const expect = require('chai').expect;
const abbrev = require('../../src/logic/abbrev');

// eslint-disable-next-line prefer-spread
const createAscArray = (count, asString = false) => Array
  .apply(null, { length: count }).map((_, idx) => (asString ? String(idx) : idx));

describe('Testing abbrev', () => {
  it('Testing truncating int array', () => {
    expect(abbrev({
      one: createAscArray(1000)
    })).to.equal('{"one":[0,1,2,3,4,5,6,"...",993,994,995,996,997,998,999]}');
  });

  it('Testing truncating array of int array', () => {
    expect(abbrev({
      one: createAscArray(1000).map(e => [e])
    })).to.equal('{"one":[[0],[1],[2],[3],[4],[5],[6],"...",[993],[994],[995],[996],[997],[998],[999]]}');
  });

  it('Testing truncating double nested int array', () => {
    expect(abbrev({
      one: createAscArray(1000).map((e) => {
        if (e > 997) {
          return createAscArray(e);
        }
        return e;
      })
    })).to.equal(
      '{"one":[0,1,2,3,4,5,6,"...",993,994,995,996,997,'
      + '[0,1,2,3,4,5,6,"...",991,992,993,994,995,996,997],'
      + '[0,1,2,3,4,5,6,"...",992,993,994,995,996,997,998]]}'
    );
  });

  it('Testing truncating string array', () => {
    expect(abbrev({
      one: createAscArray(1000, true)
    })).to.equal('{"one":["0","1","2","3","4","5","6","...","993","994","995","996","997","998","999"]}');
  });

  it('Testing truncating array of string array', () => {
    expect(abbrev({
      one: createAscArray(1000, true).map(e => [e])
    })).to.equal(
      '{"one":[["0"],["1"],["2"],["3"],["4"],["5"],["6"],"...",'
      + '["993"],["994"],["995"],["996"],["997"],["998"],["999"]]}'
    );
  });

  it('Testing truncating double nested string array', () => {
    expect(abbrev({
      one: createAscArray(1000, true).map((e) => {
        if (e > 997) {
          return createAscArray(e, true);
        }
        return e;
      })
    })).to.equal(
      '{"one":["0","1","2","3","4","5","6","...","993","994","995","996","997",'
      + '["0","1","2","3","4","5","6","...","991","992","993","994","995","996","997"],'
      + '["0","1","2","3","4","5","6","...","992","993","994","995","996","997","998"]]}'
    );
  });

  it('Testing truncating long string', () => {
    expect(abbrev({
      one: 'a'.repeat(1000)
    })).to.equal(`{"one":"${'a'.repeat(56)}...${'a'.repeat(56)}"}`);
  });
});
