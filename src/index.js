const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/server.config.js');
const apiRouter = require('./routes/index.js');
const errorHandler = require('./validators/errorhandler.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// If any request comes and route starts with /api, we map it to apiRouter
app.use('/api', apiRouter);

app.get('/ping', (req, res) => {
  return res.json({ message: 'Problem service is live' });
});

//last middleware if any errors came
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server Started at port ${PORT}`);
});
