const cluster = require("cluster")
const numCPU = require("os").cpus()
var express = require('express')
var app = express()

if(cluster.isMaster){
  for(let i=0;i<numCPU.length;i++){
    cluster.fork()
  }
  console.log("朱金城",process.pid)
  cluster.on("exit",(worker,code,signal)=>{
    console.log('work',worker.pid)
  })

}else{
  console.log("开启进程了",process.pid)
  app.get('/', function (req, res) {
    console.log("请求进来了")
    let k = 0
    for(let i =0;i<2000000000;i++){
      k++
    }
    console.log("麻蛋",process.pid)
    res.send('hello world1')
  })
  app.listen(3001)

}
