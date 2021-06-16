const db = require('../models/dbModels.js');

// queries should only be to the user Table
const userController = {};

userController.createUser = (req, res, next) => {
  // request body should have username and password
  const { username, password } = req.body;

  const createQuery = `INSERT INTO users (username, password) VALUES ($1, $2)`
  db.query(createQuery, [username, password], (err, response) => {
    if (err) return next(err);

    res.locals.username = username;
    return next();
  });
};

userController.verifyUser = (req, res, next) => {
  const { username, password } = req.body;
  const findQuery = `SELECT * FROM users WHERE username=$1 AND password=$2`;
  
  db.query(findQuery, [username, password], (err, response) => {
    if (err) return res.json('Wrong Username or Password');
    res.locals.username = username;
    return next();
  },
  )}

module.exports = userController;