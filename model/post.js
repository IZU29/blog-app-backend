const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    title : {
        type : String,
        required: [true , 'Must include a text'],
    },
    author: {
        type : String,
        required: true
    },
    content: {
        type : String,
        required: true
    }
},
{timestamps : true})

module.exports = mongoose.model('post' , PostSchema)
