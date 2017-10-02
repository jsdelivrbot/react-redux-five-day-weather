const express = require('express');
const path = require('path');
//create app
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(PORT, function(){
  console.log('express server is up and running on port ' + PORT);
});
