const square = x => x * x;
console.log(square(9));

let user = {
  name: 'Kyle',
  sayHi: () => {
    console.log(arguments);
    console.log(`Hi, I am ${this.name}`); // this keyword is not bound
  },
  sayHiAlt() {
    console.log(arguments);
    console.log(`Hi, I am ${this.name}`);
  }
};

user.sayHi(1, 2, 3);
