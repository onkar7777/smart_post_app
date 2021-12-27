const express = require('express');
const router = express.Router();
const {
    create
} = require('../controllers/post');

router.get('*', create);


module.exports = router;