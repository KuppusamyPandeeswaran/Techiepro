const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const techieRouter = require('./routes/techieRouter');
const loginRouter = require('./routes/loginRouter');
const app = express();

dotenv.config({ path: './config/config.env' });

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

app.use('/api/v1/', loginRouter);
app.use('/api/v1/techie', techieRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`info`, `Listening on port: ${PORT}`);
});
