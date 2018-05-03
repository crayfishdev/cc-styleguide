var express = require('express');
const join = require('path').join;

const CollectionProvider = require('../../services/collection.service');



module.exports = (req, res) => {
    let reqCategory = req.params.categories;
    let categoriesCollection;
    CollectionProvider.fetchAllCollections(collections =>  {
       if(collections && collections.length){
        categoriesCollection = collections;
       }
    });
    
    if(categoriesCollection) {
        res.status(200).send(categoriesCollection);
    }else{
        res.status(404).send(`Sorry, ${reqCategory} is not a valid categories`);
    }
};
