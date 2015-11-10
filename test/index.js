import {expect} from 'chai';

const myLibrary = require('../');

describe('Example Test', () => {
  it('Should return true', () => {
    expect(myLibrary()).to.equal(true);
  });
});
