const Movie = require('../../models');
const { offSetLimit, limit } = require('../../public/paginat')
// create movie
exports.create = (req, res) => {
    if (!req.body) {
        throw new Error("The content is empty!")
    }
        const movie = new Movie({
            title: req.body.title,
            description: req.body.description,
            director: req.body.director,
            coverImage: req.body.coverImage,
            date: req.body.date
        });
    Movie.create(movie, (data) => {
        res.send(data);
    });
};

// get movies list
exports.findAll = (req, res) => {
    page = 1;
    if (req.page) {
        page = req.page;
    }
    let offset = offSetLimit(page);
    Movie.getAll(({ offset, limit }, data) => {
        res.send(data);
    });
};

// get movie by id
exports.findOne = (req, res) => {
    Movie.findById(req.params.movieId, (data) => {
        res.send(data);
    });
};

// update movie by id
exports.update = (req, res) => {
    if (!req.body) {
        throw new Error("The content is empty!")
    }
    Movie.updateOne(req.params.movieId, req.body,
        (data) => {
            res.send(data);
    });
};

// delete movie by id
exports.delete = (req, res) => {
    Movie.remove(req.params.movieId, () => {
        res.send({ message: `Movies was deleted` });
    });
};
