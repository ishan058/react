// backend/routes/userRoutes.js

const express = require('express');
const { getUsers, banUser, unbanUser, promoteUser } = require('../controllers/userController');

const router = express.Router();

router.get('/', getUsers);
router.put('/ban/:id', banUser);
router.put('/unban/:id', unbanUser);
router.put('/promote/:id', promoteUser);

module.exports = router;
