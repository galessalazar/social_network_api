const router = require('express').Router();
const {
    getUsers,
    getSingleUserById,
    createUser,
    updateUserById,
    deleteUserById,
} = require('../../controllers/userController');

// api for users
router.route('/').get(getUsers)
.post(createUser);
console.log('mk');


// api for user by id
router.route('/:userId').get(getSingleUserById).put(updateUserById).delete(deleteUserById);
console.error('wtf');

module.exports = router;