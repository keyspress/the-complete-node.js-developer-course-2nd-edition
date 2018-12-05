const expect = require('expect');
const rewire = require('rewire');

const app = rewire('./app');

describe('App', () => {
  const db = {
    saveUser: expect.createSpy()
  };
  app.__set__('db', db);
  it('should call the spy correctly', () => {
    const spy = expect.createSpy();
    spy('Kyle', 42);
    expect(spy).toHaveBeenCalledWith('Kyle', 42);
  });

  it('should call saveUser with user object', () => {
    const email = 'kyle@example.com';
    const password = '123abc';

    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({ email, password });
  });
});
