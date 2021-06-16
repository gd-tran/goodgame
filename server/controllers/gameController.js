const db = require('../models/dbModels.js');

const gameController = {};

gameController.createGame = (req, res, next) => {
  const { title, description, genre, platform, review } = req.body;
  const createQuery = `INSERT INTO games(title, description, genre, platform, review) VALUES($1, $2, $3, $4, $5)`
  db.query(createQuery, [title, description, genre, platform, review], (err, response) => {
    if (err) return next(err);

    return next();
  })
};

gameController.readGames = (req, res, next) => {
  const getQuery = `SELECT * FROM "public"."games" LIMIT 100`
  db.query(getQuery, (err, response) => {
    if (err) return next(err)
    res.locals.games = response.rows
    return next();
  })

};

gameController.destroyGame = (req, res, next) => {
  const { _id } = req.body
  const deleteQuery = 'DELETE FROM games WHERE _id = $1'
  db.query(deleteQuery, [_id], (err, response) => {
    if (err) return next(err)
    return next();
  })

};


gameController.evolveGame = (req, res, next) => {
  const { title, description, genre, platform, review, _id } = req.body;
  const evolveQuery = `UPDATE games
  SET title = $1, description = $2, genre = $3, platform = $4, review = $5 
  WHERE _id = $6`
  //request body should have all columns
  //UPDATE games SET column names = values, WHERE _id = ID
  db.query(evolveQuery, [title, description, genre, platform, review, _id], (err, response) => {
    if (err) return next(err);

    return next();
  })


};

module.exports = gameController;