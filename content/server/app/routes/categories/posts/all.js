const CollectionProvider = require('../../../services/collection.service');

module.exports = (req, res, next) => {
    let reqCategory = req.category;
    let reqSubcategory = req.subcategory;
    let posts;

    var collection, categoryCollection, subcategoryCollection;
  
    CollectionProvider.fetchAllCollections(collections =>  {
        categoryCollection =  collections.find(collection => {
            return collection.permalink.toLowerCase() === reqCategory.toLowerCase();
        });
    });
  
    collection = categoryCollection;

    if(reqSubcategory) {
        subcategoryCollection = categoryCollection.subcollections.find(subcollection => {
            return subcollection.permalink.toLowerCase() == reqSubcategory.toLowerCase();
        });
        collection = subcategoryCollection;
    }

    posts = collection.posts;
    req.posts = posts;
    next();
    if(posts) {
        res.status(200).send(posts);
    } else{
        res.status(404).send(`Sorry, ${reqCategory} does not have any posts`);
    }
};