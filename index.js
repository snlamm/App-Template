const express = require('express');

const app = express();
const port = 3000;

// use JSON to pass data around
app.use(express.json());

app.get('/ping', async (req, res) => res.json('pong'));

// Add other routes here.

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
