var gzippo = require('gzippo');
var express = require('express');
var app = express();

// Authenticator
app.use(express.basicAuth('foo', 'foobar'));

app.use(express.logger('dev'));
app.use(gzippo.staticGzip('' + __dirname + '/dist'));
app.listen(process.env.PORT || 5000);