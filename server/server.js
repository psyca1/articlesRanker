//Require the express package.
const express = require('express');

//Create an instance called 'app'.
const app = express();

app.set(`view engine`, `ejs`);
app.set(`views`, `views`);
app.use(express.static("views"));

//Load the Welcome page
app.get(`/`, function(req,res){
 //var data = {loadedIndex:true}
 res.render(`pages/index`);
 console.log(`Rendering Index Page`);
});

//Display on the console what port the server is running on.
const server = app.listen(7000, ()=> {
 console.log(`Server successfully running on Port: ${server.address().port}`);
});
