/*
 * @Author: Lqf
 * @Date: 2021-09-23 14:57:06
 * @LastEditors: Lqf
 * @LastEditTime: 2021-09-29 10:04:15
 * @Description: 我添加了修改
 */
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)

app.post('/user/login', (req, res) => {
  const { username } = req.body
  if (username === "admin" || username === "jerry") {
    res.json({
      code: 1,
      data: username
    })
  } else {
    res.json({
      code: 10204,
      message: "用户名或密码错误"
    })
  }
})

app.get("/user/info", (req, res) => {
  const roles = req.headers['authorization'].split(' ')[1] ? ["admin"] : ["editor"]
  res.json({
    code: 1,
    data: roles,
    happy: 'yes'
  })
})

app.listen(3000, () => {
  console.log('已打开')
})