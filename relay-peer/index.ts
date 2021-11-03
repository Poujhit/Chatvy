import Gun from 'gun';
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

dotenv.config();

const corsOptions = {
  origin: process.env.ORIGIN,
};

const app = express();
app.use(cors(corsOptions));
console.log('Hello');
app.use((Gun as any).serve);

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
