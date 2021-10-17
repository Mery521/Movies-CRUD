let db = require('../../models/database/database.model');

const Movie = function(movie) {
    this.title = movie.title;
    this.description = movie.description;
    this.director = movie.director;
    this.coverImage = movie.coverImage;
    this.date = movie.date;
};

Movie.create = (movie, result) => {
    db.query(`INSERT INTO movies SET ?`, movie, (err, res) => {
        if (err) result(err);
        result({ id: res.insertId, ...movie });
    });
};

Movie.findById = (movieId, result) => {
    db.query(`SELECT * FROM movies WHERE id = ?`,[movieId], (err, res) => {
        if (err) result(err);
        result(res[0]);
    });
};

Movie.getAll = ({ offset, limit }, result) => {
    db.query(`SELECT * FROM movies WHERE LIMIT ? OFFSET ?`,
            [limit, offset], (err, res) => {
        if (err) result(err);
        result(res);
    });
};

Movie.updateById = (id, movie, result) => {
    db.query(
        `UPDATE movies SET title = ?, description = ?, director = ? coverImage = ?, date = ? WHERE id = ?`,
        [movie.title, movie.description, movie.coverImage, movie.director, movie.date, id],
        (err, res) => {
            if (err) result(err);
            result({ id: res.id, ...movie });
        }
    );
};

Movie.remove = (id, result) => {
    db.query(`DELETE FROM movies WHERE id = ?`, id, (err, res) => {
        if (err) result(err);
        result(res);
    });
};

module.exports = Movie;