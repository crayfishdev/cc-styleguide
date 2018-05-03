const posts = require('express').Router();
const all = require('./all');
const single = require('./single');

posts.get('/', all);
posts.get('/:post', single);

module.exports = posts;