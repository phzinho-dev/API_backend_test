const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api", require('./router/router'));

app.listen(8080,() => {
    console.log('servidor funcionando');
});
