const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {type:String},
    password:{type:String},
    // createdOn: {type:Date, default:new Date().getTime()}
},{
    timestamps:true
})
module.exports = mongoose.model('User', userSchema)