const express = require('express');
const app = express();
 
// __dirname holds the file path to the current directory.
app.use(express.static(__dirname + '/public'));
 
app.get('/year', (request, response) => {
  // request is an object that contains details
  // about the request that was received.
  // response is an object that contains methods
  // for populating the response to be sent.
  // These are often abbreviated as "req" and "res"
  // as you'll see in later code.
  // This explicitly passes a string to "send" because if a
  // number is passed it treats it as a response status code.
  response.send(new Date().getFullYear().toString());
});
 
const listener = app.listen(1919, () => {
  console.log('browse http://localhost:' + listener.address().port);
});