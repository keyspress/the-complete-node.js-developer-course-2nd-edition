var { User } = require('./../models/user');

const authenticate = (req, res, next) => {
  var token = req.header('x-auth');
  // const token = req.header('x-auth');

  User.findByToken(token)
    .then(user => {
      if (!user) {
        return Promise.reject('server');
      }

      req.user = user;
      req.token = token;
      next();
    })
    .catch(e => {
      res.status(401).send(e);
    });
};

module.exports = { authenticate };
