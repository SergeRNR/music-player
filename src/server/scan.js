'use strict';

var http = require('http');
var path = require('path');
var fs = require('fs');
var glob = require('glob');
var config = require('../config');

glob(path.join(config.paths.music, '**/*.@(flac|mp3)'), (err, files) => {
    var musicPathLength = path.join(config.paths.music).length + 1;
    var data = files.map(file => file.substr(musicPathLength));

    fs.writeFile(
        path.join(config.paths.media, 'collection.json'),
        JSON.stringify({data: data}),
        () => console.log('scan completed')
    )
});
