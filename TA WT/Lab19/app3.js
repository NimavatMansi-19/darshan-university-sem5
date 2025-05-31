const express = require('express');
const fs = require('fs');
const app = express();

app.get('/about', (req, res) => {
  fs.readFile('about.txt', 'utf8', (err, data) => {
    if (err) return res.status(500).send('Error reading file');
    res.send(data);
  });
});
app.get('/contact', (req, res) => {
  fs.readFile('contact.txt', 'utf8', (err, data) => {
    if (err) return res.status(500).send('Error reading file');
    res.send(data);
  });
});
app.listen(3000,()=>{
    console.log('Server is running at 3000')
})