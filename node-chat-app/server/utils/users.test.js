const expect = require('expect');

const { Users } = require('./users');

describe('Users', () => {
  let users;
  beforeEach(() => {
    users = new Users();
    users.users = [
      {
        id: '1',
        name: 'Tester1',
        room: 'Testing Room'
      },
      {
        id: '2',
        name: 'Tester2',
        room: 'Testing Room 2'
      },
      {
        id: '3',
        name: 'Tester3',
        room: 'Testing Room'
      }
    ];
  });

  it('should add new user', () => {
    const users = new Users();
    const user = {
      id: '123',
      name: 'Test',
      room: 'Testing Room'
    };
    const resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should return names for Testing Room', () => {
    const userList = users.getUserList('Testing Room');

    expect(userList).toEqual[('Tester1', 'Tester3')];
  });
  it('should return names for Testing Room 2', () => {
    const userList = users.getUserList('Testing Room');

    expect(userList).toEqual['Tester2'];
  });

  it('should remove a user', () => {
    users.removeUser('1');
    expect(users.users.length).toBe(2);
    expect(users.users[0].id).toBe('2');
  });

  it('should not remove user', () => {
    users.removeUser('99');
    expect(users.users.length).toBe(3);
    expect(users.users[0].id).toBe('1');
  });

  it('should find user', () => {
    const user = users.getUser('1');
    expect(user.name).toBe('Tester1');
  });

  it('should not find user', () => {
    const user = users.getUser('99');
    expect(user).toNotExist();
  });
});
