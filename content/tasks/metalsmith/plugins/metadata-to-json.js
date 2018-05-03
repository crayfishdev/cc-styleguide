var fs = require('fs');
var normalize = require('../utilities/options');
var util = require('util');

module.exports = plugin;

function plugin(options) {
    var opts = normalize(options);
    var outputPath = opts.output;

    return function (files, metalsmith, done) {
        var metadata = metalsmith.metadata();
        var metadataJSON = JSON.stringify(metadata);
        // console.log(metadataJSON);
        fs.writeFileSync(outputPath, metadataJSON, null , 'utf-8');
        done();
    }
}