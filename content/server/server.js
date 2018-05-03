const express = require('express');
const join = require('path').join;
const read = require('fs').readFileSync;

const routes = require('./app/routes');
const CollectionProvider = require('./app/services/collection.service');

// Import Routes == 
const app = express();

const PORT = process.env.PORT || 8080;
const BASE_PATH = '/api';
const DIST_FOLDER = join(__dirname, '../','build');

var collectionProvider =  CollectionProvider;

function init(){
    var data = read(`${DIST_FOLDER}/manifest.json`);
    var collections = JSON.parse(data).collections;
    console.log('init ====');
    if(Array.isArray(collections) && collections.length) {
        collections.forEach(collection => {
            collectionProvider.insertCollection(collection);
        });
    }
}
init();

app.use(BASE_PATH, routes);
app.listen(PORT, () => {
    console.log('Server still going!');
    console.log(`http://localhost:${PORT}/`);
});