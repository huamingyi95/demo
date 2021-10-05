const express = require('express')
const router=express.Router()
router.get('/get', (req, res) => {
  res.send('GET request to the homepage')
})
router.post('/post', function (req, res) {
  res.send('POST request to the homepage')
})
module.exports=router