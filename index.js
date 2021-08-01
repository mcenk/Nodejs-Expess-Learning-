const express  = require('express')
const app = express()
const {customerDatabase}= require('./database')
const flatted = require('flatted')

app.set('view engine','pug')


app.get('/customers',async (req,res)=>{
const customers= await customerDatabase.load()
// res.send(flatted.stringify(customer))
res.render('customers',{customers})
})

app.get('/index', (req,res)=>{
    res.render('index')
})


app.listen(3007,()=>{

    console.log( 'port aktif')
})