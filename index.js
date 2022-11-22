const express = require('express');
const app = express();
const router = require('./router/router');

app.use(router);

app.listen(8080, function(req,res){
    console.log('servidor funcionando');
});
