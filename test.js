
const express = require('express');
const router = express.Router();


router.get("/test" , async (req,res) => {
    try {
        res.json({
            status : 200,
            message : " Nice get data!"
        });
    } catch (error) {
        console.log(error);
        return res.status(404).send("sever error")
    }
})

module.exports = router;