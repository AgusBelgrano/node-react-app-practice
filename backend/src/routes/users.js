const express = require('express');
const router = express.Router();
const { userController } = require('../controllers');

router.get('/', userController.getAll);

router.get('/:id', userController.getOne);

router.post('/', userController.create);

router.put('/', userController.update);

router.delete('/', userController.deleteUser);

module.exports = router;