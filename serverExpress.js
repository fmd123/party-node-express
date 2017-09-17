'use strict'
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.disable('x-powered-by');

app.get('/guests', (req, res)=>{
  fs.readFile(guestsPath, 'utf8', err, guestsJSON=>{
    if(err){
      console.error(err);
      return res.sendStatus(500);
    }
    var guests = JSON.parse(guestsJSON);
    res.send(guests);s
  });//end of readFile callback
});//end of app.get callback

app.use((req, res)=>{
  res.sendStatus(404);
});//end of app.use callback

app.listen(port,()=>{
  console.log("Listening on port: ", port);
});
