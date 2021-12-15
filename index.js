'use strict';

const { db } = require('./src/models/index');
const app = require('./src/server');
const port = 4000;

db.sync().then(() => {
    app.start(port);
});

