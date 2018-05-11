const CollectionProvider = require('../../services/collection.service');

module.exports = (req, res, next) => {
    let reqCollection = req.params.category;
    let reqSubcollection = req.params.subcategory;
    var collection, categoryCollection, subcategoryCollection;
  
    CollectionProvider.fetchAllCollections(collections =>  {
        categoryCollection =  collections.find(collection => {
            return collection.permalink.toLowerCase() === reqCollection.toLowerCase();
        });
    });
  
    collection = categoryCollection;
    if(reqSubcollection) {
        subcategoryCollection = categoryCollection.subcollections.filter(subcollection => {
            return subcollection.permalink.toLowerCase() == reqSubcollection.toLowerCase();
        });
        collection = subcategoryCollection;
    }
    req.collection = collection;
    next();
};