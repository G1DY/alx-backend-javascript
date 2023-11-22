/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import express from 'express';
import mapRoutes from './routes';

const app = express();
const PORT = 1245;
const HOST = 'localhost';

mapRoutes(app);
app.listen(PORT, HOST, () => {
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});

export default app;
module.exports = app;
