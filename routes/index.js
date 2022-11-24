const express = require('express')

const router = express.Router() // call router (controler) version of express

router.get('/', (req, res) => { // creating routes - '/' this is base location(localhost:3000 )

  res.render('index')   // This is a function we send in, with request and a response . if it res.send("hello") , it send it 
  // here we are rendering index

})

module.exports = router // export this section