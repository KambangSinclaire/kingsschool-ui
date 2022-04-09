import express from "express";
import history from "connect-history-api-fallback";
import path from "path";
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
