const express = require('express');
const app = express();

function myMiddleware(req, res, next) {
  console.log('Middleware is running');
  next(); 
}

app.use(myMiddleware);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
