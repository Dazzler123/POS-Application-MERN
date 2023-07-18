const express = require('express');
const router = express.Router();

router.get('/', ()=> {
    console.log("Get Request in StudentRoutes")
});

module.exports = router;