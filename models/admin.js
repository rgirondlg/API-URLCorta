'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var AdminSchema = Schema({
    URL: {type: String, required: true},
});
module.exports =  mongoose.model('admin',AdminSchema);