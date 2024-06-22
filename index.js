import express from 'express';
import dotenv from 'dotenv';

dotenv.config();


const port = process.env.PORT || 4000;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/about', (req, res) => {
  res.send('<h1> you are about to visit my <span style="color:red">about page</span>');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});