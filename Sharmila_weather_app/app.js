
const express=require("express");
const bodyParser=require("body-parser");
const https = require('https');

const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.get('/',function(req,res){
 res.sendFile(__dirname+"/index.html");
  

});
app.post('/',function(req,res){

  
var query=req.body.city;
var apikey= "7e34aa1b1b97fe8e6e0233e91782bfb8";
var unit="metric";

 url="https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apikey+"&units="+unit;
 https.get(url,function(response){
   console.log(response.statusCode);
   response.on('data',function(data){
     var  weatherdata=JSON.parse(data);
     
    var temperature=weatherdata.main.temp;
   var  descrp=weatherdata.weather[0].description;
   var icon=weatherdata.weather[0].icon;
   var imgurl="https://openweathermap.org/img/wn/"+icon+"@2x.png";
   
     res.write("<p> weather description " +descrp+"</p>");
     res.write("<h1>The temperature in "+query+" is "+temperature+" degree celsius</h1>");
     res.write("<img src="+imgurl+">");
    res.send();
     

   });
 });
  
});



app.listen(5000,function(){
    console.log("your server is running at port 5000");
});

// var query="london";
// var apikey= "7e34aa1b1b97fe8e6e0233e91782bfb8";
// var unit="metric";

//  url="https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apikey+"&units="+unit;
//  https.get(url,function(response){
//    console.log(response.statusCode);
//    response.on('data',function(data){
//      const  weatherdata=JSON.parse(data);
     
//     const temp=weatherdata.main.temp;
//    const  descrp=weatherdata.weather[0].description;
//      res.write("<p> weather description " +descrp+"</p>");
//      res.write("<h1>The temperature in london is "+temp+" degree celsius</h1>");
//      res.write(`<img src="https://openweathermap.org/img/wn/10d@2x.png">`);
//     res.send();
     

//    });
//  });