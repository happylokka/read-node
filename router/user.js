const express = require('express')
const Result = require('../models/Result')
const { querySql } = require('../db')

const router = express.Router()

router.post('/login', function(req, res, next) {
  const { username, password } = req.body
  querySql('select * from admin_user').then(results => {
    console.log(results)
  }).catch(err => {
    console.log(err)
  })
  if (username === 'admin' && password === '111111') {
    new Result('登录成功').success(res)
  } else {
    new Result('登录失败').fail(res)
  }
})

router.get('/info', function(req, res, next) {
  res.json('user info...')
})

module.exports = router