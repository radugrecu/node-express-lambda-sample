const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan')
const serverless = require('serverless-http')

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(morgan('combined'))

app.get('/', (req, res) => {
  res.redirect('/status');
})
app.get('/status', (req, res) => {
  res.send(`The app is working.`);
});
app.get('/echo/:getParam', (req, res) => {
  const getParam = req.params.getParam;

  let result = {
    "input": getParam
  }

  res.json(result);
});

exports.handler = serverless(app);