const CollectionProvider = require('../../../services/collection.service');

module.exports = (req, res) => {
    let reqCategory = req.params.category;
    let reqPost = req.params.post;
    let categoryCollection;
    let post;
    CollectionProvider.fetchAllCollections(collections =>  {
        categoryCollection = collections.find(collection => {
            return collection.label.toLowerCase() === reqCategory.toLowerCase();
        });
    });
    console.log(categoryCollection);

    console.log(reqCategory);
    console.log(reqPost);
};