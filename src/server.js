'use strict';

const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes:
const itemRoutes = require('./routes/item.routes');
app.use(itemRoutes);
const authRouter = require('./routes/user.routes');
app.use(authRouter);

app.get('/', async (req, res ) => {
    res.status(200).send('hello there');
});

const start = (port) => {
    app.listen(port, () => {
        console.log(`listening to port ${port}`);
    })
}

module.exports = {
    app: app,
    start: start
}