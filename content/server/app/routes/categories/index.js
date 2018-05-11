const categories = require('express').Router();
const all = require('./all');
const single = require('./single');
const posts = require('./posts');

categories.get('/', all);
categories.get('/:category/(:subcategory*?)', single);

categories.use('/:category/(:subcategory*?)/posts', (req, res,next) => {
  let reqCategory = req.params.category;
  let reqSubategory = req.params.subcategory;
  req.category = reqCategory;
  req.subcategory = reqSubategory;
  next();
}, posts);
module.exports = categories;