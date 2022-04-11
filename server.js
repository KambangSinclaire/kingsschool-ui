const express = require("express");
const serveStatic = require('serve-static')
const history = require('connect-history-api-fallback');
const path = require("path");

const port = process.env.PORT || 7000;

const app = express();

app.use(history());
app.use('/', serveStatic(path.join(__dirname, '/dist/kingsschool-ui')))
app.get('/.*/', function (req, res) {
    res.sendFile(path.join(__dirname, '/dist/kingsschool-ui/index.html'))
})

app.listen(port, () => {
    console.log(`Frontend Server is Running on Port ${port}`)
});
