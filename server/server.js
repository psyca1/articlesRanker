//Require the express package.
const express = require('express');

//Create an instance called 'app'.
const app = express();

//Call the root URL '/' and display some text to visually confirm succesful webpage connection.
app.get('/', (req,res)=> {
 res.send('Test');
});



//Display on the console what port the server is running on.
const server = app.listen(7000, ()=> {
 console.log(`Server successfully running on Port: ${server.address().port}`);
});
