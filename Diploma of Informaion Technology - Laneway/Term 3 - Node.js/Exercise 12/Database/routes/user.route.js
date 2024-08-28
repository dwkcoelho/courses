const express = require('express');
const router = express.Router();
const {
    loginUser,
    createUser,
    getUsers,
    getUserById,
    updateUserById,
    deleteUser
} = require('../controllers/user.controller.js');

router.post('/login', loginUser);
router.post('/createUser', createUser);
router.get('/', getUsers);
router.get('/:id', getUserById);
router.patch('/:id', updateUserById);
router.put('/:id', updateUserById);
router.delete('/:id', deleteUser);

module.exports = router;