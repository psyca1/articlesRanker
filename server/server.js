const express = require('express');
const app = express();


app.get('/', (req,res)=> {
 res.send('Test');
});




const server = app.listen(7000, ()=> {
 console.log(`Server successfully running on Port: ${server.address().port}`);
});
