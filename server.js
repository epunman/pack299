// server.js
const history = require('connect-history-api-fallback')
const express = require('express');
const path = require('path');
// var serveStatic = require('serve-static');
const app = express();
const staticFileMiddleware = express.static(path.join(__dirname))

app.use(staticFileMiddleware)
app.use(history())
app.use(staticFileMiddleware)

// app.get('/', function (req, res) {
//     res.render(path.join(__dirname + '/index.html'))
//   })

var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);