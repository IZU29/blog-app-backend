const Express = require('express')
const router = Express.Router()

const authMiddleware  = require('../middleware/auth')
const { createcomment , getComment } = require('../controllers/comment')

router.route('/:postId').get(authMiddleware , getComment).post(authMiddleware , createcomment)

module.exports = router