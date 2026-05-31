const express = require('express');
const app = express();
const port = 3000;

// Route handling query parameters
app.get('/search', (req, res) => {
  // Access query parameters using req.query
  const { q, category } = req.query; 
  //reading the keys we can add many keys as we like
  // req.query is only saving the query parameters part of the url
//   http://example.com/search?q=express&category=books
//                            ↑_____________________↑
//                         only THIS part goes into req.query
// it saves the url part after the ?
  res.send(`Search query: ${q}, Category: ${category || 'Guest'}`);
  // || 'none' is customizable we can use 'guest'

});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});