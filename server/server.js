const express = require('express');
const app = express();
const authRoutes = require('./routes/userAuth.js');


app.use('/api/start', authRoutes);

app.listen(3000, () => {
    console.log("Server is working");
})