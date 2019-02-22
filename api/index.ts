import express from 'express';
import { foo } from '~app/services/foo';

const app = express();

app.use('/*', (req, res) => {
  res.json({ foo: foo() });
});

export default app;
