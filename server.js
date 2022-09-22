const express = require('express')
const server = express()
const port = 5000

// Nunjucks //
const nunjucks = require ('nunjucks')

server.use (express.static('public'))

server.set ("view engine", "njk")

nunjucks.configure("views", {
    express: server
})


// Routes //


server.get("/",(req,res)=>{
    return res.render("index")
})

server.get("/checkin",(req,res)=>{
    return res.render("checkin")
})


//404//
server.use((req,res)=>{
    res.status(404).render("not-found")
})


// Listen //

server.listen(port, ()=>{
    console.log(`serve is running in http://localholst/8080`)
})
