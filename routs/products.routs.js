var express = require('express');
var router = express.Router();

router.get('/Products', function (req, res, next) {
    res.send('respond whith a resorce');
});

module.exports = router;