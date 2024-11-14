const {Pool} = require('pg')

const config = require('../config/config.json');

const conn = new Pool({
  host: config.host,
  user: config.user,
  port: config.port,
  database: config.database,
  password: config.password,
});

// client.connect();

module.exports = conn;
