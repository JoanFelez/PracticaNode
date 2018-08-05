'use strict'

const mongoose = require('mongoose')
const Ad = mongoose.model('Ad')

function filterQuery(query, callback){
    let filters = {}
    if(query.hasOwnProperty('name')){
        filters.name = query.name
    }
    if(query.hasOwnProperty('intention')){
        filters.intention = query.intention
    }
    if(query.hasOwnProperty('minprice')){
        filters.price = {$gte:query.minprice}
    }
    if(query.hasOwnProperty('maxprice')){
        filters.price = {$lte:query.maxprice}
    }
    if(query.hasOwnProperty('tags')){
        filters.tags = query.tags
    }
    if(Object.keys(filters).length === 0){
    return filters
    }
    Ad.find(filters, (err, values)=> {
        if(err){
            console.error('Error:', err)
            callback(err)
        }
        callback(null, values, filters)
    })    
}

module.exports = {
    filterQuery:filterQuery
}