const express = require('express');
const app = express();
const port = 3000;

// Respond to GET request on the root route
app.get('/', (req, res) => {
  res.send('GET request to the homepage');
});

// Respond to POST request on the root route
app.post('/', (req, res) => {
  res.send('POST request to the homepage');
});

// Respond to GET request on the /about route
app.get('/about', (req, res) => {
  res.send('About page');
});

// Catch all other routes
app.all('*', (req, res) => {
  res.status(404).send('404 - Page not found');
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
//app.get() - Handle GET requests
// app.post() - Handle POST requests
// app.put() - Handle PUT requests
// app.delete() - Handle DELETE requests
// app.all() - Handle all HTTP methods