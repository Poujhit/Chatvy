const Gun = require('gun');

const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');

var corsOptions = {
  origin: process.env.ORIGIN,
};

const app = express();
app.use(cors(corsOptions));
console.log('Hello');
app.use(Gun.serve);

const router = express.Router();
app.use(router);

router.get('/', (_, res) => {
  res.send('AXE Relay Peer server for Chatvy');
});

const port = process.env.PORT || 5000;

const server = app.listen(port, () => {
  console.log(`Relay Peer listening at ${process.env.ORIGIN}:${port}`);
});

Gun({ web: server });
