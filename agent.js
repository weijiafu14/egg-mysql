'use strict';

const mysqlSelector = require('./lib/mysqlSelector');

module.exports = agent => {
  if (agent.config.mysqlSelector.agent) mysqlSelector(agent);
};
