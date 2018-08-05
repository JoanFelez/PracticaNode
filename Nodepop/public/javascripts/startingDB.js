'use strict'
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/Nodepop', { useNewUrlParser: true }); //connect to mongoose database
mongoose.connection.once('connected', () => {     //tell us if we are connected
    console.log('Connected to database mongodb://localhost:27017/Nodepop')
    initializeDB()
});

mongoose.connection.on('error', (error) => {     //tell the error if it occurs
    console.log('Database Error'+ error)
});

const adSchema = mongoose.Schema({
    name: String,
    intention: String,
    price: Number,
    photo: { data: Buffer, contentType: String },
    tags: Array
})

const Ad = mongoose.model('Ad', adSchema)

function initializeDB(){
    Ad.remove({}, (err)=>{
        if(err){
            console.error('Error deleting DB')
            return
        }
        console.log('All items deleted')
        Ad.insertMany(ads, function(err){
            if(err){
                return console.error('Error: ' + err)
            }
            console.log('Ads inserted in DB')        
        })
    })
}


const ads = [
    {
        name: 'Yamaha R1',
        intention: 'Buy',
        price: 3500,
        tags: ['Motor', 'Lifestyle'] //Motor, Lifestyle, Work, Mobile
    },
    {
        name: 'Iphone X',
        intention: 'Sell',
        price: 850,
        tags: ['Mobile']
    },
    {
        name: 'Xbox One',
        intention: 'Buy',
        price: 300,
        tags: ['Lifestyle']
    },
    {
        name: 'Miter Saw',
        intention: 'Sell',
        price: 1700,
        tags: ['Work', 'Lifestyle']
    },
    {
        name: 'Keyboard Razer Blackwidow Chroma',
        intention: 'Buy',
        price: 100,
        tags: ['Lifestyle']
    }
]
