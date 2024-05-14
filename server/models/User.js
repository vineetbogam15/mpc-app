const { required } = require('joi');
const mongoose = require('mongoose');

const userModel = mongoose.Schema({
    name: {
        type: String,
        max: 255,
        min: 6,
        required: true
    },
    username: {
        type: String,
        max: 100,
        min: 3
    },
    email: {
        type: String, 
        max: 255,
        min: 6,
        required: true
    },
    password: {
        type: String, 
        max: 255,
        min: 6,
        required: true
    },
    description: {
        type: String, 
        max: 255,
        min: 6,
        default: ""
    },
    dateOfBirth: {
        type: Date,
        default: Date.now()
    },
    genrePreference: {
        type: String, 
        max: 255,
        min: 6,
        default: ""
    },
    links: {
        type: String,
        default: ""
    },
    profilePicture: {
        type: String,
        default: ""
    },
    musicSpotlight: {
        type: [String],
        maxlength: 3,
        default: ""
    }
})

const User = mongoose.model('User', userModel);

module.exports = User;