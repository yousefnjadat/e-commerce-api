var express = require('express');
var router = express.Router();

router.get('/member', function (req, res, next) {
    console.log('respond whith a resorce');
    res.send('respond whith a resorce');
});

module.exports = router;