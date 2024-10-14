var express = require('express')
var app = express()
var bodyparser = require('body-parser')

app.listen(3000, function (){
    console.log('start, asdasd')
})

app.use(express.static('public'))
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

app.get('/',function (req,res){
    console.log('test123')
    res.sendFile(__dirname + '/public/main.html')
})

app.get('/js',function (req,res){
    console.log('js dir is ' + __dirname + '/public/main.js')
    res.sendFile(__dirname + '/public/main.js')
})

app.get('/email_post',function (req,res){
    res.sendFile(__dirname+'/public/form.html')
})

app.post('/email_post',function (req,res){
    console.log(req.body)

    if(req.body.email === '')
    {
        res.send('No Email ?');
    }
    else
    {
        res.send('Welcom ' + req.body.email)
    }


})