const express = require('express');
const app = express();
const PORT = 4000;

app.get('/project2', (req, res) => {
  res.send('Hello from Project 2!');
});

app.listen(PORT, () => {
  console.log(`Project 2 is listening on port ${PORT}`);
});
