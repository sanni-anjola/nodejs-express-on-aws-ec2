const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Express Demo App</h1> <h4>Message: Success</h4> <p>Version 1.3</p>');
})

app.get('/products', (req, res) => {
  res.send([
    {
      productId: '101',
      price: 120
    },
    {
      productId: '102',
      price: 150
    },
    {
      productId: '103',
      price: 180
    }
  ])
})

app.listen(port, ()=> {
  console.log(`Demo app is up and listening to port: ${port}`);
})
 
