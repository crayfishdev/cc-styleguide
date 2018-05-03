const CollectionProvider = require('../../services/collection.service');

module.exports = (req, res) => {
    let reqCategory = req.params.category;
    let categoryCollection;
    CollectionProvider.fetchAllCollections(collections =>  {
        categoryCollection =  collections.find(collection => {
            return collection.label.toLowerCase() === reqCategory.toLowerCase();
        });
    });
    
    if(categoryCollection) {
        res.status(200).send(categoryCollection);
    } else{
        res.status(404).send(`Sorry, ${reqCategory} is not a valid category`);
    }
};