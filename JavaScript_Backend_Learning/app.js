// import express module
//creating an express application instatnce
//defining routes
//starting the server
const express = require('express');
const app = express();
//initliazing express
const port = 3000;
app.get('/', (req, res) => {
res.send("Hello world from express!")
});

app.listen(port, () => {
    console.log(`Example app listening at 
        http://localhost:${port}`);
});

