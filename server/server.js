//Require the express package.
const express = require('express');

//Create an instance called 'app'.
const app = express();

app.set(`view engine`, `ejs`);
app.set(`views`, `views`);
app.use(express.static("static"));

//Load the Welcome page
app.get(`/`, function(req,res){
 //var data = {loadedIndex:true}
 res.render(`pages/index`);
 console.log(`Rendering Index Page`);
});

//Load the View Articles page
app.get(`/viewArticles/`, function(req,res){
 const data = {"loadedView":true};
 res.render(`./pages/viewArticles`, data);
 console.log(`Rendering View Page`);
});

//Load the Ranked Articles page
app.get(`/rankedArticles/`, function(req,res){
 const data = {loadedRanked:true};
 res.render(`./pages/rankedArticles`, data);
 console.log(`Rendering Ranked Page`);
});

//Display on the console what port the server is running on.
const server = app.listen(7000, ()=> {
 console.log(`Server successfully running on Port: ${server.address().port}`);
});
