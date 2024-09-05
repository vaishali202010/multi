const express = require('express');
const app = express();
const PORT = 3000;

app.get('/project1', (req, res) => {
  res.send('Hello from Project 1!');
});

app.listen(PORT, () => {
  console.log(`Project 1 is listening on port ${PORT}`);
});
