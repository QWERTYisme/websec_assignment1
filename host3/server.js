const express = require('express');
const fs = require("fs");
const bodyParser = require('body-parser'); //对post请求的请求体进行解析
const app = express();

app.use(bodyParser.urlencoded({ extended: false })) //解析request中body的urlencoded字符

app.get('/', function (req, res) {
    fs.createReadStream('index.html').pipe(res);
});

let port = 4000;

app.listen(4000, () => {
    console.log(`running on port ${port}`);
})