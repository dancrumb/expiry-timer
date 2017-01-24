import chai from 'chai';
import timer from '../src/timer';

const expect = chai.expect;

describe('Expiry Timer', () => {
  it('completes after provided time has elapsed', () => new Promise((resolve) => {
    const t = timer(50);
    expect(t.done()).to.be.false;
    setTimeout(() => {
      expect(t.done()).to.be.true;
      resolve();
    }, 100);
  }));

  it('completes immediately for times <= 0', () => {
    expect(timer(0).done()).to.be.true;
    expect(timer(-1).done()).to.be.true;
  });

  it('can be reset', () => new Promise((resolve) => {
    const t = timer(50);
    expect(t.done()).to.be.false;
    setTimeout(() => {
      expect(t.done()).to.be.true;
      t.reset();
      expect(t.done()).to.be.false;
      resolve();
    }, 100);
  }));
});
