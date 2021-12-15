'use strict';

const express = require('express');
const app = express();
// const bodyParser = require('body-parser')
app.use(express.json());
const cors = require("cors");
// app.use(bodyParser);
app.use(express.urlencoded({ extended: true }));

app.use(cors({ origin: '*' }));

// Routes:
const itemRoutes = require('./routes/item.routes');
app.use(itemRoutes);
const authRouter = require('./routes/user.routes');
app.use(authRouter);

const start = (port) => {
    app.listen(port, () => {
        console.log(`listening to port ${port}`);
    })
}

module.exports = {
    app: app,
    start: start
}