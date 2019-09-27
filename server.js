// server.js
const history = require('connect-history-api-fallback')
var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
const app = express();

app.use(history({
    verbose: true
}))
app.use(express.static('.'))//(__dirname + "/dist"));
var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);