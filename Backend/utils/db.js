const { Pool } = require('pg');

const conDB = new Pool({
  host: process.env.HOST,
  user: process.env.USER,
  port: process.env.DBPORT,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
});

conDB.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Database connection failed:', err.message);
  } else {
    console.log(`Database connection succeeded at ${res.rows[0].now}`);
  }
});

module.exports = conDB;
