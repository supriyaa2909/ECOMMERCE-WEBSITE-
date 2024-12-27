import express from 'express';
import cors from 'cors';
import productsRouter from './routes/products.js';
import authRouter from './routes/auth.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/api/products', productsRouter);
app.use('/api/auth', authRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});