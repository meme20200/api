const express = require('express');
const { randomMinecraft } = require('./handler');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/', (req, res) => {
  res.send(randomMinecraft());
  console.clear()
});


const PORT = process.env.PORT || 20200;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
