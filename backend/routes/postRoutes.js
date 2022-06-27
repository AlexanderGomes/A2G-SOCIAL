const express = require('express')
const router = express.Router()


const {createPost, getPost, deletePost, updatePost, like__deslike__post, getTimelinePosts} = require('../controllers/postCon')

router.post('/', createPost)
router.route('/:id').get(getPost)
router.route('/:id').delete(deletePost).put(updatePost)
router.route('/:id/like').put(like__deslike__post)
router.route('/timeline/all').get(getTimelinePosts)

module.exports = router
