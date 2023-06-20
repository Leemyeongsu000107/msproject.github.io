const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/images', express.static(path.join(__dirname, 'images')));




app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/index1.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'index1.html'));
});

app.get('/index2.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'index2.html'));
});

app.get('/index3.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'index3.html'));
});

app.get('/index4.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'index4.html'));
});

app.get('/index5.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'index5.html'));
});

app.get('/index6.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'index6.html'));
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:3000`);
});
