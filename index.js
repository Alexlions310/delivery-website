const express = require('express');
var   path = require('path');
// const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3000;
app.use(cors());


app.set('view engine', 'ejs');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(express.json());
app.use(express.static("public"));

app.get('/',function(req,res){
     res.render('index');
});
app.get('/createOrder/createdOrder',function(req,res){
    res.send("Ваш заказ успешно создан");
});

app.post("/",function(req,res){
    res.render('index');
});
app.post('/createOrder', (req, res) => {
     res.render('createOrder',{
        fullname1v: req.body.input1,
        name1v: req.body.input1name,
        lat1v: req.body.input1lat,
        lng1v: req.body.input1lng,
        fullname2v: req.body.input2,
        name2v: req.body.input2name,
        lat2v: req.body.input2lat,
        lng2v: req.body.input2lng,
        clickedBtnName: req.body.clickedBtnName

     });
     console.log(req.body);
});

app.get('/createOrder', (req, res) => {
     res.render('createOrder',{
        fullname1v: req.body.input1,
        name1v: req.body.input1name,
        lat1v: req.body.input1lat,
        lng1v: req.body.input1lng,
        fullname2v: req.body.input2,
        name2v: req.body.input2name,
        lat2v: req.body.input2lat,
        lng2v: req.body.input2lng,
        clickedBtnName: req.body.clickedBtnName

     });
});

app.get('/diplom',(req,res)=>{
    res.render("remover");
});
app.get("/heyu",function(req,res){
   res.render("validation");
});
app.post('/formdata',function(req,res){
    res.redirect("/createOrder");
});

app.listen(13000||port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});