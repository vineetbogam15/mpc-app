const express = require('express');
const app = express();
const postRoutes = require('./routes/post');

app.use('/', postRoutes);

app.listen(3000, () => {
    console.log("Server is working");
})