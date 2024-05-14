const mongoose = require('mongoose');

const postModel = mongoose.Schema({
    username: {
        type: String,
        max: 100,
        min: 3
    },
    songTitle: {
        type: String,
        min: 1,
        max: 100
    },
    link: {
        type: String,
        profile: mongoose.SchemaTypes.link
    }, 
    image: {
        type: String,
        profile: mongoose.SchemaType.link
    }
    
});