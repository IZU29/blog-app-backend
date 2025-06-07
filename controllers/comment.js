const Comment = require('../model/comment')

const createcomment = async (req , res)=>{
    const {userId} = req.user
    const {postId} = req.params
    const {comment} = req.body
    const commentContent = { userId , postId , comment }
    console.log(commentContent)
    // console.log(req.params)
    const newComment = await Comment.create(commentContent)
    res.status(200).json(newComment)
}
const getComment = async (req , res) => {
    const {userId} = req.user
    const {postId} =req.params
    console.log(req.params)
    const CommentInfo = await Comment.find({postId : postId})    
    res.status(200).json(CommentInfo) 

}
module.exports = {
    createcomment ,  getComment
}