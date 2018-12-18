class Users {
  constructor() {
    this.users = [];
  }
  addUser(id, name, room) {
    const user = { id, name, room };
    this.users.push(user);
    return user;
  }
  removeUser(id) {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex !== -1) this.users.splice(userIndex, 1);
  }
  getUser(id) {
    const user = this.users.filter(user => user.id === id);
    return user[0];
  }
  getUserList(room) {
    const users = this.users.filter(user => user.room === room);
    const namesArray = users.map(user => user.name);

    return namesArray;
  }
}

module.exports = { Users };
