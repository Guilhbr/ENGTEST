import bodyParser from 'body-parser';
import express from 'express';
import {login} from './api/login/';

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/login", login)

app.get("/", (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => console.log(`Listening on port ${port}`));