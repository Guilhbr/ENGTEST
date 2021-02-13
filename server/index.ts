import bodyParser from 'body-parser';
import express from 'express';
import {login} from './api/login/';
import user from './api/user'
import {authUser} from './middleware/auth'
import errorHandler from 'errorhandler'

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/login", login)

app.use("/user", authUser, user)

app.get("/", (req, res) => {
    res.send('Hello World');
});

app.use(errorHandler)

app.listen(port, () => console.log(`Listening on port ${port}`));
