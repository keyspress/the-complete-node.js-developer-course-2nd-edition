const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {
  describe('#add', () => {
    it('should add two numbers', () => {
      const res = utils.add(33, 11);

      expect(res)
        .toBe(44)
        .toBeA('number');
    });
  });

  it('should async add two numbers', done => {
    utils.asyncAdd(4, 3, sum => {
      expect(sum)
        .toBe(7)
        .toBeA('number');
      done();
    });
  });

  it('should square a number', () => {
    const res = utils.square(2);

    expect(res)
      .toBe(4)
      .toBeA('number');
  });

  it('should async square a number', done => {
    utils.asyncSquare(2, num => {
      expect(num)
        .toBe(4)
        .toBeA('number');
      done();
    });
  });
});

it('should verify first and last names are set', () => {
  const user = {
    location: 'Someplace'
  };
  utils.setName(user, 'Kyle Spresser');
  expect(user)
    .toBeA('object')
    .toInclude({ firstName: 'Kyle', lastName: 'Spresser' });
});

// it('should expect some values', () => {
//   // expect(12).toNotBe(11);
//   // expect({ name: 'Andrew' }).toEqual({ name: 'Andrew' });
//   // expect([2, 3, 4]).toExclude(8);
//   expect({ name: 'Kyle', age: 42, location: 'Lakeland' }).toInclude({
//     age: 42
//   });
// });
