const express = require('express');
const bodyParser = require('body-parser');
const techieRouter = require('./routes/techieRouter');
const authRouter = require('./routes/authRouter');
const appError = require('./utils/appError');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, OPTIONS'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type, Accept, X-Custom-Header, Authorization'
  );
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  next();
});

app.use((req, res, next) => {
  // req.requestTime = new Date().toISOString();
  // console.log(req.headers);
  next();
});

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/techie', techieRouter);

app.all('*', function (req, res, next) {
  next(new appError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
});

module.exports = app;
