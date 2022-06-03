const express = require("express");

const router = express.Router();

router.get("/name", (req, res) => {
    res.send("vimal patel");
})

module.exports = router;