'use strict';

const base64 = require('base-64');
const { user } = require('../models/index');

module.exports = async (req, res, next) => {
  if (!req.headers.authorization) { return _authError(); }
  let basic = req.headers.authorization.split(' ').pop();
  let [username, pass] = base64.decode(basic).split(':');

  try {
    req.user = await user.authenticateBasic(username, pass);
    next();
  } catch (e) {
    _authError(e);
  }

  function _authError(e) {
    res.status(403).send('Invalid Login' + e);
  };
}