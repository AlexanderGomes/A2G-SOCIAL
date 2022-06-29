const express = require('express')
const router = express.Router()


const {  getGoals,
    updateGoal,
    deleteGoal,
    setGoal,like__deslike__post, getTimelinePosts} = require('../controllers/postCon')

router.post('/', setGoal)
router.route('/:id').get(getGoals)
router.route('/:id').delete(deleteGoal).put(updateGoal)
router.route('/:id/like').put(like__deslike__post)
router.route('/timeline/all').get(getTimelinePosts)

module.exports = router
