const CollectionProvider = require('../../../services/collection.service');

module.exports = (req, res, next) => {
    let reqCategory = req.category;
    let reqSubcategory = req.subcategory;
    let posts;
    let postID = req.params.post;

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

    var post = posts.find(post => {
        if(post.title === postID || +post.id === +postID){
            return post;
        }
    });

    if(post) {
        res.status(200).send(post);
    } else{
        res.status(404).send(`Sorry, Post ${postID} could not be found.`);
    }
};