const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Types.ObjectId,
        ref:'User',
        required: true
    },
    postId:{
        type: String,
        default:'',
        required: true
    },
    comment:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Comment' , CommentSchema)