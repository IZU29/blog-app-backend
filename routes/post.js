const Express = require('express')
const router = Express.Router()
const authMiddleware = require('../middleware/auth')

const { getAllPost, getSinglePost, createPost } = require('../controllers/post')

router.route('/').get(getAllPost).post(createPost)
router.route('/:id').get(getSinglePost)

// Remember to authenticate Middleware for single post !!!
module.exports = router