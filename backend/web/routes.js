const express = require('express');
const router = express.Router();


router.post("/",()=>{
    console.log("hello from /")
});


module.exports = router;