const express= require('express');
const app=express();

app.set('views', __dirname,'views');
app.set ('view engine', 'ejs');


app.get('/', function(req,res){
	res.sendFile(__dirname+'/public/index.html');
});


app.get('/hello', function(req,res){

	res.render('hello', {who: 'world'});

});



app.listen(3000);