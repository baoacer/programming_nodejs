const express = require('express')
const path = require('path');

const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello World!')
})

router.get('/index.html', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
})

router.get('/process_get', function (req, res) {

    // Chuan bi output trong dinh dang JSON
    response = {
    first_name:req.query.first_name,
    last_name:req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
})

module.exports = router