'use strict';

const { db } = require('./src/models/index');
const app = require('./src/server');
require('dotenv').config();
let port = process.env.PORT || 4001;

db.sync().then(() => {
    app.start(port);
});

