const express = require('express')
const app = express()
const port = 3001
const {fff} = require("./util")
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});

app.post('/test', (req, res) => {
  console.log(fff(req.body.fb));

  res.send({fff:'Hello World111!'})
})

app.get('/', (req, res) => res.send('Hello World111!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))