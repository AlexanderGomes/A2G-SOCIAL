const express = require('express')
const router = express.Router()
const{registerUser, loginUser, getMe, updateUser, deleteUser, getUser,followUser, unfollowUser, all} = require('../controllers/userCon')
const {protect} = require('../middleware/auth')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', protect, getMe)
router.get('/all', all)
router.route('/:id').put(updateUser).delete(deleteUser).get(getUser)
router.route('/:id/follow').put(followUser)
router.route('/:id/unfollow').put(unfollowUser)


module.exports = router
