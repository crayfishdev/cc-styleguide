const categories = require('express').Router();
const all = require('./all');
const single = require('./single');

const posts = require('./posts');

categories.get('/', all);
categories.get('/:category', single);
categories.use('/:category/posts', (req, res, next) => {
    req.category = req.params.category;
    next();
  },posts);
module.exports = categories;