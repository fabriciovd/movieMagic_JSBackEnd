const router = require("express").Router();
// const movieService = require("./services/movieService")

router.get("/", async (req,res)=>{
    // res.send("Home")
    res.render('home');
})

module.exports = router;