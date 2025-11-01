const express=require('express')
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const dotenv=require('dotenv')
const cors=require('cors')

/*
const express=require('express')
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const app=express()

dotenv.config({path:'./config.env'})
const DB=process.env.Databaseurl

app.use(bodyParser.json())
mongoose.connect(DB,{
  useNewUrlParser:true,
  useUnifiedTopology:true
}).then(()=>{
    }).catch(())

*/

const app=express()
dotenv.config({path:'./config.env'})
const DB=process.env.Databaseurl

app.use(bodyParser.json())
mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedToplogy:true
}).then(()=>{
   console.log("sss")
}).catch((err)=>{

})
app.use(cors({
    origin:"http://localhost:3001",
    methods:['GET','POST','PUT','DELETE'],
    allowedHeaders:['Content-Type','Authorization']

}))

const port=3003

app.listen(port,(err)=>{
    if(!err)
    {

    }


})