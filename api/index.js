import express from 'express'
import bodyParser from 'body-parser'
import productRoute from './routes/productRoute';
import orderRoute from './routes/orderRoute'

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 3000;

app.use('/api/products', productRoute);
app.use('/api/order', orderRoute);

// when a random route is inputed
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to this API.',
}));

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});

export default app;