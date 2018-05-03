const routes     = require('express').Router();
const categories = require('./categories');


routes.use('/categories', categories);

routes.get('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
});

module.exports = routes;