const express = require('express');
const movie = require("../controller/movie.controller");
const router = express.Router();

    router
        .route('/')
        .post(movie.create)
        .get(movie.findAll)

    router
        .route('/edit/:movieId')
        .get(movie.findOne)
        .patch(movie.update)
        .delete(movie.delete)

module.exports = router;