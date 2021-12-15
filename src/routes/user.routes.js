'use strict';

const express = require('express');
const authRouter = express.Router();

const { user } = require('../models/index');
const basicAuth = require('../middleware/basic.middleware');
const bearerAuth = require('../middleware/bearer.middleware');
const permissions = require('../middleware/acl.middleware');

authRouter.post('/signup', async (req, res, next) => {
  try {
    let userRecord = await user.create(req.body);
    const output = {
      user: userRecord,
      token: userRecord.token
    };
    res.status(201).json(output);
  } catch (e) {
    next(e.message)
  }
});

authRouter.post('/signin', basicAuth, async (req, res, next) => {
  const user = {
    user: req.user,
    token: req.user.token
  };
  res.status(200).json(user);
});

authRouter.post('/user', bearerAuth, async (req, res, next) => {
  const user = {
    user: req.user,
    token: req.user.token
  };
  res.status(200).json(user);
});

authRouter.get('/users', async (req, res, next) => {
  const userRecords = await user.findAll({});
  const list = userRecords.map(user => `${user.username} : ${user.role}`);
  res.status(200).json(list);
});


module.exports = authRouter;