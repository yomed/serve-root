'use strict';

var fs = require('fs');
var path = require('path');

function serveRoot(options) {
    var dir = options.dir || '';
    var paths = options.paths || [];
    var headers = options.headers || {};

    return function (req, res, next) {
        var file = dir + req.originalUrl;
        if (paths.indexOf(req.originalUrl) !== -1) {
            fs.stat(file, function(err, stat) {
                // TODO: handle error
                if (!err) {
                    return res.sendFile(path.join(file), headers);
                }
            });
        } else {
            next();
        }
    };
}

module.exports = serveRoot;
