'use strict';

var express = require('express');
var app = express();
var config = require('../config');
var api = require('./api');

var port = config.server.port;

app.use(express.static(config.paths.dist));
app.use(express.static(config.paths.client));

app.use('/api', api);

app.listen(port, () => console.log('Listening on port %d', port));
