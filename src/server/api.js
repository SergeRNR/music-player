'use strict';

var path = require('path');
var fs = require('fs');
var express = require('express');
var router = express.Router();
var config = require('../config');

router.get('/collection', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    fs.createReadStream(path.join(config.paths.media, 'collection.json')).pipe(res);
});

router.get('/files/:fileName', (req, res) => {
    var testFile = path.join(config.paths.media, 'test.mp3');

    fs.stat(testFile, (err, stat) => {
        if (err || stat instanceof Error) {
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('file not found');
        } else {
            res.setHeader('Content-Length', stat.size);
            fs.createReadStream(testFile).pipe(res);
        }
    });
});

module.exports = router;
