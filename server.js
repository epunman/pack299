// server.js
const history = require('connect-history-api-fallback')
const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');
const app = express();

app.use(history({
    verbose: true
}))
app.use(serveStatic(__dirname + "/dist"));

app.listen(process.env.PORT || 5000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
