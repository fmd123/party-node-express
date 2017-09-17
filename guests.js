'use strict'
var fs = require('fs');
var path = require('path');
var guestsPath = path.join( '__dirname', 'guests.json');
//I've tried __dirname, './party', __party and also just 'party'

fs.readFile(guestsPath, 'utf8', (err, data)=>{
  if(err){
    throw err;
  }
  var guests = JSON.parse(data);
  console.log(guests)

})


//https://nodejs.org/api/path.html#path_path_join_paths
//for example given:
///foo/bar//baz/asdf/quux/.. and /foo/bar//baz/asdf are the same since you go to quux and than up
//https://www.reddit.com/r/node/comments/3op6yn/pathnormalize_confusion/?st=j7jy0gtz&sh=8478c58f   :-)  sigh... I feel so much better having that sorted..
