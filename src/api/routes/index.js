const express = require('express');

const movieRouter = require('./movie.route');

const router = express.Router();

router.use('/movies', movieRouter);

module.exports = router;