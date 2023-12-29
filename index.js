const express = require('express')
const app = express()
const path=require('path')

require('dotenv').config()
const port = process.env.SERVER_PORT  //port no mungwaya

// cors
const cors = require('cors');

app.use(express.json())   //json stringify k liye
app.use(cors());

const clientpath=path.join(__dirname,'./Appfurniture/dist')


app.use('/',express.static(clientpath))

// header('Access-Control-Allow-Origin')

// sary folders k Router files ko connect kr rhi index.js se
app.use('/api',require('./API/brands/Router'))
app.use('/api',require('./API/category/Router'))
app.use('/api',require('./API/product/Router'))
app.use('/api',require('./API/user/Router'))
app.use('/api',require('./API/order/Router'))

app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,'./Appfurniture/dist/index.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port} `)
})