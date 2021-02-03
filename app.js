'use strict';

const mysqlSelector = require('./lib/mysqlSelector');

module.exports = app => {
  if (app.config.mysqlSelector.app) mysqlSelector(app);
};
