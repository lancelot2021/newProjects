const express = require('express');
const app = express();

app.use(express.static(__dirname+'/public'));

app.get('/book', (req, res)=>{
    res.sendFile(__dirname+'/font/book.html');
});

app.get('/film', (req, res)=>{
    res.sendFile(__dirname+'/font/film.html');
});


app.listen(3000, ()=> console.log("Express is listening on port 3000"));