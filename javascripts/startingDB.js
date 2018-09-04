'use strict';
const mongoose = require('mongoose');
const constants = require('./constants');

mongoose.connect('mongodb://localhost:27017/Nodepop', {useNewUrlParser: true}); // connect to mongoose database
mongoose.connection.once('connected', () => { // tell us if we are connected
    console.log('Connected to database mongodb://localhost:27017/Nodepop');
    initializeDB();
});

mongoose.connection.on('error', (error) => { // tell the error if it occurs
    console.log('Database Error'+ error);
});

const adSchema = new mongoose.Schema({
    name: String,
    intention: String,
    price: Number,
    photo: String,
    tags: Array,
});

const Ad = mongoose.model('Ad', adSchema);

function initializeDB() {
    Ad.remove({}, (err)=>{
        if (err) {
            console.error('Error deleting DB');
            mongoose.connection.close();
        }
        console.log('All items deleted');
        Ad.insertMany(constants.ads, function(err) {
            if (err) {
                console.error('Error: ' + err);
                mongoose.connection.close();
            }
            console.log('Ads inserted in DB');
            mongoose.connection.close();
        });
    });
}

