const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mysqlDBRouter = require('./MysqlDB/router');
const app = express();

dotenv.config();

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin , X-Requested-With, Content-Type, Accept , Authorization ');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        return res.status(200).json({})
    }
    next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', mysqlDBRouter);

app.listen(process.env.PORT || 5000, () => {
    console.log('server running on port 5000');
})

module.exports = app;
