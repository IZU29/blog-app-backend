const post = require('../model/post')
const CustomError = require('../Error/CustomError')

const getAllPost = async (req ,res) => {
    try{
    const getPost = await post.find({})
    res.status(200).json({getPost})
    }
    catch(error){
    return (next(new CustomError('Fill In all necessary credentials' , 400)))
    }
}

const createPost = async (req ,res) => {
    try{
    const { title , author , content } = req.body
    // const postBody = {  }
    const postBody = await post.create({title , author, content})
    res.status(200).json(postBody)
    console.log("Message Was Sent !!!")
    }
    catch(error){
    return (next(new CustomError('Fill In all necessary credentials' , 400)))
    }
}

const getSinglePost = async (req ,res) => {
    try{
        const userId = req.params.id
        console.log(typeof userId)
        const getPost = await post.findOne({ _id : userId })
        if(!getPost){
        return (next(new CustomError('Not Found !!!' , 404)))
        }
        res.status(200).json({getPost})
    }
    catch(error){
    return (next(new CustomError(error.message , 400)))
    }
}

module.exports = {
    getAllPost,
    createPost,
    getSinglePost
}