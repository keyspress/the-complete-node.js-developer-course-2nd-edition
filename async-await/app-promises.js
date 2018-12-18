const users = [
  {
    id: 1,
    name: 'Kyle',
    schoolId: 101
  },
  {
    id: 2,
    name: 'Jim Bob',
    schoolId: 999
  }
];

const grades = [
  {
    id: 1,
    schoolId: 101,
    grade: 77
  },
  {
    id: 2,
    schoolId: 999,
    grade: 32
  },
  {
    id: 3,
    schoolId: 101,
    grade: 89
  }
];

const getUser = id => {
  return new Promise((resolve, reject) => {
    const user = users.find(user => user.id === id);
    if (user) {
      resolve(user);
    } else {
      reject(`Unable to find user with id of ${id}`);
    }
  });
};

const getGrades = schoolId => {
  return new Promise((resolve, reject) => {
    resolve(grades.filter(grade => grade.schoolId === schoolId));
  });
};

const getStatus = userId => {
  let user;
  return getUser(userId)
    .then(tempUser => {
      user = tempUser;
      return getGrades(user.schoolId);
    })
    .then(grades => {
      let average = 0;

      if (grades.length > 0) {
        average =
          grades.map(grade => grade.grade).reduce((a, b) => a + b) /
          grades.length;
      }
      return `${user.name} has an ${average}% in the class.`;
    });
};

const getStatusAlt = async userId => {
  const user = await getUser(userId);
  const grades = await getGrades(user.schoolId);

  let average = 0;

  if (grades.length > 0) {
    average =
      grades.map(grade => grade.grade).reduce((a, b) => a + b) / grades.length;
  }
  return `${user.name} has an ${average}% in the class.`;
};

getStatusAlt(2)
  .then(name => {
    console.log(name);
  })
  .catch(e => {
    console.log(e);
  });

// getStatus(101)
//   .then(status => {
//     console.log(status);
//   })
//   .catch(e => {
//     console.log(e);
//   });
