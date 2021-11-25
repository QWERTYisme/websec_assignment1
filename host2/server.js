const express = require('express');
const cors = require('cors');

const bodyParser = require('body-parser'); //对post请求的请求体进行解析
const app = express();

app.use(bodyParser.urlencoded({ extended: false })) //解析request中body的urlencoded字符

app.all('/api/date', function (req, res) {

    let obj = {
        data: Date()
    };
    res.json(obj); //以json格式输出
});

app.all('/api/datecors', cors(), function (req, res) {

    let obj = {
        data: Date()
    };
    res.json(obj); //以json格式输出
});

app.get('/api/jsonpdate', (req, res) => {
    let func = req.query.callback
    let data = JSON.stringify({
        date: Date()
    })
    res.end(func + `(${data})`)
})

let port = 4000;

app.listen(4000, () => {
    console.log(`running on port ${port}`);
})