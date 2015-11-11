import {expect} from 'chai';
import myLibrary from '../';

describe('Example Test', () => {
  it('Should return true', () => {
    expect(myLibrary()).to.equal(true);
  });
});
