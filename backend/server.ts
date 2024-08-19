import express, { Express, Request, Response } from 'express';
import 'dotenv/config'
import { products } from './data/products.js';

const port: string | number = process.env.PORT || 5000;

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Server is running...');
});

app.get('/api/products', (req: Request, res: Response) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find((product) => product._id === req.params.id);
  res.json(product);
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
