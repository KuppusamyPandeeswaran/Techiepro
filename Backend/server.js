const dotenv = require('dotenv');

process.on('uncaughtException', (err) => {
  console.log(err.name, err.message);
  console.log('UNCAUGHTEXCEPTION! Shutting down...');

  server.close(() => process.exit(1));
});

dotenv.config({ path: './config.env' });
const app = require('./app');

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});

process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message);
  console.log('UNHANDLEDREJECTION! Shutting down...');

  server.close(() => process.exit(1));
});
