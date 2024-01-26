const router = require("express").Router();
// const movieService = require("./services/movieService")

router.get("/", async (req,res)=>{
    // res.send("Home")
    res.render('home');
})

router.get("/about",(req,res)=>{
    res.render("about")
})

router.get("/search",(req,res)=>{
    //TODO: Render all movies from database
    res.render("search")
})
module.exports = router;