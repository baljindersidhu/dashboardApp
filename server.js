(function () {
  'use strict';

  var express = require('express')
  var app = express();
  var PORT = 8040;

  app.use(express.static(__dirname + '/'))

  app.get('/', callback)

  function callback(request, response) {
    response.redirect('index.html')
  }

  app.listen(PORT)
})();
