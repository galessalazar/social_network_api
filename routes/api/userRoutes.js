const router = require('express').Router();
const {
    getUsers,
    getSingleUserById,
    createUser,
    updateUserById,
    deleteUserById,
} = require('../../controllers/userController');

// api for users
router.route('/').get(getUsers).post(createUser);

// api for user by id
router.route('/:userId').get(getSingleUserById).delete(deleteUserById);

// i think i could combine these two instead i dont think the below is correct

// api for users who update by id
router.route('/:userId/updatedUsers').put(updateUserById).delete(updateUserById);

module.exports = router;