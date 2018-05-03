const CollectionProvider = require('../../../services/collection.service');

module.exports = (req, res) => {
    let reqCategory = req.category;
    let reqPost = req.params.post;
    let categoryCollection;
    let post;
    CollectionProvider.fetchAllCollections(collections =>  {
        categoryCollection = collections.find(collection => {
            return collection.label.toLowerCase() === reqCategory.toLowerCase();
        });
    });

    if(categoryCollection && categoryCollection.files){
        post = categoryCollection.files.find(post => {
            return post.title.toLowerCase() === reqPost.toLowerCase();
        });
    }

    if(post) {
        res.status(200).send(post);
    } else{
        res.status(404).send(`Sorry, ${reqPost} is not a post of ${reqCategory}`);
    }
};