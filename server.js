// init project
var express = require('express');
var app = module.exports = express();
var multer = require('multer');
var upload = multer({dest: "file-size/"});
var cors = require('cors');
var bodyparser = require('body-parser');

//use dependencies
app.use(express.static('public'));
app.use(cors());
app.use(bodyparser.json());

//submit file
app.post('/file-size', upload.single('file'), function(req, res){
  var size = req.file.size
  res.json({size: size})
})

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
