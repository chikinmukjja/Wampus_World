/**
 * Created by junwoo on 2016-07-21.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var lankingSchema = new Schema({
    id: String,
    time: String,
    score: Number
});

module.exports = mongoose.model('lanking',lankingSchema)